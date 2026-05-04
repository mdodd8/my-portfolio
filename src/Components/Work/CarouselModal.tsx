import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import type {PortfolioCardInterface} from "../../Interfaces/PortfolioCardInterface.ts";
import './CarouselModal.css'


interface ProjectPropsInterface {
    project: PortfolioCardInterface | null;
    isOpen: boolean;
    onClose: () => void;
    onClick?: () => void;
}

function CarouselModal({isOpen, onClose, project}: ProjectPropsInterface) {

    const [currentSlide, setCurrentSlide] = useState(0);

    console.log(isOpen, 'is the modal open?');
    console.log(project, 'is the project?');
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen || !project) return null;

    const slides = project.gallery.map((slide) => slide.image);

    return createPortal(
        // <div className="container">
        //     <div className="project-card large"
        //          style={{minWidth: '85vw', minHeight: '85vh', width: 'clamp(40vw, 48vw, 55vw)'}}>
        //         <button className="modal-close"
        //                 onClick={onClose}>X
        //         </button>
        //         <div className="project-visual" style={{height: 'clamp(450px, 32rem, 515px)', background: '#0d1a12'}}>
        //             <div id="carouselExampleCaptions" className="carousel slide">
        //                 <div className="carousel-inner">
        //                     <div className="carousel-item active">
        //                         <img src={slides[currentSlide]} className="carousel-img" alt="..."/>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="project-visual-overlay"></div>
        //         </div>
        //         <div className="project-body">
        //             <div className="d-flex flex-row justify-content-between">
        //                 <button className="carousel-btn" type="button"
        //                         data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={(e) => {
        //                     e.stopPropagation();
        //                     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        //                 }}>
        //                     Back
        //                 </button>
        //                 <button className="carousel-btn" type="button"
        //                         data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={(e) => {
        //                     e.stopPropagation();
        //                     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        //                 }}>
        //                     Next
        //                 </button>
        //             </div>
        //             <div className="d-flex flex-row" style={{marginTop: '12px'}}>
        //                 <h3>{project.title} - </h3>
        //                 <p className="d-flex" style={{margin: '0', alignItems: 'center'}}>&nbsp; {project.role}</p>
        //             </div>
        //
        //             <p className="project-desc">{project.description}</p>
        //             <div className="project-footer">
        //                 <div className="project-stack">
        //                     {project.tags.map((tag) => (
        //                         <span className="ptag" key={tag.label}>
        //                                     {tag.label}
        //                         </span>
        //                     ))}
        //                     <span className="ptag">React</span><span className="ptag">D3</span><span
        //                     className="ptag">WebSockets</span><span className="ptag">Postgres</span>
        //                 </div>
        //                 <button className="btn close-btn">Close</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>,
        <div className="modal-overlay" onClick={onClose}>
            <div className="project-card large modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                <div className="project-visual modal-visual" style={{background: '#0d1a12'}}>
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={slides[currentSlide]} className="carousel-img" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="project-visual-overlay"></div>
                </div>
                <div className="project-body">
                    <div className="d-flex flex-row justify-content-between">
                        <button className="carousel-btn" type="button" onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
                        }}>Back</button>
                        <button className="carousel-btn" type="button" onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
                        }}>Next</button>
                    </div>
                    <div className="d-flex flex-row" style={{marginTop: '12px'}}>
                        <h3>{project.title} - </h3>
                        <p className="d-flex" style={{margin: '0', alignItems: 'center'}}>&nbsp; {project.role}</p>
                    </div>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-footer">
                        <div className="project-stack">
                            {project.tags.map((tag) => (
                                <span className="ptag" key={tag.label}>{tag.label}</span>
                            ))}
                        </div>
                        <button className="btn close-btn" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );


}

export default CarouselModal;