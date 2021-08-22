import React, { useContext } from 'react';
import './Header.scss';
import { Context } from '../../context'

import { Link } from 'react-router-dom'

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
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M49.5 15C54.15 15 58.5 16.41 62.07 18.84L58.59 27.51C56.1073 25.2416 52.8629 23.9888 49.5 24C42 24 36 30 36 37.5C36 45 42 51 49.5 51C52.59 51 55.41 49.98 57.69 48.24L61.11 56.79C57.6055 58.8995 53.5904 60.0096 49.5 60C43.5326 60 37.8097 57.6295 33.5901 53.4099C29.3705 49.1903 27 43.4674 27 37.5C27 31.5326 29.3705 25.8097 33.5901 21.5901C37.8097 17.3705 43.5326 15 49.5 15V15ZM18 9C20.3869 9 22.6761 9.94821 24.364 11.636C26.0518 13.3239 27 15.6131 27 18C27 20.3869 26.0518 22.6761 24.364 24.364C22.6761 26.0518 20.3869 27 18 27C15.6131 27 13.3239 26.0518 11.636 24.364C9.94821 22.6761 9 20.3869 9 18C9 15.6131 9.94821 13.3239 11.636 11.636C13.3239 9.94821 15.6131 9 18 9V9ZM18 15C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18C15 18.7957 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7957 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15Z" fill="white" />
                        </svg>

                    </button>
                    <span></span>
                    <button
                        className={!isCelsius ? `header__row_settings-option active` : `header__row_settings-option`}
                        onClick={systemSwitcher}
                    >
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33 60V15H60V24H42V33H57V42H42V60H33ZM18 9C20.3869 9 22.6761 9.94821 24.364 11.636C26.0518 13.3239 27 15.6131 27 18C27 20.3869 26.0518 22.6761 24.364 24.364C22.6761 26.0518 20.3869 27 18 27C15.6131 27 13.3239 26.0518 11.636 24.364C9.94821 22.6761 9 20.3869 9 18C9 15.6131 9.94821 13.3239 11.636 11.636C13.3239 9.94821 15.6131 9 18 9V9ZM18 15C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header