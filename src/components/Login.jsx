import React from 'react';
import { Input } from './Input';
import './../stylesheets/login.css';
import './../stylesheets/button.css';
import '../stylesheets/input.css'
import { connect } from 'react-redux';
import { authenticate } from '../actions';
import { Link, Route } from 'react-router-dom'

class Login extends React.Component {
  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  };
  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <button className="button">
            <Link to="/map">Перейти к карте</Link>
          </button>
        ) : (
          <Route>
            <div className="login">
              <div className="login__title">Войти</div>
              <form className='login__form' onSubmit={this.authenticate}>
                <Input name='email' type='email' label='Email' placeholder='mail@mail.ru' />
                <Input name='password' type='password' label='Пароль' placeholder='********' />
                <a href="#" className="login__forgot-password">Забыли пароль?</a>
                <button type="submit" className="button button--login">
                  Войти
                </button>
              </form>
              <div className="login__new-user">
                <span>Новый пользователь? </span>
                <span className="login__registration"><Link to="/registration">Регистрация</Link></span>
              </div>
            </div>
          </Route>
        )}
      </>
    )
  }
}

export const LoginWithAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(Login)