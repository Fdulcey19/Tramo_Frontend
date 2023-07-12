import React, { useState } from "react";
import MostrarMotivoRec from "./Modales/MostrarMotivoRec";
import MasDatosRec from "./Modales/MasDatosRec";
import { getSolicitudesRechazadasid } from "../../../Data/Solicitudes";

function ItemsRec({ SolicitudesRechazadas }) {
  const [motivoRechazoCON, setMotivoRechazoCON] = useState("");
  const [nombreCON, setNombreCON] = useState("");
  const [apellidoCON, setapellidoCON] = useState("");

  const [data, setdata] = useState([]);

  const handleOnsumbit = async (id) => {
    const response = await getSolicitudesRechazadasid(id);
    setdata(response);
  };

  return (
    <>
      {SolicitudesRechazadas.map(({ conductor }) => (
        <tr key={conductor._id} className="filas_info">
          <td>
            <span className="d-flex justify-content-center mt-3">
              <img
                src={conductor.perfil.fotoperfilCON}
                alt=""
                className="circle-img"
              />
            </span>
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
          <td className="text-center align-middle filas_info_larga">
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              <b>Direccion de residencia</b>
            </p>
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              {conductor.DireccionResidenciaCON}
            </p>
          </td>

          <td className="">
            <div
              className="d-flex flex-column align-items-center filas_info_corta"
              style={{ marginTop: "10%" }}
            >
              <button
                href=""
                className="btn bg-blue btn-mas-datos botones"
                data-bs-toggle="modal"
                data-bs-target="#mas-datos-rechazados"
                onClick={() => handleOnsumbit(conductor._id)}
              >
                Mostrar Más Datos
              </button>
              <div className="mt-2">
                <button
                  className="btn bg-red btn-mas-datos botones"
                  style={{ opacity: "90%", fontSize:"14px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#motivo-rechazo"
                  onClick={() => {
                    setMotivoRechazoCON(conductor.motivoRechazoCON);
                    setNombreCON(conductor.nombreCON);
                    setapellidoCON(conductor.apellidoCON);
                  }}
                >
                  Motivo Cancelación
                </button>
              </div>
            </div>
          </td>
          <MostrarMotivoRec
            motivoRechazoCON={motivoRechazoCON}
            nombreCON={nombreCON}
            apellidoCON={apellidoCON}
          />
        </tr>
      ))}
      <MasDatosRec data={data} />
    </>
  );
}

export default ItemsRec;
