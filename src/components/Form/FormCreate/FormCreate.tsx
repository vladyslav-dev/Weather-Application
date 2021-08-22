import React, { useState, useContext } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Context } from '../../../context'

import { formFields } from '../helpers/constants'
import { IFormData } from '../../../interfaces'

// UI
import FormField from '../../UI/FormField'
import Button from '../../UI/Button'


const FormCreate: React.FC = () => {

    const { addHandler } = useContext(Context)

    const [formData, setFormData] = useState({} as IFormData)

    const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        const element = event.target as HTMLInputElement;
        setFormData(prevState => ({ ...prevState, [element.name]: element.value }))
    }

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const newCard = {
            id: uuidv4(),
            name: formData.city || "Empty title",
            weather: {
                temperature: {
                    actual: formData.temperature || 0
                },
                wind: {
                    speed: formData.wind_speed || 0,
                    deg: formData.deg || 0,
                },
                clouds: {
                    all: formData.clouds_all || 0,
                    visibility: formData.visibility || 0,
                    humidity: formData.humidity || 0
                }
            }
        }

        addHandler(newCard)
    }

    return (
        <div className="form-wrapper">
            <h2>New card</h2>
            <form action="#" className="form" onSubmit={submitForm}>
                {formFields.map(field => <FormField key={field.key} formData={formData} info={field} handler={changeHandler} />)}
                <Button text="Create" />
            </form>
        </div>
    )
}

export default FormCreate