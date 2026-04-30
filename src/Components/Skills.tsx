function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="section-eyebrow reveal">Expertise</div>
            <h2 className="section-title reveal">What I bring<br/>to the table.</h2>

            <div className="skills-grid">
                <div className="skill-card reveal" data-num="01">
                    <div className="skill-icon">⚛</div>
                    <div className="skill-name">React Ecosystem</div>
                    <p className="skill-desc">Deep expertise in modern React patterns — hooks, context, server
                        components, Suspense, and state management at scale.</p>
                    <div className="skill-tags">
                        <span className="stag">React 19</span><span className="stag">Next.js</span><span
                        className="stag">Zustand</span><span className="stag">TanStack</span>
                    </div>
                </div>
                <div className="skill-card reveal" data-num="02">
                    <div className="skill-icon">✦</div>
                    <div className="skill-name">Motion & Animation</div>
                    <p className="skill-desc">Crafting fluid interactions with Framer Motion, GSAP, and CSS that add
                        delight without sacrificing performance.</p>
                    <div className="skill-tags">
                        <span className="stag">Framer Motion</span><span className="stag">GSAP</span><span
                        className="stag">CSS Animations</span>
                    </div>
                </div>
                <div className="skill-card reveal" data-num="03">
                    <div className="skill-icon">♿</div>
                    <div className="skill-name">Accessibility</div>
                    <p className="skill-desc">WCAG 2.2 compliance, semantic HTML, keyboard navigation, and screen-reader
                        testing built into my workflow from day one.</p>
                    <div className="skill-tags">
                        <span className="stag">WCAG 2.2</span><span className="stag">ARIA</span><span
                        className="stag">axe-core</span>
                    </div>
                </div>
                <div className="skill-card reveal" data-num="04">
                    <div className="skill-icon">⚡</div>
                    <div className="skill-name">Performance</div>
                    <p className="skill-desc">Core Web Vitals optimization, code splitting, image pipelines, and bundle
                        analysis to keep sites fast and Lighthouse green.</p>
                    <div className="skill-tags">
                        <span className="stag">Lighthouse</span><span className="stag">Webpack</span><span
                        className="stag">Edge CDN</span>
                    </div>
                </div>
                <div className="skill-card reveal" data-num="05">
                    <div className="skill-icon">🎨</div>
                    <div className="skill-name">Design Systems</div>
                    <p className="skill-desc">Building scalable component libraries with Storybook, design tokens, and
                        documentation that teams actually use.</p>
                    <div className="skill-tags">
                        <span className="stag">Storybook</span><span className="stag">Figma</span><span
                        className="stag">Tokens</span>
                    </div>
                </div>
                <div className="skill-card reveal" data-num="06">
                    <div className="skill-icon">🔧</div>
                    <div className="skill-name">TypeScript & Testing</div>
                    <p className="skill-desc">Strict TypeScript, unit and integration tests with Vitest, E2E with
                        Playwright for confidence at every deploy.</p>
                    <div className="skill-tags">
                        <span className="stag">TypeScript</span><span className="stag">Vitest</span><span
                        className="stag">Playwright</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;