import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import MotivoInhabilitado from "./Modales/MotivoInhabilitado";
import { CondutoresInhabilitado } from "../../../Data/DatosConductor";
import MasDatosInhabilitado from "./Modales/MasDatosInhabilitado";
import { useConductores } from "../../../Context/Contexto";

function ItemsInhabilitados() {
  const { datosConductorInhabilitado, loading } = useConductores();

  const [data, setdata] = useState([]);
  const [motivo, setMotivo] = useState("");
  const [nombre, setnombre] = useState("");

  const handleOnsumbit = async (id) => {
    const response = await CondutoresInhabilitado(id);
    setdata(response);
  };
  const handleMotivo = (motivoInhabilitadoCON, nombre) => {
    setMotivo(motivoInhabilitadoCON);
    setnombre(nombre);
  };

  return (
    <>
      {loading ? (
        datosConductorInhabilitado.map(({ conductor }) => (
          <tr key={conductor._id} className="filas_info">
            <td>
              <div>
                <img
                  src={conductor.perfil.fotoperfilCON}
                  className="circle-img"
                  alt=""
                />
              </div>
            </td>
            <td className="text-center align-middle text-sm filas_info_larga">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.nombreCON} {conductor.apellidoCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.nroTelefonoCON}
              </p>
            </td>
            <td className="text-center align-middle text-sm filas_info_corta">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Cedula</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.nroDocumentoCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.correoElectronicoCON}
              </p>
            </td>
            <td className="text-center align-middle filas_info_larga">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion de residencia</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.DireccionResidenciaCON} 78N - Popayan Cauca
              </p>
            </td>
            <td className="align-middle filas_info_corta">
              <div className="text-center">
                <a
                  href=""
                  className="btn bg-blue mb-2 btn-mas-datos"
                  data-bs-toggle="modal"
                  data-bs-target="#inhabilitado"
                  onClick={() => handleOnsumbit(conductor._id)}
                >
                  Mostrar Más datos
                </a>
                <br />
                <button
                  className="btn bg-red btn-mas-datos"
                  style={{opacity:"90%", fontSize:"14px"}}
                  data-bs-toggle="modal"
                  data-bs-target="#motivo-rechazo"
                  onClick={() => {
                    handleMotivo(
                      conductor.motivoInhabilitadoCON,
                      conductor.nombreCON,
                      conductor.apellidoCON
                    );
                  }}
                >
                  Motivo Inhabilitación
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <div className=" d-flex justify-content-center">
          <span className="loader3"></span>
        </div>
      )}

      <MotivoInhabilitado motivo={motivo} nombre={nombre} />
      <MasDatosInhabilitado data={data} />
    </>
  );
}

export default ItemsInhabilitados;
