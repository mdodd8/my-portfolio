import './App.css'
import Dashboard from "./Components/Dashboard/Dashboard.tsx";
import About from "./Components/About/About.tsx";
// import Work from "./Components/Work/Work.tsx";
import Skills from "./Components/Skills/Skills.tsx";
import Experience from "./Components/Experience/Experience.tsx";
import Contact from "./Components/Contact/Contact.tsx";
// import Projects from "./Components/Projects/Projects.tsx";
import { LucideDownload } from "lucide-react";
import PDF from "./assets/Melissa_Dodd_Resume (1).pdf"

const scrollTo = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
};

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
          <header className="d-flex flex-row justify-content-between p-3 navbar"
                  style={{borderBottom: '1px solid var(--accent)', alignItems: 'center'}}>
              <a className="navbar-brand" href="#hero">
                  MD
              </a>
              <nav className="nav-links" style={{gap: '40px'}}>
                  <a href="#about">About</a>
                  {/*<a href="#work">Work</a>*/}
                  <a href="#skills">Skills</a>
                  <a href="#contact">Contact</a>
              </nav>
              <div className=" d-flex gap-3">
                  {/*<button className="btn ghost-btn d-flex gap-3"*/}
                  {/*        onClick={() => window.open('https://github.com/mdodd8', '_blank')}>*/}
                  {/*    <svg*/}
                  {/*        xmlns="http://www.w3.org/2000/svg"*/}
                  {/*        width="24"*/}
                  {/*        height="24"*/}
                  {/*        viewBox="0 0 24 24"*/}
                  {/*        fill="currentColor"*/}
                  {/*    >*/}
                  {/*        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />*/}
                  {/*    </svg>*/}
                  {/*    Github</button>*/}
                  <a href={PDF} download="Melissa_Dodd_Resume (1).pdf" className="btn global-btn d-flex gap-3 align-items-center">
                      <LucideDownload style={{height: '20px', width: '20px'}} className="icon"/>
                      Resume</a>
              </div>

              {/*<button className="btn global-btn topbar-contact" onClick={() =>document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'})}>Contact</button>*/}
          </header>
          <main>
              <Dashboard scrollTo={scrollTo} />
              <div className="carousel-wrap">
                  <div className="carousel-track">
                      <div className="marquee-item">React <span>✦</span> TypeScript <span>✦</span> Wireframing <span>✦</span> UX Design
                           <span>✦</span> HTML<span>✦</span> CSS
                           <span>✦</span> Vue <span>✦</span> Angular <span>✦</span> Figma <span>✦</span> Mendix <span>✦</span> Git <span>✦</span> UX Research <span>✦</span> Dynamic Interfaces <span>✦</span> Performance <span>✦</span>
                      </div>
                      <div className="marquee-item">React <span>✦</span> TypeScript <span>✦</span> Wireframing <span>✦</span> UX Design
                          <span>✦</span> HTML<span>✦</span> CSS
                          <span>✦</span> Vue <span>✦</span> Angular <span>✦</span> Figma <span>✦</span> Mendix <span>✦</span> Git <span>✦</span> UX Research <span>✦</span> Dynamic Interfaces <span>✦</span> Performance <span>✦</span>
                      </div>
                  </div>
              </div>
              <About/>
              <Skills />
              <Experience />
              {/*<Work />*/}
              {/*<Projects />*/}
              <Contact />
          </main>
          <footer>
              <p className="footer-copy">© 2026 Melissa Dodd. All rights reserved.</p>
              <a className="navbar-brand" href="#hero">
                  MD
              </a>
          </footer>
      </>
  )
}

export default App
