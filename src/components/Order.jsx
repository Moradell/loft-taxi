import React, { useEffect } from 'react';
import standart from '../assets/standart.png';
import premium from '../assets/premium.png';
import bisiness from '../assets/bisiness.png';
import '../stylesheets/order.css';
import '../stylesheets/button.css';
import { connect } from 'react-redux';
import { getAddressList } from '../actions';

const Order = ({ getAddress, address }) => {
  useEffect(() => {
    getAddress();
  }, [])
  return (
    <div className='map-wrapper'>
      <div className="order">
        <ul className="order__selects">
          <li className="order__selects-item">
            <select name="select-dot-a" id="select" className="select">
              <option selected disabled>Откуда</option>
              {address.list.map(item => (<option value={item}>{item}</option>))}
            </select>
          </li>
          <li className="order__selects-item">
            <select name="select-dot-b" id="select" className="select">
              <option selected disabled>Куда</option>
              <option selected disabled>Откуда</option>
              {address.list.map(item => (<option value={item}>{item}</option>))}
            </select>
          </li>
        </ul>
        <div className="order__tariff">
          <ul className="order__tariff-list">
            <li className="order__tariff-item">
              <div className="order__tariff-text">
                <div className="order__tariff-name">Стандарт</div>
                <div className="order__tariff-price-text">Стоимость</div>
                <div className="order__tariff-price">150 ₽</div>
              </div>
              <div className="order__tariff-car">
                <img src={standart} alt="Стандарт" className="order__tariff-img" />
              </div>
            </li>
            <li className="order__tariff-item">
              <div className="order__tariff-text">
                <div className="order__tariff-name">Премиум</div>
                <div className="order__tariff-price-text">Стоимость</div>
                <div className="order__tariff-price">250 ₽</div>
              </div>
              <div className="order__tariff-car">
                <img src={premium} alt="Стандарт" className="order__tariff-img" />
              </div>
            </li>
            <li className="order__tariff-item">
              <div className="order__tariff-text">
                <div className="order__tariff-name">Бизнес</div>
                <div className="order__tariff-price-text">Стоимость</div>
                <div className="order__tariff-price">300 ₽</div>
              </div>
              <div className="order__tariff-car">
                <img src={bisiness} alt="Стандарт" className="order__tariff-img" />
              </div>
            </li>
          </ul>
        </div>
        <div className="order__button">
          <button className="button">Заказать</button>
        </div>
      </div>
    </div>
  )
}

export const ConnectOrder = connect(
  state => ({ address: state.address }),
  { getAddress: getAddressList }
)(Order);