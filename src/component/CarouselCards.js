import React from 'react';
import './CarouselCards.css';
import KnowYourRightsIcon from './assets/icons/justice.svg';
import CriminalCivilLawsIcon from './assets/icons/criminal.svg';
import LegalAssistanceIcon from './assets/icons/rights.svg';
import ConsumerProtectionIcon from './assets/icons/report.svg';
import PropertyLawsIcon from './assets/icons/property.svg';
import RentalRightsIcon from './assets/icons/rent.svg';
import WomensRightsIcon from './assets/icons/women.svg';
import CyberLawsIcon from './assets/icons/cyber.svg';
import IdentityTheftIcon from './assets/icons/identity.svg';
import LaborLawsIcon from './assets/icons/worker.svg';
import BusinessLawsIcon from './assets/icons/stock.svg';
import ContractsAgreementsIcon from './assets/icons/contract.svg';

const CarouselCards = () => {
  return (
    <div className="container mt-5">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <img src={KnowYourRightsIcon} alt="Know Your Rights" className="card-icon" />
                    <h5 className="card-title">Know Your Rights</h5>
                    <p className="card-text">Learn about fundamental rights and how the Indian Constitution protects you.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <img src={CriminalCivilLawsIcon} alt="Know Your Rights" className="card-icon" />
                    <h5 className="card-title">Criminal & Civil Laws</h5>
                    <p className="card-text"> Understand the difference between civil and criminal cases and how they work.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <img src={LegalAssistanceIcon} alt="Legal Assistance" className="card-icon"/>
                    <h5 className="card-title">Legal Assistance</h5>
                    <p className="card-text">Get access to free legal help and expert advice to handle your case.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                  <img src={ConsumerProtectionIcon} alt="Consumer Protection" className="card-icon"/>
                    <h5 className="card-title">Consumer Protection</h5>
                    <p className="card-text">Know how to file complaints and protect yourself from fraud.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                  <img src={PropertyLawsIcon} alt="Property Laws" className="card-icon"/>
                    <h5 className="card-title">Property Laws</h5>
                    <p className="card-text">Learn about land ownership, property disputes, and inheritance laws.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                  <img src={RentalRightsIcon} alt="Rental Rights" className="card-icon"/>
                    <h5 className="card-title">Rental Rights</h5>
                    <p className="card-text">Know your rights as a tenant and landlord under rental agreements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                  <img src={WomensRightsIcon} alt="Women's Rights" className="card-icon"/>
                    <h5 className="card-title">Women's Rights</h5>
                    <p className="card-text">Learn about laws protecting women against harassment, domestic violence, and workplace discrimination.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                  <img src={CyberLawsIcon} alt="Cyber Laws " className="card-icon"/>
                    <h5 className="card-title">Cyber Laws</h5>
                    <p className="card-text">Understand cyber safety, hacking laws, and online fraud protection.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                  <img src={IdentityTheftIcon} alt="Identity Theft" className="card-icon"/>
                    <h5 className="card-title">Identity Theft</h5>
                    <p className="card-text">Protect yourself from identity theft and know the legal actions available.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                  <img src={LaborLawsIcon} alt="Labor Laws" className="card-icon"/>
                    <h5 className="card-title">Labor Laws</h5>
                    <p className="card-text">Learn about business registration, tax policies, and startup laws.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                  <img src={BusinessLawsIcon} alt="Business Laws" className="card-icon"/>
                    <h5 className="card-title">Business Laws</h5>
                    <p className="card-text">Learn about business registration, tax policies, and startup laws.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                  <img src={ContractsAgreementsIcon} alt="Contracts & Agreements" className="card-icon"/>
                    <h5 className="card-title">Contracts & Agreements</h5>
                    <p className="card-text">Understand how legal contracts work and why they’re important.</p>
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
