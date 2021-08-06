import React, { useContext } from "react"
import "./proyectos.css"
import proyecto from "../../imagenes-proyectos/proyecto-1.png"
import proyectoDos from "../../imagenes-proyectos/proyecto-2.png"
import proyectoTres from "../../imagenes-proyectos/proyecto-3.png"
import { AppContext } from "../../AppContext/AppContext"

export default function Proyectos (){
const {dark} = useContext(AppContext)

    return(
        <div className={`contenedor-proyectos-titulo ${dark ? "dark" : ""}`}>
            <div className="contenedor-titulo">
                <h3 className={`titulo ${dark ? "dark" : ""}`}>Proyectos</h3>
            </div>
            <div className="contenedor-proyectos">
            <div class="proyecto-uno">
                  <img src={proyecto} width="50%" height="250px" alt="Modelo de pagina"/>
                  <div class="transparente">
                      <h3 class="nombre-del-proyecto-uno">Modelo de pagina web</h3>
                      <p class="descripcion-proyecto-uno">Clon de una pagina web estatica</p>
                      <a href="https://github.com/Nicole-Soares/PrimerProyecto" className="proyecto-link">Ver Repositorio</a>
                  </div>
              </div>
              <div class="proyecto-dos">
                  <img src={proyectoDos} width="50%" height="250px" alt="Modelo de pagina"/>
                  <div class="transparente-dos">
                      <h3 class="nombre-del-proyecto-dos">Modelo de pagina web</h3>
                      <p class="descripcion-proyecto-dos">Clon de una pagina web de reserva de hoteles</p>
                      <a href="https://github.com/Nicole-Soares/Pagina-de-hoteles" className="proyecto-link-dos">Ver Repositorio</a>
                  </div>
              </div>
              <div class="proyecto-tres">
                  <img src={proyectoTres} width="50%" height="250px" alt="Modelo de pagina"/>
                  <div class="transparente-tres">
                      <h3 class="nombre-del-proyecto-tres">Modelo de pagina web</h3>
                      <p class="descripcion-proyecto-tres">Clon de una pagina web de gifs</p>
                      <a href="https://github.com/Nicole-Soares/PaginaDeGifs" className="proyecto-link-tres">Ver Repositorio</a>
                  </div>
              </div>
            </div>
        </div>
    )
}