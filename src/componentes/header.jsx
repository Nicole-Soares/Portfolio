import React from "react";
import "./header.css";
import gatito from "../imagenes/gatito.jpg";

export default function Header() {
  return (
    <div className="contenedor-header">
      <div className="contenedor-nombre-boton">
        <h3 className="titulo">Nicole Soares</h3>
        <button type="button" class="nes-btn">Modo Dark</button>
      </div>
      <div className="contenedor-imagen-datos">
        <div className="contenedor-imagen">
          <img className="imagen" src={gatito} alt="imagen-personal" width="80%" height="400px"></img>
        </div>
        <div className="contendor-datos">
          <h3 className="titulo-datos">Caracteristicas del personaje:</h3>
          <div className="datos">
          <ul class="nes-list is-disc">
            <li>Player: Nicole</li>
            <li>Raza: Humana</li>
            <li>Nivel: 23</li>
            <li>Clase: Frontend Developer</li>
            <li>Experiencia: Jr</li>
            <li>Creacion: 20/06/1998</li>
          </ul>
          </div>
          <div className="boton-cv">
            <i class="snes-jp-logo"></i>
            <a className="nes-btn"href="#">Mirar CV</a>
            <i class="snes-jp-logo"></i>
          </div>
        </div>
       
      </div>
      <div>
         <div className="contenedor-tecnologias">
           <div>
          <h3 className="tecnologias">Tecnologias</h3>
          </div>
          <div className="iconos">
          <div className="icono-espada">HTML</div>
          </div>
         </div>
        </div>
    </div>
  );
}
