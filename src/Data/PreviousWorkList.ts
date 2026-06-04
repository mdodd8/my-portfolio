import type {PortfolioCardInterface} from "../Interfaces/PortfolioCardInterface.ts";
import Img5 from '../assets/bth-5.png'
import Img2 from '../assets/Nutritionist Calc.png'
import Img3 from '../assets/gateway-3.png'
import Img4 from '../assets/mercado-2.png'

const tagColors = {

    language: { color: "#0C447C", background: "#E6F1FB" },
    framework: { color: "#3C3489", background: "#EEEDFE" },
    mobile: { color: "#085041", background: "#E1F5EE" },
    design: { color: "#633806", background: "#FAEEDA" },
    tools: { color: "#2D3A4A", background: "#E8ECF2" },
    backend: { color: "#712B13", background: "#FAECE7" },
};


export const previousWorkList: PortfolioCardInterface[] = [
    {
        id: 1,
        role: 'Frontend Developer',
        title: 'Athletics Fan Social Platform',
        description: 'A social media platform built exclusively for sports fans to connect directly with their favorite athletes. Athletes could post updates, share exclusive behind-the-scenes content, promote events, and sell merchandise — all in one branded space.',
        roleDescription: 'Worked directly with the athletic department to gather background information on each player. Translated that intel into individual player profile pages with unique layouts that reflected each athlete\'s identity. Created wireframes and high-fidelity mockups before development and built the final frontend in WordPress.',
        highlights: [
            'Collaborated with athletic department staff to research and profile individual athletes for personalized page design',
            'Designed and built unique layout templates for each player profile page — no two looked the same',
            'Integrated exclusive content zones, event promotion sections, and a fan-facing shop into the platform',
            'Delivered a cohesive visual system that maintained brand consistency across all athlete profiles',
        ],
        tags: [
            {label: 'WordPress', ...tagColors.tools},
            {label: 'HTML5', ...tagColors.language},
            {label: 'CSS3', ...tagColors.language},
            {label: 'JavaScript', ...tagColors.language},
            {label: 'UI/UX Design', ...tagColors.design},
            {label: 'Adobe', ...tagColors.design}
           ],
        image: Img5
    },
    {
        id: 2,
        role: 'Lead Frontend Developer',
        title: 'Dairy Operations Management Platform',
        description: 'A multi-dairy management platform giving operators and administrators full visibility into the financial and operational health of each dairy. Each dairy maintained detailed logs of feed schedules, dietary plans, and cow health data — all feeding into a central admin view for cross-dairy performance analysis.',
        roleDescription: 'Led a team of 5 frontend developers from client discovery through delivery. Ran meetings with dairy clients to understand their operational workflows and translate business needs into design requirements. Created wireframes and mockups collaboratively with the team, then ran daily standups to keep development on track and unblock teammates.',
        highlights: [
            'Led client discovery sessions with dairy operators to capture real-world workflows and turn them into product requirements',
            'Managed a team of 5 developers — ran daily standups, reviewed PRs, and ensured design consistency across the platform',
            'Built the admin dashboard giving cross-dairy visibility into profit, expenses, and areas needing operational improvement',
            'Designed the feed and dietary logging system so farmers could update orders and track changes over time per herd',
            'Delivered the full platform on schedule through structured sprint planning and clear team communication',
        ],
        tags: [
            {label: 'Angular', ...tagColors.framework},
            {label: 'Mendix', ...tagColors.tools},
            {label: 'TypeScript', ...tagColors.language},
            {label: 'HTML5', ...tagColors.language},
            {label: 'CSS3', ...tagColors.language},
            {label: 'Figma', ...tagColors.design},
            {label: 'Agile / Scrum', ...tagColors.tools}
        ],
        image:Img2
    },
    {
        id: 3,
        role: 'Frontend Developer',
        title: 'Shipping Order Tracking Application',
        description: 'An end-to-end order accountability platform designed to track shipments from the moment an order is placed through final delivery. Gave operations teams full visibility into order status, timing, delays, special handling notes, and chain of custody at every stage.',
        roleDescription: 'Built the frontend tracking interface in Angular, working closely with the Node.js backend team to surface real-time order data in a clear, actionable layout. Focused on making complex logistics data readable at a glance for both warehouse staff and management.',
        highlights: [
            'Built a real-time order timeline view showing every stage from placement to delivery with status indicators',
            'Implemented delay and on-time flagging so operations teams could identify and act on problem orders quickly',
            'Created a notes and handler log so every person and action associated with an order was fully documented',
            'Designed role-based views — warehouse staff saw task-level detail, management saw summary and exception reports',
        ],
        tags: [
            {label: 'Angular', ...tagColors.framework},
            {label: 'Node.js', ...tagColors.backend},
            {label: 'TypeScript', ...tagColors.language},
            {label: 'HTML5', ...tagColors.language},
            {label: 'CSS3', ...tagColors.language},
            {label: 'REST APIs', ...tagColors.backend}
        ],
        image:Img4
    },
    {
        id: 4,
        role: 'Frontend Developer',
        title: 'Winery Sales Rep Mobile Hub',
        description: 'An internal mobile application built for winery sales representatives to access product education, communicate with teammates, and document their in-field work. Served as a centralized learning hub and team communication center for reps across multiple regions.',
        roleDescription: 'Built the frontend mobile interface using Angular and Ionic, translating product and communication requirements into a clean, intuitive in-app experience. Focused on making product information easily navigable and the team feed engaging enough to drive daily usage.',
        highlights: [
            'Built a comprehensive product catalog covering all wines and spirits with tasting notes, pairings, and sales talking points',
            'Developed a team social feed where reps could post photos of their in-store displays and share best practices',
            'Designed the mobile-first UI with an emphasis on quick access — reps needed information fast, in the field',
            'Created an onboarding flow to help new reps get up to speed on the full product portfolio',
        ],
        tags: [
            {label: 'Angular', ...tagColors.framework},
            {label: 'Ionic', ...tagColors.mobile},
            {label: 'TypeScript', ...tagColors.language},
            {label: 'HTML5', ...tagColors.language},
            {label: 'CSS3', ...tagColors.language},
            {label: 'Mobile Development', ...tagColors.mobile}
        ],
        image:Img3
    },
];