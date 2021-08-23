import React, { useContext } from 'react'
import './CardItem.scss'
import { Link } from 'react-router-dom'
import { IData } from '../../../interfaces'
import { Context } from '../../../context'

// Images
import editIcon from '../../../images/edit-icon.svg'
import deleteIcon from '../../../images/delete-icon.svg'

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

    return (
        <div className="card">
            <div className="card__top">
                <div>
                    <>
                        {info.weather.clouds.all <= 25 && <img src={heavyRain} alt={"weather icon"} />}
                        {info.weather.clouds.all >= 25 && info.weather.clouds.all < 65 && <img src={cloudRain} alt={"weather icon"} />}
                        {info.weather.clouds.all < 100 && info.weather.clouds.all >= 65 && <img src={cloudSunny} alt={"weather icon"} />}
                        {info.weather.clouds.all >= 100 && <img src={sunny} alt={"weather icon"} />}
                    </>
                    <span className="card__top_temperature">
                        {info.weather.temperature.actual}
                        {isCelsius ?
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 6.66667C24.0667 6.66667 26 7.29333 27.5867 8.37333L26.04 12.2267C24.9366 11.2185 23.4946 10.6617 22 10.6667C18.6667 10.6667 16 13.3333 16 16.6667C16 20 18.6667 22.6667 22 22.6667C23.3733 22.6667 24.6267 22.2133 25.64 21.44L27.16 25.24C25.6024 26.1776 23.818 26.6709 22 26.6667C19.3478 26.6667 16.8043 25.6131 14.9289 23.7377C13.0536 21.8624 12 19.3188 12 16.6667C12 14.0145 13.0536 11.471 14.9289 9.5956C16.8043 7.72024 19.3478 6.66667 22 6.66667V6.66667ZM8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12C6.93913 12 5.92172 11.5786 5.17157 10.8284C4.42143 10.0783 4 9.06087 4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4V4ZM8 6.66667C7.64638 6.66667 7.30724 6.80714 7.05719 7.05719C6.80714 7.30724 6.66667 7.64638 6.66667 8C6.66667 8.35362 6.80714 8.69276 7.05719 8.94281C7.30724 9.19286 7.64638 9.33333 8 9.33333C8.35362 9.33333 8.69276 9.19286 8.94281 8.94281C9.19286 8.69276 9.33333 8.35362 9.33333 8C9.33333 7.64638 9.19286 7.30724 8.94281 7.05719C8.69276 6.80714 8.35362 6.66667 8 6.66667Z" fill="#424772" />
                            </svg>


                            :
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6667 26.6667V6.66667H26.6667V10.6667H18.6667V14.6667H25.3333V18.6667H18.6667V26.6667H14.6667ZM8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12C6.93913 12 5.92172 11.5786 5.17157 10.8284C4.42143 10.0783 4 9.06087 4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4V4ZM8 6.66667C7.64638 6.66667 7.30724 6.80714 7.05719 7.05719C6.80714 7.30724 6.66667 7.64638 6.66667 8C6.66667 8.35362 6.80714 8.69276 7.05719 8.94281C7.30724 9.19286 7.64638 9.33333 8 9.33333C8.35362 9.33333 8.69276 9.19286 8.94281 8.94281C9.19286 8.69276 9.33333 8.35362 9.33333 8C9.33333 7.64638 9.19286 7.30724 8.94281 7.05719C8.69276 6.80714 8.35362 6.66667 8 6.66667Z" fill="#424772" />
                            </svg>


                        }
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