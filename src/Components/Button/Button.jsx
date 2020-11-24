import React from 'react';
import './Button.css';

const STYLE = ['btn--primary', 'btn--outline'];

const SIZE = ['btn--large', 'btn--medium', 'btn--mobile', 'btn--wide'];

const COLOR = ['primary', 'red', 'blue', 'green'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ?
    buttonStyle : STYLE[0]

    const checkButtonSize = SIZE.includes(buttonSize) ?
    buttonSize : SIZE[0]

    const checkButtonColor = COLOR.includes(buttonColor) ?
    buttonColor : null

    return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
}