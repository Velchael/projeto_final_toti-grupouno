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
import App from './App';
import { NoMatch } from './componentes/NoMatch';


function Apprutas() {
  return(
    <Router>
      <div>
        
           <header className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            
            <p className="App-header">Instituto NU </p>
            <nav>
             <Link to ="/App"className="atres" style={{ textDecoration: 'none' }}>Inscrição </Link>
             <Link to="/componentes/Cursos"className="atres"style={{ textDecoration: 'none' }}> Cursos </Link>
             <Link to="/componentes/SobreNos"className="atres"style={{ textDecoration: 'none' }}> Sobre nós </Link>
			       <Link to="/componentes/Faleconnosco"className="atres"style={{ textDecoration: 'none' }}> Fale Conosco </Link>
		        </nav>
            
           </header>
      </div>
    
      <Routes>
        <Route path="/App"element={<App />}/>
        <Route path="/componentes/Cursos"element={<Cursos />}>
            <Route path="modulouno" element={<Modulouno />} />
            <Route path="modulodos" element={<Modulodos />} />
            <Route path="modulotres" element={<Modulotres />} />
            <Route path="moduloquatro" element={<Moduloquatro />} />
          </Route>
        <Route path="/componentes/SobreNos"element={<SobreNos />}/>
        <Route path="/componentes/Faleconnosco"element={<Faleconnosco />}/>
        <Route path="*"element={<NoMatch />}/>
      </Routes>
    </Router>
    );
  }

export default Apprutas;
