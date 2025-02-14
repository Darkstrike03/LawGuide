import React from 'react';
import logo from '../logo.png';

class Header extends React.Component{
    render(){
        return (
            <nav className="navbar" style={{ backgroundColor: '#343a40' }}>
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#"style={{ color: 'white' }}>
            <img src={logo} alt="Logo" width={50} height={50} className="d-inline-block align-text-top" />
            <span style={{ fontFamily: 'Pacifico', fontSize: '1.5em' }}>L</span>AW GUIDE
          </a>
        </div>
      </nav>
        );
    }
}

export default Header;