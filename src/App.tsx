import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./Components/Dashboard/Dashboard.tsx";
import Layout from "./Components/Layout.tsx";
import About from "./Components/About.tsx";
import Work from "./Components/Work.tsx";
import Contact from "./Components/Contact.tsx";
import Skills from "./Components/Skills.tsx";


function App() {
  // const [count, setCount] = useState(0)

  return (
      <Router>
          <Routes>
              <Route element={<Layout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/contact" element={<Contact />} />
              </Route>
          </Routes>
      </Router>
      // <>
      //     <nav id="nav">
      //         <a href="#" className="nav-logo">alex<span>.dev</span></a>
      //         <ul className="nav-links">
      //             <li><a href="#work">Work</a></li>
      //             <li><a href="#about">About</a></li>
      //             <li><a href="#skills">Skills</a></li>
      //             <li><a href="#contact">Contact</a></li>
      //         </ul>
      //         <button className="nav-cta">Hire Me</button>
      //     </nav>
      //     <div className="cursor" id="cursor"></div>
      //     <div className="cursor-ring" id="cursorRing"></div>
      //     <section className="hero" id="hero">
      //         <div className="hero-bg-grid"></div>
      //         <div className="hero-orb hero-orb-1"></div>
      //         <div className="hero-orb hero-orb-2"></div>
      //
      //         <p className="hero-label">Available for freelance · Based in San Francisco</p>
      //
      //         <h1 className="hero-headline">
      //             Frontend<br/>
      //             <span className="line2">Developer &</span><br/>
      //             <span className="accent-word">Craftsman.</span>
      //         </h1>
      //
      //         <div className="hero-bottom">
      //             <p className="hero-desc">
      //                 I build <strong>fast, beautiful interfaces</strong> that feel as good as they look.
      //                 React, TypeScript, motion design — from idea to pixel-perfect reality.
      //             </p>
      //             <div className="hero-actions">
      //                 <div className="hero-btn-group">
      //                     <button>
      //                         Work
      //                     </button>
      //                     <button>Talk</button>
      //                     {/*<button className="btn-primary"*/}
      //                     {/*        onClick="document.querySelector('#work').scrollIntoView({behavior:'smooth'})">View My*/}
      //                     {/*    Work*/}
      //                     {/*</button>*/}
      //                     {/*<button className="btn-ghost"*/}
      //                     {/*        onClick="document.querySelector('#contact').scrollIntoView({behavior:'smooth'})">Let's*/}
      //                     {/*    Talk*/}
      //                     {/*</button>*/}
      //                 </div>
      //                 <div className="hero-scroll-hint">
      //                     <span className="arrow">↓</span>
      //                     <span>scroll to explore</span>
      //                 </div>
      //             </div>
      //         </div>
      //     </section>
      //
      //
      //     <div className="marquee-wrap">
      //         <div className="marquee-track">
      //             <div
      //                 className="marquee-item">React <span>✦</span> TypeScript <span>✦</span> Next.js <span>✦</span> Framer
      //                 Motion <span>✦</span> Tailwind
      //                 CSS <span>✦</span> GraphQL <span>✦</span> Node.js <span>✦</span> Figma <span>✦</span> Storybook <span>✦</span> Vitest <span>✦</span> Vercel <span>✦</span> Accessibility <span>✦</span> Performance <span>✦</span>
      //             </div>
      //             <div
      //                 className="marquee-item">React <span>✦</span> TypeScript <span>✦</span> Next.js <span>✦</span> Framer
      //                 Motion <span>✦</span> Tailwind
      //                 CSS <span>✦</span> GraphQL <span>✦</span> Node.js <span>✦</span> Figma <span>✦</span> Storybook <span>✦</span> Vitest <span>✦</span> Vercel <span>✦</span> Accessibility <span>✦</span> Performance <span>✦</span>
      //             </div>
      //         </div>
      //     </div>
      // </>
  )
}

export default App
