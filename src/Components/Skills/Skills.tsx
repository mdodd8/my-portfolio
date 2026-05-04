import './Skills.css'
import type {SkillsInterface} from "../../Interfaces/SkillsInterface.ts";


const SkillArray: SkillsInterface[] = [
    {
        id: 1,
        title: "Front-End Development",
        description:
            "Strong foundation in HTML, CSS, and JavaScript with a focus on building responsive, accessible, and performant interfaces.",
        tags: [
            {label: "HTML & CSS"},
            {label: "JavaScript"},
            {label: "Responsive design"},
        ]
    },
    {
        id: 2,
        title: "Framework Expertise",
        description:
            "Experience working across React, Vue, and Angular to develop scalable, maintainable applications using modern best practices.",
        tags: [
            {label: "React"},
            {label: "Vue"},
            {label: "Angular"},
        ]
    },
    {
        id: 3,
        title: "UI Engineering",
        description:
            "Skilled in building dynamic, component-driven interfaces that prioritize usability, performance, and clean architecture.",
        tags: [
            {label: "Dynamic user interfaces"},
            {label: "Component-based architecture"},
            {label: "State management"},
        ]
    },
    {
        id: 4,
        title: "UX Design Foundation",
        description:
            "Skilled in building dynamic, component-driven interfaces that prioritize usability, performance, and clean architecture.",
        tags: [
            {label: "Google UX Design Professional Certificate"},
            {label: "UX principles & usability"},
            {label: "User driven design"},
        ]
    },
    {
        id: 5,
        title: "Design & Prototyping",
        description:
            "Backed by a Google UX Design certification, with an emphasis on creating intuitive, user-centered experiences.",
        tags: [
            {label: "Wireframing"},
            {label: "low-fidelity prototypes"},
            {label: "High-fidelity design"},
            {label: "Figma"},
            {label: "Interactive prototyping"},
        ]
    },
    {
        id: 6,
        title: "Research & Workflow",
        description:
            "Proficient in translating ideas into wireframes and high-fidelity Figma designs, ensuring accuracy from concept to final build.",
        tags: [
            {label: "UX research & user testing"},
            {label: "Empathize / Define / Ideate process"},
            {label: "Version control"},
            {label: "Mendix"}
        ]
    },
];

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="section-header">Skills</div>
            <h2 className="section-title">What I bring to the table</h2>

            <div className="skills-grid">
                {SkillArray.map((skill) => (
                    <div className="skill-card" data-num={skill.id.toString()}>
                        <div className="skill-icon">✦</div>
                        <div className="skill-name">{skill.title}</div>
                        <p className="skill-desc">{skill.description}</p>
                        <div className="skill-tags">
                            {skill.tags.map((tag) => (
                                <span className="stag">{tag.label}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;