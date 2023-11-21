import React from "react";
import AboutUs from "./pages/AboutUs"
import { Route, Routes} from 'react-router-dom';
import Supplier from './pages/supplier';



function App() {
  return (
    <Routes>
      <Route path='/' element={<AboutUs />} />  
      <Route path='Supplier' element={<Supplier />} />
      {/* <Route path='DonateHere' element={<DonateHere />} />
      <Route path='Panels' element={<Panels />} /> */}
    </Routes>
   
  )
}

export default App;


/* Sobre nos*/
/* Parcerias*/
/* doe aqui*/
/* paineis*/