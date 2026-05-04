import './Experience.css'

function Experience() {
    return (
        <section className="experience-section">
            <div className="section-header">Experience</div>
            <h2 className="section-title">Where I've<br/>made my mark.</h2>

            <div className="exp-list">
                <div className="exp-item">
                    <p className="exp-period">2020 — Present</p>
                    <div>
                        <p className="exp-company">Clear Wave Software</p>
                        <p className="exp-role">Systems Engineer / Front End Developer</p>
                        <p className="exp-desc">
                            • Serve as lead front-end developer, overseeing the design and implementation of responsive, production-ready applications
                            across multiple platforms including React, Vue, and Mendix.<br/>
                            • Translate storyboards and wireframes into dynamic, functional user interfaces aligned with business and user requirements. <br/>
                            • Collaborate with cross-functional teams—designers, backend developers, and project managers—to deliver high-quality, scalable
                            software solutions. <br/>
                            • Provide mentorship on UI/UX best practices, design consistency, and component reusability across projects. <br/>
                            • Gained hands-on backend development experience to support full-stack project delivery. <br/>
                            • Delivered applications serving both consumer-facing and enterprise infrastructure clients across varied industries.</p>
                    </div>
                    <span className="exp-badge">Full-time</span>
                </div>
                <div className="exp-item">
                    <p className="exp-period">2017-2020</p>
                    <div>
                        <p className="exp-company">Clear Wave Software</p>
                        <p className="exp-role">Application UI Developer</p>
                        <p className="exp-desc">
                            • Collaborated within a cross-functional team to design, build, and deploy production-ready applications from concept to launch. <br/>
                            • Developed user interfaces optimized for usability, performance, and accessibility across web and mobile platforms.<br/>
                            • Partnered with backend engineers to ensure seamless data integration, intuitive workflows, and responsive layouts.<br/>
                            • Participated in end-to-end development including planning, wireframing, front-end coding, testing, and production deployment.<br/>
                            • Built scalable, maintainable UI components using modern frameworks and design principles</p>
                    </div>
                    <span className="exp-badge">Full-time</span>
                </div>
                <div className="exp-item">
                    <p className="exp-period">2015-2017</p>
                    <div>
                        <p className="exp-company">Clear Wave Software</p>
                        <p className="exp-role">Graphics & Media Designer</p>
                        <p className="exp-desc">
                            • Collaborated with creative and production teams to conceptualize and develop storyboards for video and digital content.<br/>
                            • Ensured consistent brand messaging and visual storytelling across all media deliverables.<br/>
                            • Laid the foundation for a transition into front-end development through hands-on design systems work
                        </p>
                    </div>
                    <span className="exp-badge">Contract</span>
                </div>
            </div>
        </section>
    );
}

export default Experience;