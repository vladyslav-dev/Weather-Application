import React from 'react'
import './Button.scss'

type PropTypes = {
    text: string
}

const Button: React.FC<PropTypes> = ({ text }) => (
    <div className="button-wrapper">
        <input className="button" type="submit" value={text} />
    </div>
)

export default Button