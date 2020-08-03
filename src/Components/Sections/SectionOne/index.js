import React from 'react';
import ImagemGarra from '../../../assets/comboogarra.png';
import IconeFoguete from '../../../assets/iconefoguete.svg';
import PizzaSecOne from '../../../assets/pizzaogarra.png';
import VideoFundo from '../../../assets/nav-bg.mp4'
import './style.css';

const SectionOne = () => (
    <div className="container-sec1 row">
        <div className="d-none d-md-block col-md-5">
            <img className="img-sec1" src={ImagemGarra} width="100%"/>
        </div>

        <div className="col-12 col-md-7">
            <h1 className="pt-5 mt-5">
            <img className="icone-sec1" src={IconeFoguete}/>
                Pizzas especiais</h1>

                <h1>"O Garra"</h1>
                <img src={PizzaSecOne} width="70%"/>
                <h4>Queijo das galáxias, tomates de Saturno, rúcula da Terra mesmo e <br/>orégano especial - 8 pedaços</h4>
                <p>Borda recheada com cheddar!</p>
                <h1>R$ 59,90</h1>
                <button className="btn-eu-quero">Eu quero!</button>
        </div>
        <video className="videoSec1" src={VideoFundo} autoPlay="autoplay" loop="loop"/>
        <video className="videoSec1-fixed" src={VideoFundo} autoPlay="autoplay" loop="loop"/>
    </div>
);

export default SectionOne;