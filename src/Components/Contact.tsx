function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-bg"></div>
            <div className="section-eyebrow reveal">Get In Touch</div>
            <h2 className="section-title reveal" style={{fontSize: 'clamp(32px, 4vw, 52px)'}}>Have a project in mind?<br/>Let's
                make it real.</h2>
            <a href="mailto:alex@alex.dev" className="contact-email reveal">alex@alex.dev</a>

            <div className="contact-links reveal">
                <a href="#" className="contact-link">GitHub ↗</a>
                <a href="#" className="contact-link">LinkedIn ↗</a>
                <a href="#" className="contact-link">Twitter ↗</a>
                <a href="#" className="contact-link">Resume PDF ↗</a>
            </div>
        </section>
    );
}

export default Contact;