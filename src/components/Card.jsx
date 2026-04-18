export default function Card({title, description, icon, iconBg}) {
    return (
        <div className="card">
            <div className="icon-container" style={{background: `${iconBg}`}}>{icon}</div>

            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}