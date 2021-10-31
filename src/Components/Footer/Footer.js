import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer App">
            <hr/>
            <h1>Follow us on</h1>
            <div className="icons">
                <i className="bg-secondary mx-3 p-2 fs-1 fab fa-twitter"></i>  
                <i className="bg-secondary mx-3 p-2 fs-1 fab fa-facebook-f"></i>  
                <i className="bg-secondary mx-3 p-2 fs-1 fab fa-instagram-square"></i>  
                <i className="bg-secondary mx-3 p-2 fs-1 fab fa-whatsapp-square"></i>  
                <i className="bg-secondary mx-3 p-2 fs-1 fab fa-youtube"></i>  
                <i className="bg-secondary mx-3 p-2 fs-1 fas fa-envelope"></i>
            </div>
            <p className="fst-italic mt-4">Copyright &copy; 2021 CodersWorld. All Rights Reserved</p>
        </div>
    );
};

export default Footer;