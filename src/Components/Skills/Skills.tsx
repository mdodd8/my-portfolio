import './Skills.css'
import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import Tag from "../Tags/Tag.tsx";
import {SkillsArray} from "../../Data/SkillsData.ts";


function Skills() {
    return (
        <section id="skills" className="skills-section">
            <SectionHeader header="Skills" title="What I bring to the table"/>
            <div className="skills-grid">
                {SkillsArray.map((skill) => (
                    <div key={skill.id} className="skill-card" data-num={skill.id.toString()}>
                        <div className="skill-icon">✦</div>
                        <div className="skill-name">{skill.title}</div>
                        <p className="skill-desc">{skill.description}</p>
                        <Tag tags={skill.tags}/>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;