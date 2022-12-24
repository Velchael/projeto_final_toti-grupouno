import React from 'react';
import { Link, Outlet} from 'react-router-dom';
const Cursos = () => {
    return (
        <div >
            <h1>Cursos Instituto NU</h1>
            <hr />
            <div>
             <Link to="/componentes/Cursos/Modulouno">Modulouno </Link>
             <Link to="/componentes/Cursos/Modulodos">Modulodos </Link>
             <Link to="/componentes/Cursos/Modulotres">Modulotres </Link>
             <Link to="/componentes/Cursos/Moduloquatro">Moduloquatro</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Cursos;