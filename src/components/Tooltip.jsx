import { AiOutlineCalendar } from "react-icons/ai";
import classNames from "classnames";

export default function Tooltip({title, body, variant}) {

    return (
        <div className={`tooltip tooltip-${variant}`}>
            <div className="tooltip-header">
                <AiOutlineCalendar />   
            </div>
            <div className="tooltip-body">
                <div className="tooltip-title">
                    <h2>{title}</h2>
                    <button className="tooltip-close"><span>X</span></button>
                </div>
                <p>{body}</p>
            </div>
        </div>
    )
}