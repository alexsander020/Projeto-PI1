import PagHome from "../pages/home";
import AboutUs from "../pages/aboutus";
import Supplier from '../pages/supplier';
import Pagelogin from "../pages/pagelogin";
import Cadastro from "../pages/cadastro";
import PagDonateHere from "../pages/pagdonatehere";
import Formulariodoacao from "../pages/Formulariodoacao ";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PagHome />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/supplier' element={<Supplier />} />
                <Route path='/login' element={<Pagelogin />} />
                <Route path='/signup' element={<Cadastro />} />
                <Route path='/donatehere' element={<PagDonateHere />} />
                <Route path='/doacao/:Email/:doador' element={<Formulariodoacao />} />
                {/* <Route path='Panels' element={<Panels />} /> */}

                
            </Routes>
        </BrowserRouter>
    );
}

export { AppRoutes };
