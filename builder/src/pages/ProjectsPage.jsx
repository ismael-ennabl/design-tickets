import { PROJECTS, getPrdsForProject } from '../lib/prds'
import './ProjectsPage.css'

export default function ProjectsPage({ prds, onNavigate }) {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <div className="projects-logo">
          <span className="projects-logo-name">ennabl</span>
          <span className="projects-logo-suffix">builder</span>
        </div>
      </header>

      <main className="projects-main">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-grid">
          {PROJECTS.map(project => {
            const projectPrds = prds.filter(p => p.projectId === project.id)
            const doing = projectPrds.filter(p => p.status === 'doing').length
            return (
              <button
                key={project.id}
                className="project-card"
                onClick={() => onNavigate({ page: 'project', projectId: project.id })}
              >
                <div className="project-card-icon">{project.icon}</div>
                <div className="project-card-name">{project.name}</div>
                <div className="project-card-meta">
                  {projectPrds.length > 0 ? (
                    <>
                      <span className="project-card-count">{projectPrds.length} PRD{projectPrds.length !== 1 ? 's' : ''}</span>
                      {doing > 0 && <span className="project-card-doing">{doing} doing</span>}
                    </>
                  ) : (
                    <span className="project-card-empty">No PRDs yet</span>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </main>
    </div>
  )
}
