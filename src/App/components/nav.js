import React from "react" 
import logo from "../public/logo.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-expand-lg navbar-light bg-white text-dark w-100">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="/inicio">
                <img
                src={logo}
                width={30}
                height={30}
                className="d-inline-block align-top"
                alt=""
                loading="lazy"
                />
                MRA Abogados
            </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/inicio">
                        Inicio <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-item nav-link" href="#quienes-somos">
                        Quienes somos?
                    </a>
                    <a className="nav-item nav-link" href="/contactenos">
                        Contactanos
                    </a>
                    <a className="nav-item nav-link" href="/covid19">
                        Covid-19
                    </a>
                </div>
                <div className="redes">
                <a
                    href="https://www.facebook.com/mortigorosalesyleeabogados/"
                    className="btn btn-outline-primary"
                >
                    f
                </a>
                <a href="" className="btn btn-outline-danger">
                    t
                </a>
                </div>
            </div>
        </nav>
    )
}
export default Nav