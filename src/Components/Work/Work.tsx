import './Work.css'
import {useState} from "react";
import PortfolioDrawer from "./PortfolioDrawer.tsx";
import Tag from "../Tags/Tag.tsx";
import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import {previousWorkList} from "../../Data/PreviousWorkList.ts";


function Work() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const selectedProject = selectedIndex !== null ? previousWorkList[selectedIndex] : null;

    const handleOpen = (index: number) => {
        setSelectedIndex(index);
    };

    const handleClose = () => {
        setSelectedIndex(null);
    };

    const handlePrev = () => {
        setSelectedIndex(prev =>
            prev !== null && prev > 0 ? prev - 1 : prev
        );
    };

    const handleNext = () => {
        setSelectedIndex(prev =>
            prev !== null && prev < previousWorkList.length - 1 ? prev + 1 : prev
        );
    };

    return (
        <>
            <section id="work">
                <SectionHeader header="Selected Work" title="Professional work from previous roles"/>
                <div className="project-featured">
                    {previousWorkList.map((project, index) => (
                        <div className="project-card "
                             onClick={() => handleOpen(index)}
                        key={project.id}>
                            <div className="project-visual" style={{background: '#0f0d1a'}}>
                                <img style={{width: '-webkit-fill-available'}} src={project.image} alt="img-text"/>

                                <div className="project-visual-overlay"
                                     style={{background: 'linear-gradient(to bottom, transparent 50%, #15121f 100%)'}}></div>
                            </div>
                            <div className="project-body">
                                <p className="project-num">02 — {project.role}</p>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-footer">
                                    <Tag tags={project.tags}/>
                                    <div className="project-arrow">→</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {selectedProject && (
                        <PortfolioDrawer
                            project= {selectedIndex !== null ? previousWorkList[selectedIndex] : null}
                            isOpen={selectedIndex !== null}
                            onPrev={handlePrev}
                            onNext={handleNext}
                            currentIndex={selectedIndex !== null ? selectedIndex : 0}
                            total={previousWorkList.length}
                            onClose={handleClose}
                        />
                    )}
                </div>
            </section>
        </>
    );
}


export default Work;