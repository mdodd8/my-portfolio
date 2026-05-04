import './About.css'


function About() {
    return (
        <section id="about">
            <div className="section-header">About Me</div>
            <div className="about-grid">
                <div>
                    <h2 className="section-title">Pixel-perfect obsessed,<br/>performance-first mindset.</h2>
                    <div className="about-text">
                        <p>I'm <strong>Alex Rivera</strong>, a frontend developer with 5+ years turning design systems
                            and product ideas into living, breathing interfaces. I care deeply about the intersection of
                            engineering quality and visual craft.</p>
                        <p>My work has shipped at Series B startups, design studios, and enterprise SaaS platforms. I
                            believe the best frontends are invisible — <strong>they just feel right</strong>.</p>
                        <p>When I'm not pushing pixels, I'm contributing to open source, writing about CSS architecture,
                            or experimenting with generative art.</p>
                    </div>
                </div>
                <div className="about-stats">
                    <div className="stat-box">
                        <span className="stat-num">10+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-num">40+</span>
                        <span className="stat-label">Projects Shipped</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-num">12</span>
                        <span className="stat-label">Happy Clients</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-num">3</span>
                        <span className="stat-label">Design Awards</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;