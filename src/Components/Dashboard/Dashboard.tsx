import './Dashboard.css'
// import {LucideDownload} from "lucide-react";
// import PDF from "../../assets/Melissa_Dodd_Resume (1).pdf"

interface Props {
    scrollTo: (id: string) => void;
}


function Dashboard({scrollTo}: Props) {
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
                        {/*<a  href={PDF} download="Melissa_Dodd_Resume (1).pdf" className="btn ghost-btn d-flex gap-3" style={{color: 'white', height: 'fit-content'}}>*/}
                        {/*    <LucideDownload style={{height: '20px', width: '20px'}} className="icon"/>*/}
                        {/*    Download Resume</a>*/}
                        <div className="d-flex flex-column gap-3">
                            <button className="btn global-btn" onClick={() => scrollTo('skills')}>Skills</button>
                            {/*<button className="btn ghost-btn d-flex gap-3" style={{color: 'white'}}*/}
                            {/*        onClick={() => window.open('https://github.com/mdodd8', '_blank')}>*/}
                            {/*    <svg*/}
                            {/*        xmlns="http://www.w3.org/2000/svg"*/}
                            {/*        width="24"*/}
                            {/*        height="24"*/}
                            {/*        viewBox="0 0 24 24"*/}
                            {/*        fill="currentColor"*/}
                            {/*    >*/}
                            {/*        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />*/}
                            {/*    </svg>*/}
                            {/*    View Github</button>*/}
                        </div>

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