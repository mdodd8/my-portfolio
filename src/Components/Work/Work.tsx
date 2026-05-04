import './Work.css'
import CarouselModal from "./CarouselModal.tsx";
import type {PortfolioCardInterface} from "../../Interfaces/PortfolioCardInterface.ts";
import {useState} from "react";
import Img2 from '../../assets/bth-2.png'
import Img3 from '../../assets/bth-3.png'
import Img4 from '../../assets/bth-4.png'
import Img5 from '../../assets/bth-5.png'


type TagColor = "blue" | "teal" | "coral" | "purple" | "amber";

interface ColorDef {
    background: string;
    color: string;
}

const tagStyles: Record<TagColor, ColorDef> = {
    blue: {background: "#E6F1FB", color: "#0C447C"},
    teal: {background: "#E1F5EE", color: "#085041"},
    coral: {background: "#FAECE7", color: "#712B13"},
    purple: {background: "#EEEDFE", color: "#3C3489"},
    amber: {background: "#FAEEDA", color: "#633806"},
};

const DefaultProjects: PortfolioCardInterface[] = [
    {
        id: 1,
        title: "Dashboard Analytics Platform",
        description:
            "Real-time data visualization tool for tracking business KPIs. Handles 50k+ events/day with sub-second query performance.",
        role: "UX Developer",
        tags: [
            {label: "React", color: "blue"},
            {label: "Node.js", color: "teal"},
            {label: "PostgreSQL", color: "teal"},
        ],
        thumbBg: "#E6F1FB",
        image: Img3,
        gallery: [{image: Img2}, {image: Img3}, {image: Img4}, {image: Img5}]
    },
    {
        id: 2,
        title: "AI Talent Matching App",
        description:
            "Recruitment tool using NLP to match candidates to job descriptions. Reduced time-to-hire by 40% in pilot testing.",
        role: "UX Developer",
        tags: [
            {label: "Vue 3", color: "teal"},
            {label: "AI/ML", color: "purple"},
            {label: "Python", color: "teal"},
        ],
        thumbBg: "#E1F5EE",
        image: Img2,
        gallery: [{image: Img2}, {image: Img3}, {image: Img4}]
    },
    {
        id: 4,
        title: "Fitness Tracking Mobile App",
        description:
            "Cross-platform workout logger with custom progress charts and social sharing. 4.8★ on App Store with 12k downloads.",
        role: "UX Developer",
        tags: [
            {label: "React Native", color: "coral"},
            {label: "Firebase", color: "teal"},
        ],
        thumbBg: "#FAECE7",
        image: Img2,
        gallery: [{image: Img2}, {image: Img3}, {image: Img4}]
    },
    {
        id: 3,
        title: "E-commerce Design System",
        description:
            "Modular component library powering a fashion brand's storefront. 60+ components, full WCAG 2.1 AA compliance.",
        role: "Lead Frontend",
        tags: [
            {label: "Next.js", color: "purple"},
            {label: "TypeScript", color: "blue"},
            {label: "Stripe", color: "amber"},
        ],
        thumbBg: "#EEEDFE",
        image: Img2,
        gallery: [{image: Img2}, {image: Img3}, {image: Img4}]
    },

];

function Work() {
    const [selectedProject, setSelectedProject] = useState<PortfolioCardInterface | null>(null);

    return (
        <>
            <section id="work">
                    <div>
                        <div className="section-header">Selected Work</div>
                        <h2 className="section-title">Projects that made an impact</h2>
                    </div>
                <div className="project-featured">
                    {DefaultProjects.map((project) => (
                        <div className="project-card " onClick={() => setSelectedProject(project)}>
                            <div className="project-visual" style={{background: '#0f0d1a'}}>
                                <img style={{width: '-webkit-fill-available'}} src={project.image} alt="img-text"/>

                                <div className="project-visual-overlay"
                                     style={{background: 'linear-gradient(to bottom, transparent 50%, #15121f 100%)'}}></div>
                            </div>
                            <div className="project-body">
                                <p className="project-num">02 — {project.role}</p>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-footer">
                                    <div style={styles.tags}>
                                        {project.tags.map((tag) => (
                                            <span key={tag.label}
                                                  style={{...styles.tag, ...tagStyles[tag.color as TagColor]}}>
                                            {tag.label}
                                        </span>
                                        ))}
                                    </div>
                                    <div className="project-arrow">→</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <CarouselModal project={selectedProject}
                           isOpen={selectedProject !== null}
                           onClose={() => {
                               setSelectedProject(null);    // ← add this too
                           }}/>
        </>
    );
}


const styles: Record<string, React.CSSProperties> = {
    section: {
        fontFamily: "'DM Sans', sans-serif",
        maxWidth: "960px",
        margin: "0 auto",
        padding: "2rem 1rem",
    },
    header: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        paddingBottom: "12px",
        borderBottom: "0.5px solid rgba(0,0,0,0.12)",
        marginBottom: "20px",
    },
    headerTitle: {
        fontFamily: "'DM Serif Display', serif",
        fontStyle: "italic",
        fontSize: "22px",
        fontWeight: 400,
        color: "#1a1a1a",
    },
    headerCount: {
        fontFamily: "'DM Mono', monospace",
        fontSize: "12px",
        color: "#999",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "20px",
    },
    card: {
        background: "#ffffff",
        border: "0.5px solid rgba(0,0,0,0.1)",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, border-color 0.2s ease",
        cursor: "pointer",
    },
    thumb: {
        height: "160px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    body: {
        padding: "1rem 1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        flex: 1,
    },
    tags: {
        display: "flex",
        flexWrap: "wrap" as const,
        gap: "6px",
    },
    tag: {
        fontFamily: "'DM Mono', monospace",
        fontSize: "11px",
        fontWeight: 400,
        padding: "3px 8px",
        borderRadius: "4px",
    },
    title: {
        fontFamily: "'DM Serif Display', serif",
        fontSize: "18px",
        fontWeight: 400,
        color: "#1a1a1a",
        margin: 0,
        lineHeight: 1.3,
    },
    desc: {
        fontSize: "13px",
        color: "#666",
        margin: 0,
        lineHeight: 1.6,
        flex: 1,
    },
    footer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.25rem 1rem",
    },
    links: {
        display: "flex",
        gap: "8px",
    },
    link: {
        fontFamily: "'DM Mono', monospace",
        fontSize: "11px",
        color: "#666",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        padding: "5px 10px",
        border: "0.5px solid rgba(0,0,0,0.12)",
        borderRadius: "8px",
        transition: "background 0.15s, border-color 0.15s",
    },
    year: {
        fontFamily: "'DM Mono', monospace",
        fontSize: "11px",
        color: "#aaa",
    },
};

export default Work;