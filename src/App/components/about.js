import React from "react";
import video from "../public/abogados.mp4"
import { Player } from 'video-react'

const About =()=>{
    return(
        <>
        <link
            rel="stylesheet"
            href="https://video-react.github.io/assets/video-react.css"
            width={"100%"} 
            height={"800px"}
            padding-top= {"4%"}
            />
            <Player autoPlay muted loop
            src={video}
            />
        <div className="background" id="quienes-somos">
            
            <header>
                    <h2>
                            Aserca de Nosotros
                    </h2>
                </header>
            <div className="sep">
                
                <article>
                    <p>
                    Somos una firma de abogados litigantes que viene creciendo desde hace más de diez años, a través de la experiencia de sus abogados y fundadores con el aporte profesional que caracteriza a cada uno de sus miembros. 
                    </p>
                    <p>
                    Desde las diferentes áreas del derecho, nos destacamos por el compromiso la responsabilidad con nuestros clientes, quienes cuentan con un apoyo permanente de nuestra firma y la garantía del equipo asesor.
                    </p>
                    <p>
                    Durante estos diez años hemos trabajado de la mano del ciudadano de a pie, haciendo respetar sus derechos y defendiéndolos de forma exitosa en los diferentes escenarios judiciales y administrativos que se presentan en áreas como el derecho civil, comercial, laboral y de familia acompañándolos en los trámites correspondientes, por lo que ustedes podrán tener la tranquilidad y respaldo de nuestros asesores. 
                    </p>
                </article>
                <div>
                    <div className="cubit">

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About