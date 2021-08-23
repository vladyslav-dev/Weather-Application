import { IData } from '../types'

export const convertTemperature = (card: IData, convertFunc: (temperature: number) => number): IData => {
    let temperature = card.weather.temperature.actual
    let newTemperature = convertFunc(temperature)
    card.weather.temperature.actual = Math.round(newTemperature)
    return card
}

export const toFahrenheit = (temperature: number): number => {
    return ((temperature * 1.8) + 32)
}

export const toCelsius = (temperature: number): number => {
    return ((temperature - 32) / 1.8)
}

export const toKelvin = (temperature: number): number => {
    return (temperature - 273.15)
}