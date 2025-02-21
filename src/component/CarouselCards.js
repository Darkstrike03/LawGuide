import React from 'react';
import './CarouselCards.css';

const CarouselCards = () => {
  return (
    <div className="container mt-5">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-balance-scale text-primary"></i> Know Your Rights
                    </h5>
                    <p className="card-text">
                      Learn about fundamental rights and how the Indian Constitution protects you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-gavel text-danger"></i> Criminal & Civil Laws
                    </h5>
                    <p className="card-text">
                      Understand the difference between civil and criminal cases and how they work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-user-shield text-success"></i> Legal Assistance
                    </h5>
                    <p className="card-text">
                      Get access to free legal help and expert advice to handle your case.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <img 
                    src="https://via.placeholder.com/300x200" 
                    className="card-img-top" 
                    alt="Legal Advice" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Legal Awareness</h5>
                    <p className="card-text">
                      Stay informed about important laws that affect your daily life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <img 
                    src="https://via.placeholder.com/300x200" 
                    className="card-img-top" 
                    alt="Consumer Rights" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Consumer Protection</h5>
                    <p className="card-text">
                      Understand your rights as a consumer and how to file complaints.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <img 
                    src="https://via.placeholder.com/300x200" 
                    className="card-img-top" 
                    alt="Property Laws" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Property Laws</h5>
                    <p className="card-text">
                      Learn about property disputes, land laws, and ownership rights.
                    </p>
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
