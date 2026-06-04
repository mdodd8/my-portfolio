import './PortfolioDrawer.css'
import {useEffect} from 'react';
// import type { Project } from './projectsData';
import './PortfolioDrawer.css';
import type {PortfolioCardInterface} from "../../Interfaces/PortfolioCardInterface.ts";
import Tag from "../Tags/Tag.tsx";


interface ProjectDrawerProps {
    project: PortfolioCardInterface | null;
    isOpen: boolean;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    currentIndex: number;
    total: number;
}

function PortfolioDrawer({
                             project,
                             isOpen,
                             onClose,
                             onPrev,
                             onNext,
                             currentIndex,
                             total,
                         }: ProjectDrawerProps) {


    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        if (isOpen) window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose, onPrev, onNext]);


    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        if (isOpen) {
            if (isMobile) {
                const scrollY = window.scrollY;
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                document.body.style.overflow = 'hidden';
                document.body.style.top = `-${scrollY}px`;
            } else {
                document.body.style.overflow = 'hidden';
            }
        } else {
            if (isMobile) {
                const top = document.body.style.top;
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.style.top = '';
                window.scrollTo(0, parseInt(top || '0') * -1);
            } else {
                document.body.style.overflow = '';
            }
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <>
            <div
                className={`drawer-overlay ${isOpen ? 'drawer-overlay-open' : ''}`}
                onClick={onClose}
                aria-hidden="true"
            />

            <aside
                className={`project-drawer ${isOpen ? 'project-drawer-open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label={`Project detail: ${project.title}`}
            >
                <div className="project-drawer-head">
                    <div>
                        <div className="project-drawer-role">{project.role}</div>
                        <h2 className="project-drawer-title">{project.title}</h2>
                    </div>
                    <button
                        className="project-drawer-close"
                        onClick={onClose}
                        aria-label="Close project detail"
                    >
                        ✕
                    </button>
                </div>

                <div className="project-drawer-body">

                    {project.image ? (
                        <img
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="project-drawer-image"
                        />
                    ) : (
                        <div className="project-drawer-image-placeholder">
                            <span className="project-drawer-image-label">Project screenshot</span>
                        </div>
                    )}
                    <div className="project-drawer-section">
                        <div className="project-drawer-label section-header">About this project</div>
                        <p className="project-drawer-text">{project.description}</p>
                    </div>
                    <div className="project-drawer-section">
                        <div className="project-drawer-label section-header">My contribution</div>
                        <p className="project-drawer-text">{project.roleDescription}</p>
                    </div>
                    <div className="project-drawer-section">
                        <div className="project-drawer-label section-header">Highlights</div>
                        <ul className="project-drawer-highlights">
                            {project.highlights.map((h, i) => (
                                <li key={i} className="project-drawer-highlight">
                                    <span className="project-drawer-check">✓</span>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="project-drawer-section">
                        <div className="project-drawer-label section-header">Tech stack</div>
                        <Tag tags={project.tags}/>
                    </div>
                    <div className="project-drawer-nav">
                        <button
                            className="btn ghost-btn"
                            onClick={onPrev}
                            disabled={currentIndex === 0}
                            aria-label="Previous project"
                        >
                            ← Previous
                        </button>
                        <span className="project-drawer-nav-count">
              {currentIndex + 1} of {total}
            </span>
                        <button
                            className="btn ghost-btn"
                            onClick={onNext}
                            disabled={currentIndex === total - 1}
                            aria-label="Next project"
                        >
                            Next →
                        </button>
                    </div>

                </div>
            </aside>
        </>
    );
}

export default PortfolioDrawer;