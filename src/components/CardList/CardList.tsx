import React, { useContext } from 'react'
import './CardList.scss'
import { Link } from 'react-router-dom'
import { Context } from '../../context'

import CardItem from './CardItem'

const CardList: React.FC = () => {

    const { data, removeHandler } = useContext(Context)

    if (!data.length) return null

    return (
        <div className="card-list">
            {data.map(card => <CardItem
                key={card.id}
                info={card}
                removeHandler={removeHandler}
            />)}
            <Link to="/create">
                <div className="card new"></div>
            </Link>
        </div>
    )
}

export default CardList