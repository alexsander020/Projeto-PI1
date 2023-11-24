import "../../../assets/images/imagenhexagon";
import '../hexagon/Configuracao.css';
import React from "react"
import {PatiPiva, Jui, PatoRei, CSA, PalácioT, ConfeitariaC, LaCura, Ofner, GUMILab, Dengo, MicaChocolates, HotelEmiliano, TartuferiaSanPaolo, Eggy, HotelGrandHyatt, Almanara, GrupoRaízes } from "../../../assets/images/imagenhexagon";


function Hexagon(){
    return(
        <section className="containerPoligon">
            <div className="posicao">

                <div className="hex poligon pos0">
                    <img className="img-sm" alt="PatiPiva logo" src={ PatiPiva } />
                    <p className="P">PatiPiva</p>
                </div>

                <div className="hex poligon pos1">
                    <img className="img-xl" alt="Jui logo" src={ Jui }/>
                    <p className="P">Jui</p>
                </div>

                <div className="hex poligon pos2">
                    <img className="img-xp" alt="PatoRei  logo" src={ PatoRei }/>
                    <p className="P">PatoRei</p>
                </div>

                <div className="hex poligon pos3">
                    <img className="img-xc" alt="CSA logo" src={ CSA }/>
                    <p className="P">CSA</p>
                </div>

                <div className="hex poligon  pos4">
                    <img className="img-xpa" alt="PalácioT logo" src={ PalácioT }/>
                    <p className="P">PalácioT</p>
                </div>

                <div className="hex poligon pos5">
                    <img className="img-xco" alt="ConfeitariaC logo" src={ LaCura }/>
                    <p className="P">LaCura</p>
                </div>

                <div className="hex poligon pos6">
                    <img className="img-xla" alt="LaCura logo" src={ LaCura }/>
                    <p className="P">LaCura</p>
                </div>

                <div className="hex poligon pos7">
                    <img className="img-Of" alt="LaCura logo" src={ Ofner }/>
                    <p className="P">Ofner</p>
                </div>

                <div className="hex poligon pos8">
                    <img className="img-gu" alt="LaCura logo" src={ GUMILab }/>
                    <p className="P">GUMILab</p>
                </div>

                <div className="hex poligon pos9">
                    <img className="img-de" alt="LaCura logo" src={ Dengo }/>
                    <p className="P">Dengo</p>
                </div>

                <div className="hex poligon pos10">
                    <img className="img-m" alt="LaCura logo" src={ MicaChocolates }/>
                    <p className="P">MicaChocolates</p>
                </div>

                <div className="hex poligon pos11">
                    <img className="img-h" alt="LaCura logo" src={ HotelEmiliano }/>
                    <p className="P">HotelEmiliano</p>
                </div>

                <div className="hex poligon pos12">
                    <img className="img-tar" alt="LaCura logo" src={ TartuferiaSanPaolo }/>
                    <p className="P">TartuferiaSanPaolo</p>
                </div>

                <div className="hex poligon pos13">
                    <img className="img-eg" alt="LaCura logo" src={ Eggy }/>
                    <p className="P">Eggy</p>
                </div>
                
                <div className="hex poligon pos14">
                    <img className="img-hote" alt="LaCura logo" src={ HotelGrandHyatt }/>
                    <p className="P">HotelGrandHyatt</p>
                </div>

                <div className="hex poligon pos15">
                    <img className="img-al" alt="LaCura logo" src={ Almanara }/>
                    <p className="P">Almanara</p>
                </div>

                <div className="hex poligon pos16">
                    <img className="img-gr" alt="LaCura logo" src={  GrupoRaízes }/>
                    <p className="P">GrupoRaízes</p>
                </div>

            </div>
    </section>
    )
}

export default Hexagon;

