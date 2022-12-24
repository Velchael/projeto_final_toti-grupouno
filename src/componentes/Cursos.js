import React from 'react';
import { Link, Outlet} from 'react-router-dom';
const Cursos = () => {
    return (
        <div >
            <h1>Cursos Instituto NU</h1>
            <hr />
            <div className="App-headerdos">
            <ol className="oldos_modulo">
             <l1 className="liuno_modulo"><Link to="/componentes/Cursos/Modulouno"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 1 </Link></l1>
             <l1 className="liuno_modulo"><Link to="/componentes/Cursos/Modulodos"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 2 </Link></l1>
             <l1 className="liuno_modulo"><Link to="/componentes/Cursos/Modulotres"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 3 </Link></l1>
             <l1 className="liuno_modulo"><Link to="/componentes/Cursos/Moduloquatro"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 4</Link></l1>
             </ol>
            </div>
            <hr/>
            <Outlet />
        </div>
    )
}

export default Cursos;