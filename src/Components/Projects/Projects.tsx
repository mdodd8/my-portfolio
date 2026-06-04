import './Projects.css'
import image from '../../assets/saas-2.png'
import {LucideExternalLink, LucideCode} from "lucide-react";
import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import Tag from "../Tags/Tag.tsx";
import type {TagInterface} from "../../Interfaces/TagInterface.ts";



const DefaultTags: TagInterface[] = [
    {
        label: "React - Typescript",
        color: "#ffffff",
        background: "#253e5f"
    },
    {
        label: "Vite",
        color: "#ffffff",
        background: "#253e5f"
    },
    {
        label: "Bootstrap",
        color: "#ffffff",
        background: "#253e5f"
    },
    {
        label: "Font Awesome",
        color: "#ffffff",
        background: "#253e5f"
    },
    {
        label: "Flexbox",
        color: "#ffffff",
        background: "#253e5f"
    },
    {
        label: "Recharts",
        color: "#ffffff",
        background: "#253e5f"
    },

    ]


function Projects() {


    return (
        <section id="projects">
            <div>
                <SectionHeader header="Projects & Source Code" title="Projects built to learn and create"/>
                <p>This section showcases personal projects built to demonstrate a variety of development skills,
                    concepts, and technologies. Each project uses sample data and is continuously updated as I explore
                    new ideas and improve existing implementations. GitHub links are included so you can review the
                    source code and development approach behind each project.</p>
            </div>
            <div className="project-featured">
                <div className="project-card ">
                    <div className="project-visual" style={{background: '#0f0d1a'}}>
                        <img style={{width: '-webkit-fill-available'}} src={image} alt="img-text"/>

                        <div className=""
                             style={{background: 'linear-gradient(to bottom, transparent 50%, #15121f 100%)'}}></div>
                    </div>
                    <div style={{padding: '10px 20px', background: '#30302e'}}>
                        <Tag tags={DefaultTags}/>
                        <h3 className="proj-title">SaaS Sales Dashboard</h3>
                        <p className="proj-description">An interactive employee performance dashboard — select any rep
                            from the sidebar and every metric, chart, KPI, and activity feed updates in real time.</p>
                        <div className="subtext-container">
                            <div className="subtext-badge">
                                Reusable base Card component system; all widgets compose from one shell
                            </div>
                            <div className="subtext-badge">
                                Unidirectional data flow
                            </div>
                            <div className="subtext-badge">
                                Shared utility layer
                            </div>
                            <div className="subtext-badge">
                                TypeScript interfaces for every prop, data shape, and component contract
                            </div>
                        </div>
                        <div className="d-flex flex-row gap-4 justify-content-end" style={{paddingTop: '15px'}}>
                            <button className="btn destination-btn"
                                    onClick={() => window.open('https://mdsaasdashboard.netlify.app/', '_blank')}>
                                <LucideExternalLink style={{height: '12px', width: '12px'}} className="icon"/>
                                Live Demo
                            </button>
                            <button className="btn destination-btn"
                                    onClick={() => window.open('https://github.com/mdodd8/saas-dashboard', '_blank')}>
                                <LucideCode style={{height: '12px', width: '12px'}} className="icon"/>View Code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Projects;