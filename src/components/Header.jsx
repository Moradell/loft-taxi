import React from 'react';
import './../stylesheets/header.css';
import sprite from './../assets/sprite.svg';

export const Header = ({ navigate }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <svg className="header__logo--img">
          <use xlinkHref={`${sprite}#logo`}></use>
        </svg>
        <svg className="header__logo--title">
          <use xlinkHref={`${sprite}#title`}></use>
        </svg>
      </div>
      <ul className="header__menu">
        <li className="header__menu-item active">
          <span onClick={() => { navigate('map') }}>
            Карта
                </span>
        </li>
        <li className="header__menu-item">
          <span onClick={() => { navigate('profile') }}>
            Профиль
                </span>
        </li>
        <li className="header__menu-item">
          <span onClick={() => { navigate('home') }}>
            Выйти
                </span>
        </li>
      </ul>
    </header>
  )
}