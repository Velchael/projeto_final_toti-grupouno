import React from 'react';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';

import Cursos from './componentes/Cursos';
import './Apprutas.css';
import logo from './logo.svg';
import SobreNos from './componentes/SobreNos';
import Faleconnosco from './componentes/Faleconnosco';
import Modulouno from './componentes/Modulouno';
import Modulodos from './componentes/Modulodos';
import Modulotres from './componentes/Modulotres';
import Moduloquatro from './componentes/Moduloquatro';

function Apprutas() {
  return(
    <Router>
      <div>
        <ul>
           <header className="App-header">
            <l1><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></l1>
            <h3 className='separalogo'>Instituto NU </h3>                
            <ol className="oldos">
             <l1 className="liuno"><Link to="/componentes/Cursos"className="atres"style={{ textDecoration: 'none' }}>Cursos </Link></l1>
             <l1 className="liuno"><Link to="/componentes/SobreNos"className="atres"style={{ textDecoration: 'none' }}>Sobre nós </Link></l1>
			       <l1 className="liuno"><Link to="/componentes/Faleconnosco"className="atres"style={{ textDecoration: 'none' }}>Fale Conosco </Link></l1>
		        </ol>   
           </header>
        </ul>
      </div>
    
      <Routes>
        <Route path="/componentes/Cursos"element={<Cursos />}>
            <Route path="modulouno" element={<Modulouno />} />
            <Route path="modulodos" element={<Modulodos />} />
            <Route path="modulotres" element={<Modulotres />} />
            <Route path="moduloquatro" element={<Moduloquatro />} />
          </Route>
        <Route path="/componentes/SobreNos"element={<SobreNos />}/>
        <Route path="/componentes/Faleconnosco"element={<Faleconnosco />}/>
      </Routes>
    </Router>
    );
  }

export default Apprutas;