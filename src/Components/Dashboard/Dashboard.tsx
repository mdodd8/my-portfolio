import './Dashboard.css'
import {LucideDownload} from "lucide-react";
import PDF from "../../assets/Melissa-Dodd-Resume.pdf"


function Dashboard() {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.replaceState(null, '', `#${id}`);
        }
    };


    return (
        <section className="hero" id="hero">
            <div className="hero-bg-grid"></div>
            <p className="hero-label"> · Based in Modesto, CA ·</p>
            <h1 className="hero-headline">
                Frontend<br/>
                <span className="line2">Developer &</span><br/>
                <span className="accent-word">UI/UX Developer.</span>
            </h1>
            <div className="hero-bottom">
                <p className="hero-desc">
                    I build <strong>fast, beautiful interfaces</strong> that feel as good as they look.
                    React, TypeScript, motion design — from idea to pixel-perfect reality.
                </p>
                <div className="hero-actions">
                    <div className="hero-btn-group align-items-end">
                        <a href={PDF} download="Melissa-Dodd-Resume.pdf" className="btn ghost-btn d-flex gap-3"
                           style={{color: 'white', height: 'fit-content'}}>
                            <LucideDownload style={{height: '20px', width: '20px'}} className="icon"/>
                            Resume</a>
                        <button className="btn global-btn" onClick={() => scrollToSection('skills')}>Skills</button>
                    </div>
                    <div className="hero-scroll-hint">
                        <span className="arrow">↓</span>
                        <span>scroll to explore</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;