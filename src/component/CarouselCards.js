import React from 'react';
import './CarouselCards.css';

const CarouselCards = () => {
  return (
    <div className="container mt-5">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          
          {/* Slide 1 - Basic Legal Rights */}
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

          {/* Slide 2 - Consumer & Property Laws */}
          <div className="carousel-item">
            <div className="row">
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
                      Know how to file complaints and protect yourself from fraud.
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
                      Learn about land ownership, property disputes, and inheritance laws.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <img 
                    src="https://via.placeholder.com/300x200" 
                    className="card-img-top" 
                    alt="Rental Rights" 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Rental Rights</h5>
                    <p className="card-text">
                      Know your rights as a tenant and landlord under rental agreements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 - Women's & Cyber Laws */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <h5 className="card-title"><i className="fas fa-female text-pink"></i> Women's Rights</h5>
                  <p className="card-text">
                    Learn about laws protecting women against harassment, domestic violence, and workplace discrimination.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <h5 className="card-title"><i className="fas fa-user-secret text-blue"></i> Cyber Laws</h5>
                  <p className="card-text">
                    Understand cyber safety, hacking laws, and online fraud protection.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <h5 className="card-title"><i className="fas fa-id-badge text-yellow"></i> Identity Theft</h5>
                  <p className="card-text">
                    Protect yourself from identity theft and know the legal actions available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4 - Labor & Business Laws */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <h5 className="card-title"><i className="fas fa-hard-hat text-brown"></i> Labor Laws</h5>
                  <p className="card-text">
                    Know your workplace rights, minimum wage laws, and labor protections.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <h5 className="card-title"><i className="fas fa-building text-green"></i> Business Laws</h5>
                  <p className="card-text">
                    Learn about business registration, tax policies, and startup laws.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <h5 className="card-title"><i className="fas fa-file-contract text-orange"></i> Contracts & Agreements</h5>
                  <p className="card-text">
                    Understand how legal contracts work and why they’re important.
                  </p>
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
