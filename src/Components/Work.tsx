function Work() {
    return (
        <section id="work">
            <div className="projects-header">
                <div>
                    <div className="section-eyebrow reveal">Selected Work</div>
                    <h2 className="section-title reveal">Projects that<br/>made an impact.</h2>
                </div>
                <a href="#" className="projects-link reveal">All projects →</a>
            </div>

            <div className="project-featured reveal">
                <div className="project-card large">
                    <div className="project-visual" style={{background: '#0d1a12'}}>
                        <svg width="320" height="200" viewBox="0 0 320 200" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="20" y="20" width="280" height="160" rx="8" fill="#111f16" stroke="#1a3322"
                                  stroke-width="1"/>
                            <rect x="32" y="32" width="90" height="10" rx="2" fill="#1D9E75" opacity="0.7"/>
                            <rect x="32" y="50" width="256" height="1" fill="#1a3322"/>
                            <rect x="32" y="64" width="40" height="80" rx="3" fill="#1D9E75" opacity="0.8"/>
                            <rect x="82" y="84" width="40" height="60" rx="3" fill="#5DCAA5" opacity="0.6"/>
                            <rect x="132" y="74" width="40" height="70" rx="3" fill="#1D9E75" opacity="0.9"/>
                            <rect x="182" y="54" width="40" height="90" rx="3" fill="#5DCAA5" opacity="0.7"/>
                            <rect x="232" y="68" width="40" height="76" rx="3" fill="#1D9E75" opacity="0.5"/>
                            <path d="M32 120 L72 100 L122 108 L172 88 L222 96 L272 78" stroke="#b8f26e"
                                  stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/>
                            <circle cx="272" cy="78" r="3" fill="#b8f26e" opacity="0.8"/>
                        </svg>
                        <div className="project-visual-overlay"></div>
                    </div>
                    <div className="project-body">
                        <p className="project-num">01 — Featured</p>
                        <h3 className="project-title">Dashify Analytics</h3>
                        <p className="project-desc">Real-time analytics dashboard with drag-and-drop widgets, live data
                            streams, and team collaboration. Used by 10k+ users.</p>
                        <div className="project-footer">
                            <div className="project-stack">
                                <span className="ptag">React</span><span className="ptag">D3</span><span
                                className="ptag">WebSockets</span><span className="ptag">Postgres</span>
                            </div>
                            <div className="project-arrow">→</div>
                        </div>
                    </div>
                </div>

                <div className="project-card large">
                    <div className="project-visual" style={{background: '#0f0d1a'}}>
                        <svg width="320" height="200" viewBox="0 0 320 200" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="20" y="20" width="280" height="160" rx="8" fill="#15121f" stroke="#221a33"
                                  stroke-width="1"/>
                            <rect x="40" y="40" width="180" height="14" rx="3" fill="#7F77DD" opacity="0.5"/>
                            <rect x="40" y="62" width="120" height="10" rx="2" fill="#AFA9EC" opacity="0.3"/>
                            <rect x="40" y="80" width="240" height="1" fill="#221a33"/>
                            <rect x="40" y="92" width="56" height="28" rx="4" fill="#534AB7" opacity="0.7"/>
                            <rect x="104" y="92" width="56" height="28" rx="4" fill="#221a33" stroke="#534AB7"
                                  stroke-width="1" stroke-opacity="0.4"/>
                            <rect x="168" y="92" width="56" height="28" rx="4" fill="#221a33" stroke="#534AB7"
                                  stroke-width="1" stroke-opacity="0.4"/>
                            <rect x="40" y="130" width="100" height="8" rx="2" fill="#AFA9EC" opacity="0.2"/>
                            <rect x="40" y="146" width="80" height="8" rx="2" fill="#AFA9EC" opacity="0.15"/>
                            <circle cx="260" cy="106" r="16" fill="#534AB7" opacity="0.3" stroke="#7F77DD"
                                    stroke-width="1"/>
                            <path d="M254 106 L258 110 L266 102" stroke="#AFA9EC" stroke-width="1.5"
                                  stroke-linecap="round"/>
                        </svg>
                        <div className="project-visual-overlay"
                             style={{background: 'linear-gradient(to bottom, transparent 50%, #15121f 100%)'}}></div>
                    </div>
                    <div className="project-body">
                        <p className="project-num">02 — UI Engineering</p>
                        <h3 className="project-title">Formly — Form Builder</h3>
                        <p className="project-desc">Accessible multi-step form builder with conditional logic,
                            validation schemas, and embeddable widget output.</p>
                        <div className="project-footer">
                            <div className="project-stack">
                                <span className="ptag">Next.js</span><span className="ptag">Zod</span><span
                                className="ptag">WCAG</span><span className="ptag">tRPC</span>
                            </div>
                            <div className="project-arrow">→</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-row reveal">
                <div className="project-card">
                    <div className="project-visual" style={{background: '#1a100a'}}>
                        <svg width="220" height="140" viewBox="0 0 220 140" fill="none">
                            <rect x="16" y="14" width="188" height="112" rx="6" fill="#201410" stroke="#3a1e0e"
                                  stroke-width="1"/>
                            <circle cx="110" cy="60" r="28" fill="#D85A30" opacity="0.2" stroke="#D85A30"
                                    stroke-width="1"/>
                            <circle cx="110" cy="60" r="16" fill="#D85A30" opacity="0.4"/>
                            <path d="M103 60 L116 53 L116 67 Z" fill="#FAECE7"/>
                            <rect x="30" y="98" width="60" height="6" rx="2" fill="#F0997B" opacity="0.4"/>
                            <rect x="30" y="108" width="40" height="6" rx="2" fill="#F0997B" opacity="0.2"/>
                        </svg>
                        <div className="project-visual-overlay"
                             style={{background: 'linear-gradient(to bottom, transparent 50%, #201410 100%)'}}></div>
                    </div>
                    <div className="project-body">
                        <p className="project-num">03</p>
                        <h3 className="project-title" style={{fontSize:'18px'}}>Notely</h3>
                        <p className="project-desc" style={{fontSize: '13px'}}>PWA note app with offline sync and
                            markdown.</p>
                        <div className="project-footer">
                            <div className="project-stack"><span className="ptag">PWA</span><span
                                className="ptag">IndexedDB</span></div>
                            <div className="project-arrow" style={{width: '28px', height: '28px', fontSize: '12px'}}>→</div>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-visual" style={{background: '#0a1318'}}>
                        <svg width="220" height="140" viewBox="0 0 220 140" fill="none">
                            <rect x="16" y="14" width="188" height="112" rx="6" fill="#0c1820" stroke="#0f2d3a"
                                  stroke-width="1"/>
                            <rect x="28" y="30" width="76" height="76" rx="4" fill="#0f2d3a"/>
                            <rect x="32" y="34" width="68" height="44" rx="2" fill="#378ADD" opacity="0.15"/>
                            <rect x="36" y="42" width="40" height="4" rx="1" fill="#85B7EB" opacity="0.5"/>
                            <rect x="36" y="50" width="56" height="4" rx="1" fill="#85B7EB" opacity="0.3"/>
                            <rect x="36" y="58" width="48" height="4" rx="1" fill="#85B7EB" opacity="0.2"/>
                            <rect x="36" y="84" width="60" height="14" rx="2" fill="#378ADD" opacity="0.4"/>
                            <rect x="116" y="30" width="76" height="34" rx="4" fill="#0f2d3a"/>
                            <rect x="120" y="34" width="68" height="26" rx="2" fill="#378ADD" opacity="0.1"
                                  stroke="#378ADD" stroke-width="0.5" stroke-opacity="0.3"/>
                            <rect x="116" y="70" width="76" height="34" rx="4" fill="#0f2d3a"/>
                        </svg>
                        <div className="project-visual-overlay"
                             style={{background: 'linear-gradient(to bottom, transparent 50%, #0c1820 100%)'}}></div>
                    </div>
                    <div className="project-body">
                        <p className="project-num">04</p>
                        <h3 className="project-title" style={{fontSize: '18px'}}>LayoutLab</h3>
                        <p className="project-desc" style={{fontSize: '13px'}}>Visual CSS grid and flex builder with live
                            export.</p>
                        <div className="project-footer">
                            <div className="project-stack"><span className="ptag">CSS</span><span
                                className="ptag">Canvas</span></div>
                            <div className="project-arrow" style={{width: '28px', height: '28px', fontSize: '12px'}}>→</div>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-visual" style={{background: '#0f1a0f'}}>
                        <svg width="220" height="140" viewBox="0 0 220 140" fill="none">
                            <rect x="16" y="14" width="188" height="112" rx="6" fill="#111f11" stroke="#1a3322"
                                  stroke-width="1"/>
                            <circle cx="110" cy="62" r="36" fill="none" stroke="#1D9E75" stroke-width="1"
                                    opacity="0.3"/>
                            <circle cx="110" cy="62" r="24" fill="none" stroke="#1D9E75" stroke-width="1"
                                    opacity="0.5"/>
                            <circle cx="110" cy="62" r="12" fill="#1D9E75" opacity="0.3"/>
                            <circle cx="110" cy="38" r="4" fill="#b8f26e" opacity="0.9"/>
                            <circle cx="134" cy="62" r="4" fill="#5DCAA5" opacity="0.7"/>
                            <circle cx="86" cy="76" r="4" fill="#1D9E75" opacity="0.8"/>
                            <path d="M110 38 L134 62 L86 76" stroke="#b8f26e" stroke-width="0.8" opacity="0.4"/>
                        </svg>
                        <div className="project-visual-overlay"
                             style={{background: 'linear-gradient(to bottom, transparent 50%, #111f11 100%)'}}></div>
                    </div>
                    <div className="project-body">
                        <p className="project-num">05</p>
                        <h3 className="project-title" style={{fontSize: '18px'}}>DataMap</h3>
                        <p className="project-desc" style={{fontSize: '13px'}}>D3 network visualization for complex graph
                            data.</p>
                        <div className="project-footer">
                            <div className="project-stack"><span className="ptag">D3</span><span
                                className="ptag">WebGL</span></div>
                            <div className="project-arrow" style={{width: '28px', height: '28px', fontSize: '12px'}}>→</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;