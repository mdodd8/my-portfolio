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

            <Dashboard scrollTo={scrollTo}/>
            <About/>
            <Skills/>
            <Experience/>
            <Work/>


            <Contact/>
        </div>
    );
}

export default Layout;