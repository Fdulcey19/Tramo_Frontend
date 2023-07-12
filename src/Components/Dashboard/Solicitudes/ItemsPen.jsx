import React, { useState } from "react";
import Swal from "sweetalert2";
import { getSolicitudesPendientesid } from "../../../Data/Solicitudes";
import MotivoRechazo from "./Modales/MotivoRechazo";
import MasDatos from "./Modales/MasDatos";
function ItemsPen({ SolicitudesPendientes }) {
  const [data, setdata] = useState([]);

  const handleOnsumbit = async (id) => {
    const response = await getSolicitudesPendientesid(id);
    setdata(response);
  };

  return (
    <>
      {SolicitudesPendientes.map(({ conductor }) => (
        <>
          <tr key={conductor._id} className="filas_info">
            <td>
              <img
                src={conductor.perfil.fotoperfilCON}
                className="circle-img"
                alt=""
              />
            </td>
            <td className="text-center align-middle text-sm w-25 filas_info_larga">
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
            <td className="text-center align-middle w-25 filas_info_larga">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion de residencia</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.DireccionResidenciaCON}
              </p>
            </td>
            <td className="filas_info_corta">
              <div
                className=""
                style={{ marginTop: "32px" }}
                data-bs-toggle="modal"
                data-bs-target="#mas-datos"
                onClick={() => handleOnsumbit(conductor._id)}
              >
                <button
                  className="btn bg-blue btn-mas-datos botones"
                  style={{ fontSize: "14px" }}
                >
                  Mostrar Más Datos
                </button>
              </div>
            </td>
            <MotivoRechazo _id={conductor._id} />
          </tr>
        </>
      ))}
      <MasDatos data={data} />
    </>
  );
}

export default ItemsPen;
