import React from 'react'
import Logo from '../../assets/logo.png'
import Video from '../../assets/nav-bg.mp4'
import {Link} from 'react-router-dom';
import './style.css';

const Menu = () => (
    <nav>
        <video className="video" src={Video} autoPlay="autoplay" loop="loop"/>
        <img className="logo" src={Logo} width="31%"/>
        <h1 className="tema-nav">Nostalgia em forma de sabor...</h1>
        <ul className="nav menu">
            <li className="nav-item"><Link to="/" className="nav-link">home</Link></li>
            <li className="nav-item"><Link to="/cardapio" className="nav-link">cardápio</Link></li>
            <li className="nav-item"><Link to="/pedir" className="nav-link">pedir</Link></li>
        </ul>
    </nav>
);

export default Menu;

export function VideoFundo () {
    return (
        <video src={Video}/>
    );
}
