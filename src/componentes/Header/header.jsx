import React, { useContext } from "react";
import "./header.css";
import gatito from "../../imagenes/gatito.jpg";
import { AppContext } from "../../AppContext/AppContext";

export default function Header() {
  const { dark, setDark } = useContext(AppContext);

  const click = () => {
    setDark(!dark);
  };

  return (
    <div className="contenedor-header">
      <div className="contenedor-nombre-boton">
        <h3 className={`titulo-nombre ${dark ? "dark" : ""}`}>Nicole Soares</h3>
        <section className="message-right">
          <div className="nes-balloon from-right">
            <p>Click en el gato !</p>
          </div>
        </section>
        <i class="nes-octocat animate" onClick={click}></i>
      </div>
      <div className="contenedor-imagen-datos">
        <div className="contenedor-imagen">
          <img
            className="imagen"
            src={gatito}
            alt="imagen-personal"
            width="80%"
            height="400px"
          ></img>
        </div>
        <div className="contendor-datos">
          <h3 className={`titulo-datos ${dark ? "dark" : ""}`}>
            Caracteristicas del personaje:
          </h3>
          <div className="datos">
            <ul className={`nes-list is-disc ${dark ? "dark" : ""}`}>
              <li>Player: Nicole</li>
              <li>Raza: Humana</li>
              <li>Nivel: 23</li>
              <li>Clase: Frontend Developer</li>
              <li>Experiencia: Jr</li>
              <li>Creacion: 20/06/1998</li>
            </ul>
          </div>
          <div className="boton-cv">
            <i className="snes-jp-logo"></i>
            <a
              className="nes-btn"
              href="https://www.linkedin.com/in/nicole-soares-6a23a7201/"
            >
              Mirar CV
            </a>
            <i class="snes-jp-logo"></i>
          </div>
        </div>
      </div>

      <div className={`contenedor-tecnologias ${dark ? "dark" : ""}`}>
        <div className="contenedor-titulo-tecnologias">
          <h3 className={`tecnologias ${dark ? "dark" : ""}`}>Tecnologias</h3>
        </div>
        <div className="iconos">
          <div className={`icono-espada ${dark ? "dark" : ""}`}>HTML</div>
          <div className={`icono-escudo ${dark ? "dark" : ""}`}>CSS</div>
          <div className={`icono-armadura ${dark ? "dark" : ""}`}>
            Javascript
          </div>
          <div className={`icono-casco ${dark ? "dark" : ""}`}>React</div>
          <div className={`icono-anillo ${dark ? "dark" : ""}`}>
            React Native
          </div>
          <div className={`icono-pocion ${dark ? "dark" : ""}`}>Python</div>
          <div className={`icono-magia ${dark ? "dark" : ""}`}>GitHub</div>
        </div>
      </div>
    </div>
  );
}
