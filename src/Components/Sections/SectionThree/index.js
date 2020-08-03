import React from 'react';
import VideoWoody from '../../../assets/videowoody.mp4';
import VideoFundo from '../../../assets/nav-bg.mp4';
import ImagemWoody from '../../../assets/woody.png';
import IconeCowboy from '../../../assets/cowboy.svg';
import PizzaSecThree from '../../../assets/pizzawoody.png';

import './style.css';

const SectionThree = () => (

    <div className="container-sec3 row">
        <div className="d-none d-md-block col-md-5">
            <img className="img-sec3 mt-2" src={ImagemWoody} width="100%"/>
        </div>

        <div className="col-12 col-md-7 descricao-woody">
            <h1 className="pt-5 mt-5">
            <img className="icone-sec3" src={IconeCowboy}/>
                Pizzas especiais</h1>

                <h1>"Tem uma cobra na minha bota"</h1>
                <img src={PizzaSecThree} width="70%"/>
                <h4>Pedaços de frango do Xerife, tomate seco, brócolis <br/>e catupiry - 12 pedaços</h4>
                <p>Borda recheada com cheddar!</p>
                <h1>R$ 79,90</h1>
                <button className="btn-eu-quero">Eu quero!</button>
        </div>
        <video className="videoWoody" src={VideoWoody} autoPlay="autoplay" loop="loop"/>
        <video className="videoSec3" src={VideoFundo} autoPlay="autoplay" loop="loop"/>
    </div>
);

export default SectionThree;