import React from 'react';
import { Input } from './Input';
import './../stylesheets/login.css';
import './../stylesheets/button.css';
import { withAuth } from './authContext';

class Login extends React.Component {
  goToMap = (event) => {
    event.preventDefault();
    this.props.navigate("map");
  };

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };
  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <>
            {this.props.navigate('map')}
          </>
        ) : (
          <>
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
                <a href="#" className="login__registration" onClick={() => this.props.checkLogOrOut('registration')}> Регистрация</a>
              </div>
            </div>
          </>
        )}
      </>
    )
  }
}

export const LoginWithAuth = withAuth(Login)