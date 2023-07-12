import { useEffect } from "react";
import Habilitados from "../../../Components/Dashboard/DatosConductor/Habilitados";
import Inhabilitados from "../../../Components/Dashboard/DatosConductor/Inhabilitados";
import { useConductores } from "../../../Context/Contexto";

function DatosConductores() {
  const { loadDatosConductorInhabilitados, loadDatosConductorHabilitados } =
    useConductores();
    
  useEffect(() => {
    loadDatosConductorHabilitados();
    loadDatosConductorInhabilitados();
  }, []);

  return (
    <main className="main" id="main">
      <Habilitados />
      <Inhabilitados />
    </main>
  );
}

export default DatosConductores;
