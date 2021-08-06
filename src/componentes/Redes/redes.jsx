import React, { useContext } from "react"
import "./redes.css"
import { AppContext } from "../../AppContext/AppContext"

export default function Redes () {
    const {dark} = useContext(AppContext)

    return (
        <div className="contenedor-redes-sociales">
            <div>
                <h3 className={`titulo-contacto ${dark ? "dark" : ""}`}>Contacto</h3>
            </div>
            <div className="contenedores-iconos">
           <a href="https://github.com/Nicole-Soares">  <i class="nes-icon github is-large"></i> </a>
             <a href="nicolesoares918@gmail.com"> <i class="nes-icon gmail is-large"></i> </a>
             <a href="https://www.linkedin.com/in/nicole-soares-6a23a7201/"> <i class="nes-icon linkedin is-large"></i> </a>
            </div>
              
        </div>
    )
}