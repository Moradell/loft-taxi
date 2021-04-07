import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { HeaderWithAuth } from './Header';


export class Map extends Component {
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
          <div data-testid='map' className='map' ref={this.mapContainer} />
        </div>
      </>
    )
  }
}