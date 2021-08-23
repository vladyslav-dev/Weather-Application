export type IData = {
    id: string,
    name: string,
    weather: {
        temperature: {
            actual: number
        },
        wind: {
            speed: number,
            deg: number,
        },
        clouds: {
            all: number,
            visibility: number,
            humidity: number
        }
    }
}

export type IContextProps = {
    data: IData[],
    isCelsius: boolean,
    systemSwitcher: () => void,
    addHandler: (newCard: IData) => void,
    removeHandler: (id: string) => void,
    updateHandler: (id: string, modifiedCard: IData) => void
}

export type IInput = {
    key: string,
    name: string,
    label: string,
    type: string
}

export type IFormData = {
    city: string,
    temperature: number,
    wind_speed: number,
    deg: number,
    clouds_all: number,
    visibility: number,
    humidity: number,
}



