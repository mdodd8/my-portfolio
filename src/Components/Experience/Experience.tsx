import './Experience.css'
import SectionHeader from "../SectionHeader/SectionHeader";
import {ExperienceData} from '../../Data/Experience.ts'

function Experience() {
    return (
        <section className="experience-section">
            <SectionHeader header="Experience" title="Where I've made my mark"/>
            <div className="exp-list">
                {ExperienceData.map((exp) => (
                    <div
                        className="exp-item"
                        key={exp.id}>
                        <p className="exp-period">{exp.date}</p>
                        <div>
                            <p className="exp-company">{exp.company}</p>
                            <p className="exp-role">{exp.role}</p>
                            {exp.tasks.map((task, index) => (
                                <p key={index} className="exp-desc">• {task.label}</p>
                            ))}
                        </div>
                        <span className="exp-badge">{exp.employment}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;