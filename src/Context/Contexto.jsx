import { createContext, useContext, useState } from "react";
import {
  CondutoresHabilitados,
  CondutoresInhabilitados,
} from "../Data/DatosConductor";

export const ServiceContext = createContext();

export const useConductores = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    new Error("error en el context ");
  }
  return context;
};

export const ServiceContextProvider = ({ children }) => {
  const [datosConductor, setDatosConductor] = useState([]);
  const [loadingconductor, setloadingconductor] = useState(false);
  const [loading, setloading] = useState(false);
  const [clienteNombre, setclienteNombre] = useState("");

  const [datosConductorInhabilitado, setDatosConductorInhabilitado] = useState(
    []
  );

  const loadDatosConductorHabilitados = async () => {
    const response = await CondutoresHabilitados();
    setDatosConductor(response);
    setloadingconductor(true);
  };
  const loadDatosConductorInhabilitados = async () => {
    const response = await CondutoresInhabilitados();
    setDatosConductorInhabilitado(response);
    setloading(true);
  };

  return (
    <ServiceContext.Provider
      value={{
        loadDatosConductorHabilitados,
        datosConductor,
        loadDatosConductorInhabilitados,
        datosConductorInhabilitado,
        loadingconductor,
        loading,
        clienteNombre, 
        setclienteNombre
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
