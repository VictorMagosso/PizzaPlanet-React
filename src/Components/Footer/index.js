import React from 'react';
import Logo from '../../assets/logo.png';
import './style.css';

const Footer = () => (
    <div className="footer-container">
            <img src={Logo} width="17%" className="d-inline"/>
            <h5 className="d-inline">Baseado na pizzaria fictícia criada no desenho Toy Story</h5>
        <h5>Criado com React<i className="fab fa-react ml-3"></i></h5>
    </div>
);

export default Footer;