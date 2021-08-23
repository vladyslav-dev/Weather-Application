import React, { useState, useEffect } from 'react';
import './App.scss';
import weather from '../weather.json'
import { Context } from '../context'
import { useHistory } from "react-router-dom";
import { IData } from '../types'
import * as util from '../utils'

import Routes from '../routes'
import Header from '../components/Header'

const App: React.FC = () => {

  const history = useHistory();
  const [data, setData] = useState<IData[]>([])
  const [isCelsius, setIsCelsius] = useState(true)

  useEffect(() => setData([...weather.map(item => util.convertTemperature(item, util.toKelvin))]), [])

  const addCard = (newCard: IData) => {
    setData(prevState => [...prevState, newCard])
    history.push('/home')
  }

  const removeCard = (id: string) => {
    setData(prevState => [...prevState.filter(card => card.id !== id)])
  }

  const updateCard = (id: string, modifiedCard: IData) => {
    setData(prevState => [...prevState.map(card => card.id === id ? modifiedCard : card)])
    history.push('/home')
  }

  const systemSwitcher = () => {
    if (isCelsius) {
      setData([...data.map(item => util.convertTemperature(item, util.toFahrenheit))])
    } else {
      setData([...data.map(item => util.convertTemperature(item, util.toCelsius))])
    }

    setIsCelsius(!isCelsius)
  }

  const value = {
    data: [...data],
    isCelsius: isCelsius,
    systemSwitcher: systemSwitcher,
    addHandler: addCard,
    removeHandler: removeCard,
    updateHandler: updateCard
  }

  return (
    <Context.Provider value={value}>
      <div className="wrapper">
        <div className="container">
          <Header />
          <Routes />
        </div>
      </div>
    </Context.Provider>
  )
}

export default App