import React, { useContext } from "react";
import "./proyectos.css";
import proyecto from "../../imagenes-proyectos/proyecto-1.png";
import proyectoDos from "../../imagenes-proyectos/proyecto-2.png";
import proyectoTres from "../../imagenes-proyectos/proyecto-3.png";
import proyectoCuatro from "../../imagenes-proyectos/proyecto-4.png";
import proyectoCinco from "../../imagenes-proyectos/proyecto-5.png";
import proyectoSeis from "../../imagenes-proyectos/proyecto-6.png";
import proyectoSiete from "../../imagenes-proyectos/proyecto-7.jpg";
import proyectoOcho from "../../imagenes-proyectos/proyecto-8.jpg";
import proyectoNueve from "../../imagenes-proyectos/proyecto-9.jpg";
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
            <p class="descripcion-proyecto">Clon de una pagina web estatica</p>
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
            <p class="descripcion-proyecto">Clon de una pagina web de gifs</p>
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
        <div className="proyecto">
          <img
            src={proyectoCinco}
            width="100%"
            height="250px"
            alt="Modelo de pagina"
          />
          <div class="transparente">
            <h3 class="nombre-del-proyecto">Modelo de calculadora</h3>
            <p class="descripcion-proyecto">
              Clon de una calculadora para android creado con react native
            </p>
            <a
              href="https://github.com/Nicole-Soares/calculadora"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Repositorio
            </a>
            <a
              href="https://www.youtube.com/watch?v=4Df6sJB6QFo"
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
            src={proyectoSeis}
            width="100%"
            height="250px"
            alt="Modelo de pagina"
          />
          <div class="transparente">
            <h3 class="nombre-del-proyecto">Modelo de escaner de DNI</h3>
            <p class="descripcion-proyecto">
              Escaner que recibe una lista de personas y marca si tienen
              permitido pasar o no
            </p>
            <a
              href="https://github.com/Nicole-Soares/escanerDNI"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Repositorio
            </a>
            <a
              href="https://www.youtube.com/watch?v=82n41Ktx_BI"
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
            src={proyectoSiete}
            width="100%"
            height="250px"
            alt="Modelo de pagina"
          />
          <div class="transparente">
            <h3 class="nombre-del-proyecto">Mapa sobre Mercados</h3>
            <p class="descripcion-proyecto">
              Mapa sobre los mercados bonaerenses de alrededor
            </p>
            <a
              href="https://github.com/Nicole-Soares/MapaDeMercados"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Repositorio
            </a>
            <a
              href="https://www.youtube.com/watch?v=viqDbiFB_ng"
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
            src={proyectoOcho}
            width="100%"
            height="250px"
            alt="Modelo de pagina"
          />
          <div class="transparente">
            <h3 class="nombre-del-proyecto">Tienda de ropa</h3>
            <p class="descripcion-proyecto">
              E-commerce sobre venta y compra de ropa
            </p>
            <a
              href="https://github.com/Nicole-Soares/feriaRopa"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Repositorio
            </a>
            <a
              href="https://youtu.be/vzMDbNfw62U"
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
            src={proyectoNueve}
            width="100%"
            height="250px"
            alt="Modelo de pagina"
          />
          <div class="transparente">
            <h3 class="nombre-del-proyecto">Portal noticias y podcasts</h3>
            <p class="descripcion-proyecto">App de noticias y podcasts</p>
            <a
              href="https://github.com/Nicole-Soares/NextIdea4U"
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-link"
            >
              Ver Repositorio
            </a>
            <a
              href="https://www.youtube.com/watch?v=8hy3bNMrq1Y"
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
