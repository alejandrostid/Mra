import React from "react";
import Swiper from 'swiper';
import imagen from "../public/IMG_0257.jpg";
import video from "../public/abogados.mp4"
import { Player } from 'video-react'

const mySwiper = new Swiper('.slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  });

class List extends React.Component{
    informacion = [
        {
        "categoria":" Derecho Labotal", 
        "informacion":"Contamos con servicios de capacitación y actualizaciones, a través de conferencias, cursos y talleres prácticos, los cuales están diseñados especialmente para las diferentes necesidades de su empresa en temas laborales, de seguridad social y recursos humanos.",
        "prinsipal":"ul",
        "elemnto":"li",
        "il_0":"Atención a consultas en todas las áreas relacionadas con derecho laboral.",
        "il_1":"Elaboración de contratos laborales según necesidades específicas de la empresa.",
        "il_2":"Adecuación del manejo de las empresas con las normas laborales y de seguridad social.",
        "il_3": "Representación de empresas ante el Ministerio de la Protección Social.",
        "il_4": "Representación y gestiones ante las E.P.S, Fondos y Cajas Pensionales, ICBF, Sena y demás entidades del gobierno en materias relacionadas",
        "il_5":"Asesoría en el manejo de las relaciones de las empresas con Empresas de Servicio Temporal, outsourcing, Cooperativas de Trabajo Asociado, etc."
        }
    ]
    render(){
        return(
            <>
                <div className="leabel">
                    <h3>
                        Texto de ejemplo
                    </h3>
                    <p>
                    Texto de ejemplo Texto de ejemplo Texto de ejemplo Texto de ejemplo
                    </p>
                    <div className='linea'></div>
                    <div className="texto">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="slaider">
                    <div className="card" style={{ width: "auto" }}>
                        <img className="card-img-top" src={imagen}  width={"100%"} height={"200px"} alt="Card image cap"/>
                            <div class="triangle-down"></div>
                            <div class="triangle-up"></div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "auto" }}>
                    <img className="card-img-top" src={imagen}  width={"100%"} height={"200px"} alt="Card image cap" />
                        <div class="triangle-down"></div>
                        <div class="triangle-up"></div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "auto"}}>
                    <img className="card-img-top" src={imagen}  width={"100%"} height={"200px"} alt="Card image cap" />
                        <div class="triangle-down"></div>
                        <div class="triangle-up"></div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <link
                    rel="stylesheet"
                    href="https://video-react.github.io/assets/video-react.css"
                    width={"100%"} 
                    height={"800px"}
                    padding-top= {"4%"}
                />
                <Player autoPlay muted loop
                    src={video}
                >
                <div className="background" id="quienes-somos">
                    <div className="deslisante">
                        {
                            this.informacion.map((e)=>{
                                return(
                                    <>
                                        <div className="card w-100">
                                            <div className="card-body">
                                                <h5 className="card-title">{e.categoria}</h5>
                                                <p className="card-text">{e.informacion}</p>
                                                <button type="button" class="btn btn-info btn-circle"><i class="fa fa-check">+</i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card w-100 custom-card">
                                            <div className="card-body">
                                                <ul>
                                                    <li>Atención a consultas en todas las áreas relacionadas con derecho laboral.
                                                    </li>
                                                    <li>Elaboración de contratos laborales según necesidades específicas de la empresa.",
                                                    </li>
                                                    <li>Adecuación del manejo de las empresas con las normas laborales y de seguridad social.",
                                                    </li>
                                                    <li> Representación de empresas ante el Ministerio de la Protección Social.",
                                                    </li>
                                                    <li> "Representación y gestiones ante las E.P.S, Fondos y Cajas Pensionales, ICBF, Sena y demás entidades del gobierno en materias relacionadas",
                                                    </li>
                                                    <li>:"Asesoría en el manejo de las relaciones de las empresas con Empresas de Servicio Temporal, outsourcing, Cooperativas de Trabajo Asociado, etc."
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </>           
                                )
                            })
                        }
                    </div>
                </div>
                </Player>
            </>        
        )
    }
}

export default List