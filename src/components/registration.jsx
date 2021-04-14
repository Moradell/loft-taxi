import React from 'react';
import { Input } from './Input';
import './../stylesheets/login.css';
import './../stylesheets/button.css';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { registrationAction } from '../actions';
import { initialState } from '../reducers/auth';

const Registration = ({ navigate, registrationAction, status, isLoggedIn }) => {
  const history = useHistory();

  function registration(event) {
    event.preventDefault();
    const { email, password, name, surname } = event.target;
    registrationAction(email.value, password.value, name.value, surname.value);
    initialState.isLoggedIn = true;
    history.push('/map');
  }
  return (
    <div className="login">
      <div className="login__title">Регистрация</div>
      <form className='login__form' onSubmit={registration}>
        <Input name='email' type='email' label='Email' placeholder='mail@mail.ru' />
        <Input name='name' type='text' label='Введите ваше имя' placeholder='Иван' />
        <Input name='surname' type='text' label='Введите вашу фамилию' placeholder='Иванов' />
        <Input name='password' type='password' label='Пароль' placeholder='********' />
        <button type='submit' className="button button--login">
          Зарегестрироваться
        </button>
      </form>
      <div className="login__new-user">
        <span>Уже зарегестрированны? </span>
        <span className="login__registration"><Link to="/">Войти</Link></span>
      </div>
    </div>
  )
}

export const connectRegistration = connect(
  (state) => ({ status: state.registration.status, isLoggedIn: state.auth.isLoggedIn }),
  { registrationAction }
)(Registration);