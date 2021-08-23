import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import { Context } from '../../../context'

import { formFields } from '../helpers/constants'
import { IFormData } from '../../../types'

// UI
import FormField from '../../UI/FormField'
import Button from '../../UI/Button'

const FormUpdate: React.FC = () => {

    const { data, updateHandler } = useContext(Context)
    const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState({} as IFormData)

    useEffect(() => {
        const [currentCard] = data.filter(card => card.id === id)
        setFormData({
            city: currentCard.name,
            temperature: currentCard.weather.temperature.actual,
            wind_speed: currentCard.weather.wind.speed,
            deg: currentCard.weather.wind.deg,
            clouds_all: currentCard.weather.clouds.all,
            visibility: currentCard.weather.clouds.visibility,
            humidity: currentCard.weather.clouds.humidity,
        })
    }, [])

    const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        const element = event.target as HTMLInputElement;
        setFormData(prevState => ({ ...prevState, [element.name]: element.value }))
    }

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault()

        const modifiedCard = {
            id: uuidv4(),
            name: formData.city,
            weather: {
                temperature: {
                    actual: formData.temperature
                },
                wind: {
                    speed: formData.wind_speed,
                    deg: formData.deg,
                },
                clouds: {
                    all: formData.clouds_all,
                    visibility: formData.visibility,
                    humidity: formData.humidity
                }
            }
        }

        updateHandler(id, modifiedCard)
    }

    if (Object.keys(formData).length === 0) {
        return null
    }

    return (
        <div className="form-wrapper">
            <h2>Update card</h2>
            <form action="#" className="form" onSubmit={submitForm}>
                {formFields.map(field => <FormField key={field.key} formData={formData} info={field} handler={changeHandler} />)}
                <Button text="Update" />
            </form>
        </div>
    )
}

export default FormUpdate