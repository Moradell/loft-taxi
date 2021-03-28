import React from 'react';
import { Input } from './Input';
import './../stylesheets/login.css';
import './../stylesheets/button.css';

export const Login = ({ navigate, checkLogOrOut }) => {
  return (
    <div className="login">
      <div className="login__title">Войти</div>
      <form className='login__form'>
        <Input name='email' type='email' label='Email' placeholder='mail@mail.ru' />
        <Input name='password' type='password' label='Пароль' placeholder='********' />
        <a href="#" className="login__forgot-password">Забыли пароль?</a>
      </form>
      <button className="button button--login" onClick={() => navigate('map')}>
        Войти
        </button>
      <div className="login__new-user">
        <span>Новый пользователь? </span>
        <a href="#" className="login__registration" onClick={() => checkLogOrOut('registration')}> Регистрация</a>
      </div>
    </div>
  )
}