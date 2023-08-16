import React, { useEffect, useRef, useState } from 'react'
import { data } from '../data/datos.js';
import uno from "../public/Bogotá,_Nocturna.jpg"
import logo from "../public/logo.jpeg"
export const Carrucel = () => {
    return(
      <div className='sep_' id='carrucel'>
        <div>
          <div class="triangle-right"></div>
          <div class="triangle-left"></div>
          <div className='logo'>
            <div className="centrar">
              <div className='caveza'>
              <h3>
                MRA
              </h3>
              <p>Mortigo Rosales y Alfonso</p>
              <div className='linea'></div>
              </div>
              <p>
                Abogados y asociados.
              </p>
              </div>
            </div>
        </div>
        <div className='baner'>
          <img src={uno} width={"100%"} height={"700px"}>
          </img>
          <h3>
            Asesoria legal
          </h3>
          <p>
            Al alcance de todos 
          </p>
        </div>
      </div>
    )
}

export default Carrucel