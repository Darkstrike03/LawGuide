import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer" style={{ backgroundColor: '#343a40', color: 'white', padding: '10px 0' }}>
                <div className="container-fluid text-center">
                    <p>&copy; {new Date().getFullYear()} LAW GUIDE. All rights reserved.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="/privacy-policy" style={{ color: 'white' }}>Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="/terms-of-service" style={{ color: 'white' }}>Terms of Service</a></li>
                        <li className="list-inline-item"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=etherealarchives017@gmail.com&su=Contact+Us&body=Hello%2C+I+have+a+question+about+your+website." 
       target="_blank" style={{ color: 'white' }}>Contact Us</a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;
