import react, { useState } from "react";
import Lashes from "../containers/Lashes";
import '../styles/index.css'

const Turns = () => {


  return (
    <div className="size">
      <div className="infoTitle">
        <h2>Turnos y Fechas disponibles</h2>
        <h3>Selecciona el servicio deseado: </h3>
        <section>
          <button >Lashes</button>
          <button >Nails</button>
        </section>
      </div>
      <div>

      </div>
      <div>
        <Lashes />
      </div>
    </div>
  )
}

export default Turns;