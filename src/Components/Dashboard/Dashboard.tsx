import './Dashboard.css'


function Dashboard() {
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
                        <button className="btn btn-primary">Work</button>
                        <button className="btn btn-ghost">Talk</button>
                        {/*<button className="btn-primary"*/}
                        {/*        onClick="document.querySelector('#work').scrollIntoView({behavior:'smooth'})">View*/}
                        {/*    My Work*/}
                        {/*</button>*/}
                        {/*<button className="btn-ghost"*/}
                        {/*        onClick="document.querySelector('#contact').scrollIntoView({behavior:'smooth'})">Let's*/}
                        {/*    Talk*/}
                        {/*</button>*/}
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