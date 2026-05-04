import './Work.css'
import Img1 from '../../assets/bth-2.png'


function Work() {
    return (
        <section id="work">
            <div className="projects-header">
                <div>
                    <div className="section-header">Selected Work</div>
                    <h2 className="section-title">Projects that made an impact.</h2>
                </div>
                <a href="#" className="projects-link">All projects →</a>
            </div>

            <div className="project-featured">
                <div className="project-card large">
                    <div className="project-visual" style={{background: '#0d1a12'}}>
                        <img style={{width: '-webkit-fill-available'}} src={Img1} alt="img-text"/>
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
                        <img style={{width: '-webkit-fill-available'}} src={Img1} alt="img-text"/>

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

            <div className="project-row">
                <div className="project-card">
                    <div className="project-visual" style={{background: '#1a100a'}}>
                        <img style={{width: '-webkit-fill-available'}} src={Img1} alt="img-text"/>

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
                        <img style={{width: '-webkit-fill-available'}} src={Img1} alt="img-text"/>

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
                        <img style={{width: '-webkit-fill-available'}} src={Img1} alt="img-text"/>

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