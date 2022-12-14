 /*import React, { Component } from "react";*/
import './componentes/Cardanimais.css';
import React from 'react';
/*import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';

import Cursos from './componentes/Cursos';*/

import './Apprutas.css';
import logo from './logo.svg';

function Apprutas() {
  return(
    <div className='centralizar'>
    <ul>
       <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <p>Instituto Nu </p>                
        <ol className="lidos">
         <li className="liuno" ><a className="atres"href="#top">Cursos </a></li>
         <li className="liuno" ><a className="atres"href="#top">Sobre nós</a></li>
         <li className="liuno"><a className="atres"href="#top">Fale Conosco</a></li>
        </ol>   
       </header>
    </ul>
  </div>
    );
  }

export default Apprutas;
