import { useState } from 'react'
import { Sparkle, ChartBar, FlowArrow, Database, TrendUp, Bell, GearSix } from '@phosphor-icons/react'
import {
  DndContext, DragOverlay, PointerSensor, useSensor, useSensors,
  closestCorners,
} from '@dnd-kit/core'
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { PROJECTS, STATUSES, STATUS_LABELS, getProject } from '../lib/prds'
import { sprintLabel } from '../lib/sprints'
import PrdEditor from '../components/PrdEditor'
import SprintBar from '../components/SprintBar'
import UserMenu from '../components/UserMenu'
import './ProjectView.css'

const PROJECT_ICONS = { Sparkle, ChartBar, FlowArrow, Database, TrendUp, Bell, GearSix }

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

function KanbanCard({ prd, sprints, onEdit, onDelete, onOpen, isDragging }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: prd.id })
  const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.4 : 1 }
  const cardSprints = sprints.filter(s => prd.sprintIds?.includes(s.id))
  return (
    <div ref={setNodeRef} style={style} className="kanban-card" {...attributes} {...listeners}>
      <div className="kanban-card-top">
        {prd.prdId && <span className="kanban-prd-id">{prd.prdId}</span>}
        <span className="kanban-card-time">{timeAgo(prd.updatedAt)}</span>
      </div>
      <div className="kanban-card-title">{prd.title}</div>
      {cardSprints.length > 0 && (
        <div className="kanban-sprint-chips">
          {cardSprints.map(s => (
            <span key={s.id} className="kanban-sprint-chip">{s.name}</span>
          ))}
        </div>
      )}
      <div className="kanban-card-actions" onPointerDown={e => e.stopPropagation()}>
        <button className="kanban-card-btn" onClick={() => onOpen(prd)}>Open →</button>
        <button className="kanban-card-btn" onClick={() => onEdit(prd)}>Edit</button>
        <button className="kanban-card-btn kanban-card-btn--danger" onClick={() => onDelete(prd.id)}>Delete</button>
      </div>
    </div>
  )
}

function KanbanColumn({ status, prds, sprints, onEdit, onDelete, onOpen, activeId }) {
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
              sprints={sprints}
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

export default function ProjectView({
  projectId, prds, sprints = [], onNavigate,
  onCreatePrd, onUpdatePrd, onDeletePrd,
  onCreateSprint, onDeleteSprint,
  theme, onThemeToggle, onSignOut,
}) {
  const project = getProject(projectId)
  const ProjectIcon = project ? PROJECT_ICONS[project.phosphorIcon] : null
  const projectPrds = prds.filter(p => p.projectId === projectId)
  const [viewMode, setViewMode] = useState('kanban')
  const [activeSprint, setActiveSprint] = useState(null) // null=all, '__none__'=unassigned, id=sprint
  const [editorOpen, setEditorOpen] = useState(false)
  const [editingPrd, setEditingPrd] = useState(null)
  const [activeId, setActiveId] = useState(null)

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))

  // Sprint filtering
  const visiblePrds = activeSprint === null
    ? projectPrds
    : activeSprint === '__none__'
      ? projectPrds.filter(p => !p.sprintIds?.length)
      : projectPrds.filter(p => p.sprintIds?.includes(activeSprint))

  function handleDragStart({ active }) { setActiveId(active.id) }

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
          {ProjectIcon && <ProjectIcon size={20} weight="fill" className="project-view-icon" />}
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
          <UserMenu theme={theme} onThemeToggle={onThemeToggle} onSignOut={onSignOut} />
        </div>
      </header>

      <SprintBar
        sprints={sprints}
        activeSprint={activeSprint}
        onSelectSprint={setActiveSprint}
        onCreateSprint={onCreateSprint}
        onDeleteSprint={id => {
          // Remove sprint from filter if it was selected
          if (activeSprint === id) setActiveSprint(null)
          onDeleteSprint(id)
        }}
      />

      <div className="project-view-body">
        {viewMode === 'list' ? (
          <div className="prd-list">
            {visiblePrds.length === 0 ? (
              <div className="prd-list-empty">No PRDs yet — create one to get started.</div>
            ) : (
              <table className="prd-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Sprints</th>
                    <th>Status</th>
                    <th>Updated</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {visiblePrds.map(prd => {
                    const prdSprints = sprints.filter(s => prd.sprintIds?.includes(s.id))
                    return (
                      <tr key={prd.id}>
                        <td className="prd-table-id">{prd.prdId || '—'}</td>
                        <td className="prd-table-title">{prd.title}</td>
                        <td className="prd-table-sprints">
                          {prdSprints.length > 0
                            ? prdSprints.map(s => <span key={s.id} className="list-sprint-chip">{s.name}</span>)
                            : <span className="prd-table-none">—</span>
                          }
                        </td>
                        <td><StatusBadge status={prd.status} /></td>
                        <td className="prd-table-date">{timeAgo(prd.updatedAt)}</td>
                        <td className="prd-table-actions">
                          <button className="prd-action-btn" onClick={() => onNavigate({ page: 'builder', prdId: prd.id })}>Open →</button>
                          <button className="prd-action-btn" onClick={() => { setEditingPrd(prd); setEditorOpen(true) }}>Edit</button>
                          <button className="prd-action-btn prd-action-btn--danger" onClick={() => onDeletePrd(prd.id)}>Delete</button>
                        </td>
                      </tr>
                    )
                  })}
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
                  prds={visiblePrds.filter(p => p.status === status)}
                  sprints={sprints}
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
                  {activePrd.prdId && <span className="kanban-prd-id">{activePrd.prdId}</span>}
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
          sprints={sprints}
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
