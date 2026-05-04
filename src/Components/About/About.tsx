import './About.css'


function About() {
    return (
        <section id="about">
            <div className="section-header">About Me</div>
            <div className="about-grid">
                <div>
                    <h2 className="section-title">Pixel-perfect obsessed,<br/>performance-first mindset.</h2>
                    <div className="about-text">
                        <p>I'm <strong>Melissa Dodd</strong>, a Front-end developer with over 10 years of experience building responsive, user-focused interfaces. I take pride in executing designs with precision, ensuring every detail aligns pixel-perfect with mockups. Known for staying focused and seeing projects through to completion, I deliver polished, high-quality results that match both vision and functionality.</p>
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