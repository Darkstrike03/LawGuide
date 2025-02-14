import React from 'react';
import './CarouselCards.css';

const CarouselCards = () => {
  return (
    <div className="container mt-5">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  {/*<img 
                    src="https://via.placeholder.com/300x200" 
                    className="card-img-top" 
                    alt="Card 1" 
                  />*/}
                  <div className="card-body">
                    <h5 className="card-title">Card Title 1</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  {/*<img 
                    src="https://via.placeholder.com/300x200" 
                    className="card-img-top" 
                    alt="Card 2" 
                  />*/}
                  <div className="card-body">
                    <h5 className="card-title">Card Title 2</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  {/*<img 
                    src="https://via.placeholder.com/300x200" 
                    className="card-img-top" 
                    alt="Card 3" 
                  />*/}
                  <div className="card-body">
                    <h5 className="card-title">Card Title 3</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <img 
                    src="https://via.placeholder.com/300x200" 
                    className="card-img-top" 
                    alt="Card 4" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card Title 4</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <img 
                    src="https://via.placeholder.com/300x200" 
                    className="card-img-top" 
                    alt="Card 5" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card Title 5</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <img 
                    src="https://via.placeholder.com/300x200" 
                    className="card-img-top" 
                    alt="Card 6" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card Title 6</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselCards;
