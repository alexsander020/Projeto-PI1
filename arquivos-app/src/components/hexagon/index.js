import "../../assets/images/imagenhexagon";
import Configuracao from '../hexagon/Configuracao.css';
import React from "react"
import {PatiPiva, Jui, PatoRei, CSA, PalácioT, ConfeitariaC, LaCura, Ofner, GUMILab, Dengo, MicaChocolates, HotelEmiliano, TartuferiaSanPaolo, Eggy, HotelGrandHyatt, Almanara, GrupoRaízes } from "../../assets/images/imagenhexagon";


function Hexagon(){
    return(
    <div className="container">

        <div className="hex poligon pos0">
            <img className="img-sm" alt="PatiPiva logo" src={ PatiPiva } />
        </div>

        <div className="hex poligon pos1">
            <img className="img-xl" alt="Jui logo" src={ Jui }/>
        </div>

        <div className="hex poligon pos2">
            <img className="img-xp" alt="PatoRei  logo" src={ PatoRei }/>
        </div>

        <div className="hex poligon pos3">
            <img className="img-xc" alt="CSA logo" src={ CSA }/>
        </div>

        <div className="hex poligon  pos4">
            <img className="img-xpa" alt="PalácioT logo" src={ PalácioT }/>
        </div>

        <div className="hex poligon pos5">
            <img className="img-xco" alt="ConfeitariaC logo" src={ ConfeitariaC }/>
        </div>

        <div className="hex poligon pos6">
            <img className="img-xla" alt="LaCura logo" src={ LaCura }/>
        </div>

        <div className="hex poligon pos7">
            <img className="img-Of" alt="LaCura logo" src={ Ofner }/>
        </div>

        <div className="hex poligon pos8">
            <img className="img-gu" alt="LaCura logo" src={ GUMILab }/>
        </div>

        <div className="hex poligon pos9">
            <img className="img-de" alt="LaCura logo" src={ Dengo }/>
        </div>

        <div className="hex poligon pos10">
            <img className="img-m" alt="LaCura logo" src={ MicaChocolates }/>
        </div>

        <div className="hex poligon pos11">
            <img className="img-h" alt="LaCura logo" src={ HotelEmiliano }/>
        </div>

        <div className="hex poligon pos12">
            <img className="img-tar" alt="LaCura logo" src={ TartuferiaSanPaolo }/>
        </div>

        <div className="hex poligon pos13">
            <img className="img-eg" alt="LaCura logo" src={ Eggy }/>
        </div>
        
        <div className="hex poligon pos14">
            <img className="img-hote" alt="LaCura logo" src={ HotelGrandHyatt }/>
        </div>

        <div className="hex poligon pos15">
            <img className="img-al" alt="LaCura logo" src={ Almanara }/>
        </div>

        <div className="hex poligon pos16">
            <img className="img-gr" alt="LaCura logo" src={  GrupoRaízes }/>
        </div>

    </div>
    )
}

export default Hexagon;

