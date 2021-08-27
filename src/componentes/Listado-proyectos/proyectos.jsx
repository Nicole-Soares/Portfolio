import React, { useContext } from "react";
import "./proyectos.css";
import proyecto from "../../imagenes-proyectos/proyecto-1.png";
import proyectoDos from "../../imagenes-proyectos/proyecto-2.png";
import proyectoTres from "../../imagenes-proyectos/proyecto-3.png";
import proyectoCuatro from "../../imagenes-proyectos/proyecto-4.png"
import { AppContext } from "../../AppContext/AppContext";

export default function Proyectos() {
  const { dark } = useContext(AppContext);

  return (
    <div className={`contenedor-proyectos-titulo ${dark ? "dark" : ""}`}>
      <div className="contenedor-titulo">
        <h3 className={`titulo ${dark ? "dark" : ""}`}>Proyectos</h3>
      </div>
      <div className="contenedor-proyectos">
        <div className="proyecto">
          <img
            src={proyecto}
            width="100%"
            height="250px"
            alt="Modelo de pagina"
          />
          <div class="transparente">
            <h3 class="nombre-del-proyecto">Modelo de pagina web</h3>
            <p class="descripcion-proyecto">
              Clon de una pagina web estatica
            </p>
            <a
              href="https://github.com/Nicole-Soares/PrimerProyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Repositorio
            </a>
            <a
              href="https://nicole-soares.github.io/pagina-estatica/"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Demo
            </a>
          </div>
        </div>
        <div className="proyecto">
          <img
            src={proyectoDos}
            width="100%"
            height="250px"
            alt="Modelo de pagina"
          />
          <div class="transparente">
            <h3 class="nombre-del-proyecto">Modelo de pagina web</h3>
            <p class="descripcion-proyecto">
              Clon de una pagina web de reserva de hoteles
            </p>
            <a
              href="https://github.com/Nicole-Soares/pagina-de-hoteles"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Repositorio
            </a>
            <a
              href="https://nicole-soares.github.io/pagina-de-hoteles/"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Demo
            </a>
          </div>
        </div>
        <div className="proyecto">
          <img
            src={proyectoTres}
            width="100%"
            height="250px"
            alt="Modelo de pagina"
          />
          <div className="transparente">
            <h3 class="nombre-del-proyecto">Modelo de pagina web</h3>
            <p class="descripcion-proyecto">
              Clon de una pagina web de gifs
            </p>
            <a
              href="https://github.com/Nicole-Soares/pagina-de-gifs"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Repositorio
            </a>
            <a
              href="https://nicole-soares.github.io/pagina-de-gifs/"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Demo
            </a>
          </div>
        </div>
        <div className="proyecto">
          <img
            src={proyectoCuatro}
            width="100%"
            height="250px"
            alt="Modelo de pagina"
          />
          <div class="transparente">
            <h3 class="nombre-del-proyecto">Modelo de pagina web</h3>
            <p class="descripcion-proyecto">
              Clon de una pagina web sobre canjes de puntos
            </p>
            <a
              href="https://github.com/Nicole-Soares/tienda-electronica"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Repositorio
            </a>
            <a
              href="https://nicole-soares.github.io/tienda-electronica/"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
