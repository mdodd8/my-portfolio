import './About.css'
import SectionHeader from "../SectionHeader/SectionHeader";


function About() {
    return (
        <section id="about">
            <SectionHeader header="About Me" title="Performance-first mindset"/>
            <div className="about-grid">
                <div>
                    <div className="about-text">
                        <p>I'm <strong>Melissa Dodd</strong>, a Front-end developer with over 10 years of experience
                            building responsive, user-focused interfaces. I take pride in executing designs with
                            precision, ensuring every detail aligns pixel-perfect with mockups. Known for staying
                            focused and seeing projects through to completion, I deliver polished, high-quality results
                            that match both vision and functionality.</p>
                    </div>
                </div>
                <div className="about-stats">
                    <div className="stat-box">
                        <span className="stat-num">11+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-num">15+</span>
                        <span className="stat-label">Projects Shipped</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-num">15+</span>
                        <span className="stat-label">Certifications</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-num">10+</span>
                        <span className="stat-label">Technologies</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;