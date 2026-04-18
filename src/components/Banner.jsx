import classnames from "classnames"

export default function Banner({title, text, icon, variant, multiline}) {

    const varaintClass = `banner banner-${variant}`
    const allClasses = classnames(varaintClass)

    // console.log(allClasses)
    return (
        <div className={allClasses}>
            <div className="left">
                {icon}
            </div>
            <div className="right">
                <h2>{title}</h2>
                {multiline && <p>{text}</p>}
            </div>
            
        </div>
    )
}