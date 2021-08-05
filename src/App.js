import './App.css';

import React from "react";
import Header from "./componentes/Header/header"
import Proyectos from './componentes/Listado-proyectos/proyectos';
import Redes from "./componentes/Redes/redes"
import "nes.css/css/nes.min.css";


function App() {
  return (
    <div className="App">
      <div className="fondo-viewport">
     <Header />
     <Proyectos />
     <Redes />
     </div>
    </div>
  );
}

export default App;
