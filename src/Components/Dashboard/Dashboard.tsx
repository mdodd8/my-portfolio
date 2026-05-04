import './Dashboard.css'

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
                    <div className="hero-btn-group">
                        {/*<button className="btn global-btn" onClick={() => scrollTo('work')}>Work</button>*/}
                        <button className="btn global-btn" onClick={() => scrollTo('skills')}>Skills</button>
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