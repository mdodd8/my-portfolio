import './Projects.css'
import image from '../../assets/saas-2.png'
import { LucideFileText, LucideExternalLink, LucideCode } from "lucide-react";

function Projects() {
    return (
        <section id="projects">
            <div>
                <div className="section-header">Projects and Source Code</div>
                <p>Projects live on netlify. View sourcecode on Github. <br/><a href="https://github.com/mdodd8">Github</a></p>
            </div>
            <div className="project-featured">
                <div className="project-card ">
                    <div className="project-visual" style={{background: '#0f0d1a'}}>
                        <img style={{width: '-webkit-fill-available'}} src={image} alt="img-text"/>

                        <div className=""
                             style={{background: 'linear-gradient(to bottom, transparent 50%, #15121f 100%)'}}></div>
                    </div>
                    <div style={{padding: '10px 20px', background: '#30302e'}}>
                        <div className="d-flex flex-row gap-2">
                            <p className="type-badge">React - Typescript</p>
                            <p className="type-badge">Vite</p>
                            <p className="type-badge">Bootstrap</p>
                            <p className="type-badge">Font Awesome</p>
                            <p className="type-badge">Flexbox</p>
                            <p className="type-badge">Recharts</p>
                        </div>
                        <h3 className="proj-title">SaaS Sales Dashboard</h3>
                        <p className="proj-description">An interactive employee performance dashboard — select any rep from the sidebar and every metric, chart, KPI, and activity feed updates in real time.</p>
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
                        {/*<div className="d-flex flex-row gap-2 mt-3">*/}
                        {/*    <p className="type-badge">React</p>*/}
                        {/*    <p className="type-badge">Typescript</p>*/}
                        {/*    <p className="type-badge">Recharts</p>*/}
                        {/*    <p className="type-badge">Bootstrap</p>*/}
                        {/*    <p className="type-badge">Font Awesome</p>*/}
                        {/*    <p className="type-badge">Flexbox</p>*/}
                        {/*    <p className="type-badge">CSS</p>*/}
                        {/*    <p className="type-badge">Vite</p>*/}
                        {/*</div>*/}
                        <div className="d-flex flex-row gap-4 justify-content-end" style={{paddingTop: '15px'}}>
                            <button className="btn destination-btn" onClick={() => window.location.href = "https://mdsaasdashboard.netlify.com"}>

                                <LucideExternalLink style={{height: '12px', width: '12px'}} className="icon"/>

                                Live Demo</button>
                            <button className="btn destination-btn" onClick={() => window.location.href = "https://mdsaasdashboard.netlify.com"}> <LucideCode style={{height: '12px', width: '12px'}} className="icon"/>View Code</button>
                            <button className="btn destination-btn" onClick={() => window.location.href = "https://mdsaasdashboard.netlify.com"}><LucideFileText style={{height: '12px', width: '12px'}} className="icon"/>README</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Projects;