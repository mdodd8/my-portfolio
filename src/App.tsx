import './App.css'
import Dashboard from "./Components/Dashboard/Dashboard.tsx";
import About from "./Components/About/About.tsx";
import Work from "./Components/Work/Work.tsx";
import Skills from "./Components/Skills/Skills.tsx";
import Experience from "./Components/Experience/Experience.tsx";
import Contact from "./Components/Contact/Contact.tsx";

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
                  <a href="#work">Work</a>
                  <a href="#skills">Skills</a>
                  <a href="#contact">Contact</a>
              </nav>
              <button className="btn global-btn" onClick={() =>document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'})}>Contact Me</button>
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
              <About />
              <Skills />
              <Experience />
              <Work />
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
