import React from 'react';
import ImagemBuzz from '../../../assets/buzz.png'
import IconeFoguete from '../../../assets/iconefoguete.svg';
import PizzaSecTwo from '../../../assets/pizzabuzz.png'
import VideoFundo from '../../../assets/nav-bg.mp4'
import './style.css';

const SectionTwo = () => (
    <div className="container-sec2 row">
        

        <div className="col-12 col-md-6 ml-0 ml-md-4">
            <h1 className="pt-5 mt-5">
            <img className="icone-sec2" src={IconeFoguete}/>
                Pizzas especiais</h1>

                <h1>"Ao infinito e além"</h1>
                <img src={PizzaSecTwo} width="70%"/>
                <h4>2 queijos (mussarela e suiço) com catupiry, azeitonas em rodelas e pepperoni do Zurg - 12 pedaços</h4>
                <p className="d-inline">Borda recheada com cheddar!</p>
                <h1>R$ 79,90</h1>
                <button className="btn-eu-quero">Eu quero!</button>
        </div>
        <div className="d-none d-md-block col-md-5">
            <img className="img-sec2" src={ImagemBuzz} width="100%"/>
        </div>
        <video className="videoSec2" src={VideoFundo} autoPlay="autoplay" loop="loop"/>
    </div>
);

export default SectionTwo;