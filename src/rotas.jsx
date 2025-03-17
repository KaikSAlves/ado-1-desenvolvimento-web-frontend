import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './pages/App';
import Mer from './pages/Mer';

export default function Rotas(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<App/>} />
                <Route path = "/mer" element = {<Mer/>} />
            </Routes>
        </BrowserRouter>
    )
}