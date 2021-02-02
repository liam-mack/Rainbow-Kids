import React from "react";
import "./Button.scss";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLOUR = ["primary","purpleBtn","greyBtn", "whiteBtn", "yellowBtn", "peachBtn", "limeBtn", "pinkBtn", "programsBtn", "staffBtn"];

// Fix: buttonLocation
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColour,
    buttonLocation
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonColour = COLOUR.includes(buttonColour) ? buttonColour : null

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColour} ${buttonLocation}`} onClick={ onClick } type={ type }>
            { children }
        </button> 
    )
}