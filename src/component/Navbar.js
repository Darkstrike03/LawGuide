import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/community">Community</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/library">Library</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/notice">Notice</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Links
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="https://mail.google.com/mail/?view=cm&fs=1&to=etherealarchives017@gmail.com&su=Contact+Us&body=Hello%2C+I+have+a+question+about+your+website." 
       target="_blank" >Contact Us</Link></li>
                                    <li><a className="dropdown-item" to="/terms-of-service">Terms of service</a></li>
                                    <li><a className="dropdown-item" to="/privacy-policy">Privacy Policy</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">law.A.I</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            <button className="btn btn-outline-success" type="more" style={{ marginLeft: '10px' }}>
                            <svg fill="#000000" height="24px" width="24px" id="Layer_1" data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path className="cls-1" d="M4.732,7.95335,6.90908,2h3.63639L8.36364,7.01316h2.90911L4.72725,14,6.93656,7.95135Z" />
                            </svg>
                        </button>
                        </form>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
