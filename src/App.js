import './App.css';

import React, { useContext } from "react";
import Header from "./componentes/Header/header"
import Proyectos from './componentes/Listado-proyectos/proyectos';
import Redes from "./componentes/Redes/redes"
import { AppContext } from './AppContext/AppContext';
import "nes.css/css/nes.min.css";


function App() {

  const {dark} = useContext(AppContext)

  return (
    <div className={`App ${dark ? "dark" : "light"}`}>
      <div className={`fondo-viewport ${dark ? "dark" : ""}`}>
     <Header />
     <Proyectos />
     <Redes />
     </div>
    </div>
  );
}

export default App;
