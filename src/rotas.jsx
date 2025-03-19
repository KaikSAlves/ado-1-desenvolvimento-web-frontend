import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './pages/App';
import Mer from './pages/Mer';
import Criar from './pages/Criar';
import Editar from './pages/Editar';


export default function Rotas(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<App/>} />
                <Route path = "/mer" element = {<Mer/>} />
                <Route path = "/criar" element = {<Criar/>} />
                <Route path = "/editar" element = {<Editar/>} />
            </Routes>
        </BrowserRouter>
    )
}