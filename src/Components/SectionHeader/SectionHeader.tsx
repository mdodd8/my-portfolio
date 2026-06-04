import './SectionHeader.css'


interface SectionHeaderProps {
    header: string;
    title: string;
}

function SectionHeader({header, title}: SectionHeaderProps) {
    return (
        <>
            <div className="section-header">{header}</div>
            <h2 className="section-title">{title}</h2>
        </>
    )
}

export default SectionHeader;