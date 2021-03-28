import React from 'react';
import { Input } from './Input';
import './../stylesheets/login.css';
import './../stylesheets/button.css';

export const Registration = ({ navigate, checkLogOrOut }) => {
  return (
    <div className="login">
      <div className="login__title">Регистрация</div>
      <form className='login__form'>
        <Input name='email' type='email' label='Email' placeholder='mail@mail.ru' />
        <Input name='name' type='text' label='Введите ваше имя' placeholder='Иван Иванов' />
        <Input name='password' type='password' label='Пароль' placeholder='********' />
      </form>
      <button className="button button--login" onClick={() => navigate('map')}>
        Зарегестрироваться
        </button>
      <div className="login__new-user">
        <span>Уже зарегестрированны? </span>
        <a href="#" className="login__registration" onClick={() => checkLogOrOut('login')}>Войти</a>
      </div>
    </div>
  )
}