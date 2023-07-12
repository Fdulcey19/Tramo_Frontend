import { useNavigate } from "react-router-dom";
import ClienteHabilitados from "../../../Components/Dashboard/DatosCliente/Cliente/ClienteHabilitados";
import ClienteInhabilitados from "../../../Components/Dashboard/DatosCliente/Cliente/ClienteInhabilitados";
import { useEffect, useState } from "react";

import img_usu from '../../../assets/icons/usuario_habilitado.png';
import img_emp from '../../../assets/icons/empresa_habiltado.png';


import {
  loadClienteHabilitados,
  loadClienteInhabilitados,
} from "../../../Data/DatosCliente";


function DatosCliente() {
  const [data, setdata] = useState([]);
  const [ClienteInhabilitado, setInhabilitadoCliente] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const loadClientes = async () => {
      const response = await loadClienteHabilitados();

      setdata(response);
    };
    const ClientesInhabilitado = async () => {
      const response = await loadClienteInhabilitados();

      setInhabilitadoCliente(response);
    };
    ClientesInhabilitado();

    loadClientes();
  }, []);

  return (
    <>
      <main className="main" id="main">
        <div className="d-flex justify-content-center">
          <button
            className="btn bg-green-btn mx-2 d-flex justify-content-center align-items-center botones_cliente"
            type="submit"
            onClick={() => {
              navigate("/dashboard/datoscliente");
            }}
          >
            <img className="me-1" src={img_usu} alt="" style={{width:"20px"}}/>
            Persona Natural
          </button>
          <button
            className="btn bg-blue mx-2 d-flex justify-content-center align-items-center botones_cliente"
            type="submit"
            onClick={() => {
              navigate("/dashboard/datosclientejuridico");
            }}
          >
            <img className="me-1" src={img_emp} alt="" style={{width:"20px"}}/>
            Persona Juridica
          </button>
        </div>

        <ClienteHabilitados data={data} />
        <ClienteInhabilitados ClienteInhabilitado={ClienteInhabilitado} />
      </main>
    </>
  );
}

export default DatosCliente;
