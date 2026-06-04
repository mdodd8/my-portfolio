interface Experience {
    id: number;
    date: string;
    tasks: {label: string}[];
    company: string;
    role: string;
    employment: string;
}

export const ExperienceData: Experience[] = [
    {
        id: 1,
        date: '2015-2017',
        tasks:
            [
                {label: 'Collaborated with creative and production teams to conceptualize and develop storyboards for video and digital content.'},
                {label: 'Ensured consistent brand messaging and visual storytelling across all media deliverables.'},
                {label: 'Laid the foundation for a transition into front-end development through hands-on design systems work'}
        ],
        company: 'Clear Wave Software',
        role: 'Graphics & Media Designer',
        employment: 'Full Time'
    },
    {
        id: 2,
        date: '2017-2020',
        tasks:
            [
                {label: 'Collaborated within a cross-functional team to design, build, and deploy production-ready applications from concept to launch.'},
                {label: 'Developed user interfaces optimized for usability, performance, and accessibility across web and mobile platforms.'},
                {label: 'Partnered with backend engineers to ensure seamless data integration, intuitive workflows, and responsive layouts.'},
                {label: 'Participated in end-to-end development including planning, wireframing, front-end coding, testing, and production deployment.'},
                {label: 'Built scalable, maintainable UI components using modern frameworks and design principles'}
            ],
        company: 'Clear Wave Software',
        role: 'Application UI Developer',
        employment: 'Full Time'
    },
    {
        id: 1,
        date: '2020-present',
        tasks:
            [
                {label: ' Serve as lead front-end developer, overseeing the design and implementation of responsive, production-ready applications across multiple platforms including React, Vue, and Mendix.'},
                {label: 'Translate storyboards and wireframes into dynamic, functional user interfaces aligned with business and user requirements.'},
                {label: 'Collaborate with cross-functional teams—designers, backend developers, and project managers—to deliver high-quality, scalable software solutions.'},
                {label: 'Provide mentorship on UI/UX best practices, design consistency, and component reusability across projects.'},
                {label: 'Gained hands-on backend development experience to support full-stack project delivery.'},
                {label: 'Delivered applications serving both consumer-facing and enterprise infrastructure clients across varied industries.'}
            ],
        company: 'Clear Wave Software',
        role: 'Front End Software Developer',
        employment: 'Full Time'
    },

]