import React from 'react'
import './Button.scss'

type PropTypes = {
    text: string,
    type: string
}

const Button: React.FC<PropTypes> = ({ text, type = "submit" }) => (
    <div className="button-wrapper">
        <input className="button" type={type} value={text} />
    </div>
)

export default Button