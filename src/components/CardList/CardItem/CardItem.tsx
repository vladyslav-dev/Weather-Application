import React, { useContext } from 'react'
import './CardItem.scss'
import { Link } from 'react-router-dom'
import { IData } from '../../../types'
import { Context } from '../../../context'

// Images
import editIcon from '../../../images/edit-icon.svg'
import deleteIcon from '../../../images/delete-icon.svg'

// Temperature type icon
import celsius from '../../../images/temperatureType/blue-mdi_temperature-celsius.svg'
import fahrenheit from '../../../images/temperatureType/blue-mdi_temperature-fahrenheit.svg'

// Weather icons
import sunny from '../../../images/weather-type/sun-weather-icon.png'
import cloudSunny from '../../../images/weather-type/cloud-sun-weather-icon.png'
import cloudRain from '../../../images/weather-type/cloud-rain-weather-icon.png'
import heavyRain from '../../../images/weather-type/heavy-rain-icon.png'


type PropTypes = {
    info: IData,
    removeHandler: (id: string) => {}
}

const CardItem: React.FC<PropTypes> = ({ info, removeHandler }) => {

    const { isCelsius } = useContext(Context)

    const WeatherIcon: React.FC = () => {
        const clouds = info.weather.clouds.all
        return <>
            {clouds <= 25 && <img src={heavyRain} alt={"weather icon"} />}
            {clouds >= 25 && clouds < 65 && <img src={cloudRain} alt={"weather icon"} />}
            {clouds < 100 && clouds >= 65 && <img src={cloudSunny} alt={"weather icon"} />}
            {clouds >= 100 && <img src={sunny} alt={"weather icon"} />}
        </>
    }

    return (
        <div className="card">
            <div className="card__top">
                <div>
                    <WeatherIcon />
                    <span className="card__top_temperature">
                        {info.weather.temperature.actual}
                        {isCelsius ? <img src={celsius} alt="celsius" /> : <img src={fahrenheit} alt="fahrenheit" />}
                    </span>
                </div>
                <span className="card__top_city">{info.name}</span>
            </div>
            <div className="card__information">
                <div className="card__information_row">
                    <span>Wind speed:</span>
                    <span>{info.weather.wind.speed} mph</span>
                </div>
                <div className="card__information_row">
                    <span>Deg:</span>
                    <span>{info.weather.wind.deg}</span>
                </div>
                <div className="card__information_row">
                    <span>Visibility:</span>
                    <span>
                        {info.weather.clouds.visibility < 1000 ? "low visibity" : "good visibity"}
                    </span>
                </div>
                <div className="card__information_row">
                    <span>Humidity:</span>
                    <span>{info.weather.clouds.humidity}%</span>
                </div>
            </div>
            <div className="card__bottom">
                <span className="card__bottom_link">
                    <Link to={`/update/${info.id}`}>
                        <img src={editIcon} alt="Edit card" />
                    </Link>
                </span>
                <span className="card__bottom_link" id={info.id} onClick={(event) => removeHandler(event.currentTarget.id)}>
                    <img src={deleteIcon} alt="Delete card" />
                </span>

            </div>
        </div>
    )
}

export default CardItem