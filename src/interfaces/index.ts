export interface IData {
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

export interface IContextProps {
    data: IData[],
    isCelsius: boolean,
    systemSwitcher: () => void,
    addHandler: (newCard: IData) => void,
    removeHandler: (id: string) => void,
    updateHandler: (id: string, modifiedCard: IData) => void
}

export interface IInput {
    key: string,
    name: string,
    label: string,
    type: string
}

export interface IFormData {
    city: string | "",
    temperature: number | 0,
    wind_speed: number | 0,
    deg: number | 0,
    clouds_all: number | 0,
    visibility: number | 0,
    humidity: number | 0,
}



