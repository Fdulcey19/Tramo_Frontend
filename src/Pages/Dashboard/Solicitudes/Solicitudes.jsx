import React from 'react'
import Pendientes from '../../../Components/Dashboard/Solicitudes/Pendientes';
import SolicitudesRechazadas from '../../../Components/Dashboard/Solicitudes/Rechazadas';


function Solicitudes() {

  
  return (
    <>
    <main id="main" className="main">
        <Pendientes />
       <SolicitudesRechazadas />
      </main>
    </>
  )
}

export default Solicitudes