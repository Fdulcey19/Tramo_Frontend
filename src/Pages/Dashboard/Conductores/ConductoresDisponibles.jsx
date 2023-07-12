import React from 'react'
import Disponibles from '../../../Components/Dashboard/Conductores/Disponibles';
import Servicio from '../../../Components/Dashboard/Conductores/Servicio';

function ConductoresHabilitados() {
  return (
    <>
      <main className="main" id="main">
        <Disponibles/>
        <Servicio />
      </main>
    </>
  )
}

export default ConductoresHabilitados;