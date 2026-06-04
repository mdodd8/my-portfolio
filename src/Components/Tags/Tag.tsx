import './Tag.css'


interface TagProps {
    tags: {
        label: string,
        color: string,
        background: string;}[];

}


function Tag ({tags}: TagProps) {
    return (
        <div className="tags-container">
            {tags.map((tag, index) => (
                <span key={index} style={{color: tag.color, background: tag.background}} className="tag-item">{tag.label}</span>
            ))}
        </div>
    )
}

export default Tag;