import React from "react"
import classnames from "classnames"

export default function Button({children, shape, variant}) {

    const variantClass = variant ? `button-${variant}` : ""
    const shapeClass = shape ? `button-${shape}` : ""
    const allClasses = classnames(variantClass, shapeClass)

    return (
        <button className={allClasses}>
            {children}
        </button>
    )
}