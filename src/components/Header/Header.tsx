import React, { useContext } from 'react';
import './Header.scss';
import { Context } from '../../context'

import { Link } from 'react-router-dom'

// Images
import celsius from '../../images/temperatureType/mdi_temperature-celsius.svg'
import fahrenheit from '../../images/temperatureType/mdi_temperature-fahrenheit.svg'

const Header: React.FC = () => {

    const { isCelsius, systemSwitcher } = useContext(Context)

    return (
        <div className="header">
            <div className="header__row">
                <Link to="/home">
                    <div className="header__row_logo">Weather app</div>
                </Link>

                <div className="header__row_settings">
                    <button
                        className={isCelsius ? `header__row_settings-option active` : `header__row_settings-option`}
                        onClick={systemSwitcher}
                    >
                        <img src={celsius} alt="celsius" />
                    </button>
                    <span></span>
                    <button
                        className={!isCelsius ? `header__row_settings-option active` : `header__row_settings-option`}
                        onClick={systemSwitcher}
                    >
                        <img src={fahrenheit} alt="fahrenheit" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header