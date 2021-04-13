import React, { Component, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { HeaderWithAuth } from './Header';
import '../stylesheets/order.css';
import '../stylesheets/button.css';
import standart from '../assets/standart.png';
import premium from '../assets/premium.png';
import bisiness from '../assets/bisiness.png';
import { connect } from 'react-redux';
import { getAddressList } from '../actions'

class Map extends Component {
  mapContainer = React.createRef();
  map = null;

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW9yYWRlbGwiLCJhIjoiY2ttcTE4b2FvMW1tdzJ3cno2Z2F0bWtzYSJ9.YlxnPWIYX1biENQ7IjiEug';

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [37.6156, 55.7522],
      zoom: 9,
    });
  }


  render() {
    return (
      <>
        <HeaderWithAuth />
        <div className='map-wrapper'>
          <div className="order">
            <ul className="order__selects">
              <li className="order__selects-item">
                <select name="select-dot-a" id="select" className="select">
                  <option selected disabled>Откуда</option>
                  <option value="Метрополис">Пр-кт им.Королева</option>
                  <option value="Метрополис">Пулково</option>
                  <option value="Метрополис">Шереметьево</option>
                </select>
              </li>
              <li className="order__selects-item">
                <select name="select-dot-b" id="select" className="select">
                  <option selected disabled>Куда</option>
                  <option value="Метрополис">Пр-кт им.Королева</option>
                  <option value="Метрополис">Пулково</option>
                  <option value="Метрополис">Шереметьево</option>
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
          <div data-testid='map' className='map' ref={this.mapContainer} />
        </div>
      </>
    )
  }
}

export const MapConnect = connect(
  (state) => ({ address: state.address }),
  { getAddress: getAddressList }
)(Map)