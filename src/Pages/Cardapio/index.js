import React, { useState, Component } from 'react';
import PageDefault from '../../PageDefault';
import IconePizzinha from '../../assets/pizza.svg';
import VideoFundo from '../../assets/nav-bg.mp4';
import api from '../../api';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {Link} from 'react-router-dom';

import './style.css';
toast.configure()
class Cardapio extends Component {
    
    state= {
        pizzas: [],
    }
    async componentDidMount(){
        const res = await api.get('');

        this.setState({pizzas: res.data})
    }
    render(){

       const {pizzas} = this.state

       const toastAdd = () => {
           switch ("qtde"){
               case "0":
                toast.warning('Você não escolheu nenhum item!', {position: toast.POSITION.TOP_CENTER})
                break;
                
                default: 
                toast.success('Item adicionado ao carrinho!', {position: toast.POSITION.TOP_CENTER})
                break;
    }
    }
    return (
    <PageDefault>
        <div className="container-geral-card">
        <ToastContainer> <i className="fab fa-android"></i></ToastContainer> 
        <div className="container-cardapio">
        <h1>Pizzas tradicionais - 8 pedaços
            <img src={IconePizzinha} width="5%"/>
        </h1>
        <h4 className="brotinho-info">*Brotinho por R$ 10,00 a menos do sabor escolhido</h4>

         <div id="produtos-container" className="flex-container">
              {pizzas.map(pizza => (
                  <div key={pizza.id} className="flex-produtos mt-5 row">
                  <div className="col-5 img-produto"><img src={pizza.imagem} width="100%"/>
                      <h4>{pizza.sabor}</h4>
                  </div>
                  <div className="col-7 desc-produto">
                      <p>{pizza.descricao}</p>
                      <h3>{pizza.valor}</h3>
                      <small>* borda recheada + R$ 2,90</small>
                      <input id="qtde" className="qtde-produto" type="number" defaultValue="0" min="0"/>
                      <button className="btn-add" onClick={toastAdd}>Add</button>
                      
                  </div>
                  
              </div>
              ))}  
       
        </div>        
        </div>
        <video className="videofooter-fixed" src={VideoFundo} autoPlay="autoplay" loop="loop"/>
        </div>
    </PageDefault>
)};
    }
export default Cardapio;
