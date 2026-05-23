import { useState } from 'react'
import {
  DndContext, DragOverlay, PointerSensor, useSensor, useSensors,
  closestCorners,
} from '@dnd-kit/core'
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { PROJECTS, STATUSES, STATUS_LABELS, getProject } from '../lib/prds'
import PrdEditor from '../components/PrdEditor'
import './ProjectView.css'

function timeAgo(ts) {
  const m = Math.floor((Date.now() - new Date(ts)) / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

function StatusBadge({ status }) {
  return <span className={`prd-status prd-status--${status}`}>{STATUS_LABELS[status]}</span>
}

function KanbanCard({ prd, onEdit, onDelete, onOpen, isDragging }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: prd.id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  }
  return (
    <div ref={setNodeRef} style={style} className="kanban-card" {...attributes} {...listeners}>
      <div className="kanban-card-title">{prd.title}</div>
      <div className="kanban-card-meta">{timeAgo(prd.updatedAt)}</div>
      <div className="kanban-card-actions" onPointerDown={e => e.stopPropagation()}>
        <button className="kanban-card-btn" onClick={() => onOpen(prd)}>Open →</button>
        <button className="kanban-card-btn" onClick={() => onEdit(prd)}>Edit</button>
        <button className="kanban-card-btn kanban-card-btn--danger" onClick={() => onDelete(prd.id)}>Delete</button>
      </div>
    </div>
  )
}

function KanbanColumn({ status, prds, onEdit, onDelete, onOpen, activeId }) {
  return (
    <div className="kanban-col">
      <div className="kanban-col-header">
        <span className="kanban-col-title">{STATUS_LABELS[status]}</span>
        <span className="kanban-col-count">{prds.length}</span>
      </div>
      <SortableContext items={prds.map(p => p.id)} strategy={verticalListSortingStrategy}>
        <div className="kanban-col-cards">
          {prds.map(prd => (
            <KanbanCard
              key={prd.id}
              prd={prd}
              onEdit={onEdit}
              onDelete={onDelete}
              onOpen={onOpen}
              isDragging={activeId === prd.id}
            />
          ))}
          {prds.length === 0 && <div className="kanban-col-empty">Drop here</div>}
        </div>
      </SortableContext>
    </div>
  )
}

export default function ProjectView({ projectId, prds, onNavigate, onCreatePrd, onUpdatePrd, onDeletePrd }) {
  const project = getProject(projectId)
  const projectPrds = prds.filter(p => p.projectId === projectId)
  const [viewMode, setViewMode] = useState('kanban')
  const [editorOpen, setEditorOpen] = useState(false)
  const [editingPrd, setEditingPrd] = useState(null)
  const [activeId, setActiveId] = useState(null)

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))

  function handleDragStart({ active }) {
    setActiveId(active.id)
  }

  function handleDragEnd({ active, over }) {
    setActiveId(null)
    if (!over || active.id === over.id) return
    const draggedPrd = projectPrds.find(p => p.id === active.id)
    if (!draggedPrd) return
    const targetPrd = projectPrds.find(p => p.id === over.id)
    const newStatus = targetPrd ? targetPrd.status : over.id
    if (STATUSES.includes(newStatus) && draggedPrd.status !== newStatus) {
      onUpdatePrd(active.id, { status: newStatus })
    }
  }

  function handleDragOver({ active, over }) {
    if (!over) return
    const draggedPrd = projectPrds.find(p => p.id === active.id)
    const targetPrd = projectPrds.find(p => p.id === over.id)
    if (!draggedPrd || !targetPrd) return
    if (draggedPrd.status !== targetPrd.status) {
      onUpdatePrd(active.id, { status: targetPrd.status })
    }
  }

  const activePrd = activeId ? projectPrds.find(p => p.id === activeId) : null

  return (
    <div className="project-view">
      <header className="project-view-header">
        <button className="project-back-btn" onClick={() => onNavigate({ page: 'projects' })}>
          ← Projects
        </button>
        <div className="project-view-title">
          <span className="project-view-icon">{project?.icon}</span>
          <span className="project-view-name">{project?.name}</span>
        </div>
        <div className="project-view-actions">
          <div className="view-toggle">
            <button className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>List</button>
            <button className={`view-toggle-btn ${viewMode === 'kanban' ? 'active' : ''}`} onClick={() => setViewMode('kanban')}>Kanban</button>
          </div>
          <button className="new-prd-btn" onClick={() => { setEditingPrd(null); setEditorOpen(true) }}>
            + New PRD
          </button>
        </div>
      </header>

      <div className="project-view-body">
        {viewMode === 'list' ? (
          <div className="prd-list">
            {projectPrds.length === 0 ? (
              <div className="prd-list-empty">No PRDs yet — create one to get started.</div>
            ) : (
              <table className="prd-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Updated</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {projectPrds.map(prd => (
                    <tr key={prd.id}>
                      <td className="prd-table-title">{prd.title}</td>
                      <td><StatusBadge status={prd.status} /></td>
                      <td className="prd-table-date">{timeAgo(prd.updatedAt)}</td>
                      <td className="prd-table-actions">
                        <button className="prd-action-btn" onClick={() => onNavigate({ page: 'builder', prdId: prd.id })}>Open →</button>
                        <button className="prd-action-btn" onClick={() => { setEditingPrd(prd); setEditorOpen(true) }}>Edit</button>
                        <button className="prd-action-btn prd-action-btn--danger" onClick={() => onDeletePrd(prd.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            <div className="kanban-board">
              {STATUSES.map(status => (
                <KanbanColumn
                  key={status}
                  status={status}
                  prds={projectPrds.filter(p => p.status === status)}
                  onEdit={prd => { setEditingPrd(prd); setEditorOpen(true) }}
                  onDelete={id => onDeletePrd(id)}
                  onOpen={prd => onNavigate({ page: 'builder', prdId: prd.id })}
                  activeId={activeId}
                />
              ))}
            </div>
            <DragOverlay>
              {activePrd ? (
                <div className="kanban-card kanban-card--overlay">
                  <div className="kanban-card-title">{activePrd.title}</div>
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        )}
      </div>

      {editorOpen && (
        <PrdEditor
          prd={editingPrd}
          projectId={projectId}
          onClose={() => setEditorOpen(false)}
          onSave={(data) => {
            if (editingPrd) {
              onUpdatePrd(editingPrd.id, data)
            } else {
              onCreatePrd(projectId, data)
            }
            setEditorOpen(false)
          }}
        />
      )}
    </div>
  )
}
