import React from 'react'
import './FormField.scss'

import { IInput } from '../../../types'

type PropTypes = {
    info: IInput,
    formData: any,
    handler: (event: React.FormEvent<HTMLInputElement>) => {}
}

const FormField: React.FC<PropTypes> = ({ info, handler, formData }) => {
    return (
        <div className="field">
            <label htmlFor={info.name} className="field__label">{info.label}</label>
            <input type={info.type} name={info.name} className="field__input" value={formData[info.name]} onChange={handler} />
        </div>
    )
}

export default FormField