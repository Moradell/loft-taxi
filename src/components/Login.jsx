import React from 'react';
import { Input } from './Input';
import './../stylesheets/login.css';
import './../stylesheets/button.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login__title">Войти</div>
        <form className='login__form'>
          <Input name='email' type='email' label='Email' placeholder='mail@mail.ru' />
          <Input name='password' type='password' label='Password' placeholder='********' />
        </form>
        <a href="#" className="login__forgot-password">Забыли пароль?</a>
        <button className="button button--login">Войти</button>
        <div className="login__new-user">
          <span>Новый пользователь?</span>
          <a href="#" className="login__registration">Регистрация</a>
        </div>
      </div>
    )
  }
}

export default Login;