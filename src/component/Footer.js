import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer" style={{ backgroundColor: '#343a40', color: 'white', padding: '10px 0' }}>
                <div className="container-fluid text-center">
                    <p>&copy; {new Date().getFullYear()} LAW GUIDE. All rights reserved.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" style={{ color: 'white' }}>Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="#" style={{ color: 'white' }}>Terms of Service</a></li>
                        <li className="list-inline-item"><a href="#" style={{ color: 'white' }}>Contact Us</a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;