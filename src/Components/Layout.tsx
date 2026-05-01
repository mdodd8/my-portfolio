import {NavLink} from "react-router";
import Work from "./Work.tsx";
import Skills from "./Skills.tsx";
import Contact from "./Contact.tsx";
import Dashboard from "./Dashboard/Dashboard.tsx";

function Layout() {
    return (
        <div>
            <header className="d-flex flex-row justify-content-between p-3 navbar"
                    style={{borderBottom: '1px solid var(--accent)', alignItems: 'center'}}>
                {/*<a href="/" className="nav-logo">Melissa<span>.dev</span></a>*/}
                <a className="navbar-brand" href="/">
                    MD
                </a>
                <nav className="nav-links" style={{gap: '40px'}}>
                    {/*<a href="#" className="nav-logo">alex<span>.dev</span></a>*/}
                    <NavLink to="/work">Work</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                <button className="btn btn-primary">Hire Me</button>
            </header>
            <Dashboard/>
            <div className="marquee-wrap">
                <div className="marquee-track">
                    <div
                        className="marquee-item">React <span>✦</span> TypeScript <span>✦</span> Next.js <span>✦</span> Framer
                        Motion <span>✦</span> Tailwind
                        CSS <span>✦</span> GraphQL <span>✦</span> Node.js <span>✦</span> Figma <span>✦</span> Storybook <span>✦</span> Vitest <span>✦</span> Vercel <span>✦</span> Accessibility <span>✦</span> Performance <span>✦</span>
                    </div>
                    <div
                        className="marquee-item">React <span>✦</span> TypeScript <span>✦</span> Next.js <span>✦</span> Framer
                        Motion <span>✦</span> Tailwind
                        CSS <span>✦</span> GraphQL <span>✦</span> Node.js <span>✦</span> Figma <span>✦</span> Storybook <span>✦</span> Vitest <span>✦</span> Vercel <span>✦</span> Accessibility <span>✦</span> Performance <span>✦</span>
                    </div>
                </div>
            </div>
            <section id="about">
                <div className="section-eyebrow reveal">About Me</div>
                <h2 className="section-title reveal">Pixel-perfect obsessed,<br/>performance-first mindset.</h2>

                <div className="about-grid reveal">
                    <div className="about-text">
                        <p>I'm <strong>Alex Rivera</strong>, a frontend developer with 5+ years turning design systems
                            and product ideas into living, breathing interfaces. I care deeply about the intersection of
                            engineering quality and visual craft.</p>
                        <p>My work has shipped at Series B startups, design studios, and enterprise SaaS platforms. I
                            believe the best frontends are invisible — <strong>they just feel right</strong>.</p>
                        <p>When I'm not pushing pixels, I'm contributing to open source, writing about CSS architecture,
                            or experimenting with generative art.</p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-box reveal">
                            <span className="stat-num">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-box reveal">
                            <span className="stat-num">40+</span>
                            <span className="stat-label">Projects Shipped</span>
                        </div>
                        <div className="stat-box reveal">
                            <span className="stat-num">12</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-box reveal">
                            <span className="stat-num">3</span>
                            <span className="stat-label">Design Awards</span>
                        </div>
                    </div>
                </div>
            </section>
            <Work/>
            <Skills/>
            <section className="experience-section">
                <div className="section-eyebrow reveal">Experience</div>
                <h2 className="section-title reveal">Where I've<br/>made my mark.</h2>

                <div className="exp-list">
                    <div className="exp-item reveal">
                        <p className="exp-period">2022 — Present</p>
                        <div>
                            <p className="exp-company">Stripe</p>
                            <p className="exp-role">Senior Frontend Engineer</p>
                            <p className="exp-desc">Led the redesign of the Stripe Dashboard's core payment flows,
                                improving conversion by 18%. Architected a shared component library used across 6
                                product teams.</p>
                        </div>
                        <span className="exp-badge">Full-time</span>
                    </div>
                    <div className="exp-item reveal">
                        <p className="exp-period">2020 — 2022</p>
                        <div>
                            <p className="exp-company">Linear</p>
                            <p className="exp-role">Frontend Engineer</p>
                            <p className="exp-desc">Built the keyboard-first navigation system and offline sync
                                architecture. Helped Linear achieve sub-100ms interactions across the app.</p>
                        </div>
                        <span className="exp-badge">Full-time</span>
                    </div>
                    <div className="exp-item reveal">
                        <p className="exp-period">2018 — 2020</p>
                        <div>
                            <p className="exp-company">Freelance</p>
                            <p className="exp-role">Frontend Developer</p>
                            <p className="exp-desc">Partnered with design studios and startups across fintech,
                                healthcare, and e-commerce to ship production-quality interfaces and design systems.</p>
                        </div>
                        <span className="exp-badge">Contract</span>
                    </div>
                </div>
            </section>
            <Contact/>
            <footer>
                <p className="footer-copy">© 2025 Alex Rivera. All rights reserved.</p>
                <a href="#" className="footer-logo">alex<span>.dev</span></a>
            </footer>
        </div>
    );
}

export default Layout;