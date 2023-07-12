import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmpresaHabilitados from "../../../Components/Dashboard/DatosCliente/Empresa/EmpresaHabilitados";
import EmpresaInhabilitados from "../../../Components/Dashboard/DatosCliente/Empresa/EmpresaInhabilitados";

import img_usu from '../../../assets/icons/usuario_habilitado.png';
import img_emp from '../../../assets/icons/empresa_habiltado.png';


import {
  EmpresasHabilitadas,
  EmpresasInhabilitadas,
} from "../../../Data/DatosCliente";

function DatosEmpresa() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [inhabilitados, setInhabilitados] = useState([]);

  useEffect(() => {
    const loadEmpresaHabilitados = async () => {
      const response = await EmpresasHabilitadas();
      setdata(response);
    };

    const loadEmpresaInhabilitados = async () => {
      const response = await EmpresasInhabilitadas();
      setInhabilitados(response);
    };

    loadEmpresaInhabilitados();
    loadEmpresaHabilitados();
  }, []);

  return (
    <>
      <main id="main" className="main">
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

        <EmpresaHabilitados data={data} />

        <EmpresaInhabilitados inhabilitados={inhabilitados} />
      </main>
    </>
  );
}

export default DatosEmpresa;
