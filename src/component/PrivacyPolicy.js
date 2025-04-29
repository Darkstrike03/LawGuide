import React from 'react';
import './Policy.css';

const PrivacyPolicy = () => {
    return (
        <div className="policy-container">
            <h1>Privacy Policy</h1>
            <p>
                At Ethereal Archives, we are committed to protecting your privacy. This Privacy Policy explains how we
                collect, use, and safeguard your personal information when you use our platform.
            </p>
            <h2>Information We Collect</h2>
            <ul>
                <li>Personal information such as your name, email address, and account details.</li>
                <li>Browsing data, including pages visited and time spent on the platform.</li>
                <li>Technical data such as IP address, browser type, and device information.</li>
            </ul>
            <h2>How We Use Your Information</h2>
            <p>
                We use your information to:
                <ul>
                    <li>Provide and improve our services.</li>
                    <li>Personalize your experience on the platform.</li>
                    <li>Communicate with you about updates, promotions, and support.</li>
                </ul>
            </p>
            <h2>Data Security</h2>
            <p>
                We implement industry-standard security measures to protect your data. However, no system is completely
                secure, and we cannot guarantee absolute security.
            </p>
            <h2>Your Rights</h2>
            <p>
                You have the right to access, update, or delete your personal information. To exercise these rights,
                please contact us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=etherealarchives017@gmail.com&su=Contact+Us&body=Hello%2C+I+have+a+question+about+your+website." 
       target="_blank">contact@etherealarchives.com</a>.
            </p>
        </div>
    );
};

export default PrivacyPolicy;