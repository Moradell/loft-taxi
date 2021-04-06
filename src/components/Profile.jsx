import React from 'react';
import { Header } from './Header';
import { Input } from './Input';
import sprite from './../assets/sprite.svg'
import '../stylesheets/profile.css';
import '../stylesheets/button.css';


export const Profile = () => {
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__wrapper">
          <div className="profile__text">
            <div className="profile__title">Профиль</div>
            <div className="profile__description">Введите платежные данные</div>
          </div>
          <div className="profile__content">
            <form className="profile__form" id="card">
              <Input name='name' type='text' label='Имя владельца' placeholder='Иван Иванов' />
              <Input name='card-number' type='text' label='Номер карты' placeholder='0000 0000 0000 0000' />
              <div className="profile__row">
                <Input name='card-date' type='text' label='MM/YY' placeholder='01/05' />
                <Input name='CVC' type='text' label='CVC' placeholder='000' />
              </div>
            </form>
            <div className="profile__precheck">
              <div className="profile__precheck-content">
                <div className="profile__precheck-up-side">
                  <svg className="profile__precheck-logo">
                    <use xlinkHref={`${sprite}#logo`}></use>
                  </svg>
                  <div className="profile__precheck-date">01/02</div>
                </div>
                <div className="profile__precheck-card-number">5545 2300 3432 4521</div>
                <div className="profile__precheck-bottom-side">
                  <svg className="profile__precheck-chip">
                    <use xlinkHref={`${sprite}#chip`}></use>
                  </svg>
                  <svg className="profile__precheck-master-card-logo">
                    <use xlinkHref={`${sprite}#master-card`}></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="profile__button">
            <button type="submit" className="button" form="card">Сохранить</button>
          </div>
        </div>
      </div>
    </>
  )
}