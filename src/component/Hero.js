import React from 'react';
import hero from '../heroine1.png';
import hero1 from '../heroine2.png';
import hero2 from '../heroine3.png';

class Hero extends React.Component {
    render() {
        return (
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={hero} style={{ width: '800px', height: '400px' }} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={hero1} style={{ width: '800px', height: '400px' }} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={hero2} style={{ width: '800px', height: '400px' }} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        );
    }
}

export default Hero;