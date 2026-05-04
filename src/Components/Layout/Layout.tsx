import Work from "../Work/Work.tsx";
import Skills from "../Skills/Skills.tsx";
import Contact from "../Contact/Contact.tsx";
import Dashboard from "../Dashboard/Dashboard.tsx";
import './Layout.css'
import About from "../About/About.tsx";
import Experience from "../Experience/Experience.tsx";

function Layout() {

    const scrollTo = (id: string) => {
        document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <header className="d-flex flex-row justify-content-between p-3 navbar"
                    style={{borderBottom: '1px solid var(--accent)', alignItems: 'center'}}>
                <a className="navbar-brand" href="#hero">
                    MD
                </a>
                <nav className="nav-links" style={{gap: '40px'}}>
                    <a href="#work">Work</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button className="btn global-btn" onClick={() =>document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'})}>Contact Me</button>
            </header>
            <Dashboard scrollTo={scrollTo}/>
            <div className="carousel-wrap">
                <div className="carousel-track">
                    <div className="marquee-item">React <span>✦</span> TypeScript <span>✦</span> Next.js <span>✦</span> Framer
                        Motion <span>✦</span> Tailwind
                        CSS <span>✦</span> GraphQL <span>✦</span> Node.js <span>✦</span> Figma <span>✦</span> Storybook <span>✦</span> Vitest <span>✦</span> Vercel <span>✦</span> Accessibility <span>✦</span> Performance <span>✦</span>
                    </div>
                    <div className="marquee-item">React <span>✦</span> TypeScript <span>✦</span> Next.js <span>✦</span> Framer
                        Motion <span>✦</span> Tailwind
                        CSS <span>✦</span> GraphQL <span>✦</span> Node.js <span>✦</span> Figma <span>✦</span> Storybook <span>✦</span> Vitest <span>✦</span> Vercel <span>✦</span> Accessibility <span>✦</span> Performance <span>✦</span>
                    </div>
                </div>
            </div>
            <About/>
            <Skills/>
            <Experience/>
            <Work/>


            <Contact/>
            <footer>
                <p className="footer-copy">© 2026 Melissa Dodd. All rights reserved.</p>
                <a className="navbar-brand" href="#hero">
                    MD
                </a>
            </footer>
        </div>
    );
}

export default Layout;