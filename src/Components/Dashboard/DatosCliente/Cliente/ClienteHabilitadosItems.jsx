import React, { useState } from "react";
import Cliente from "../Modales/Cliente";
import ReactStarts from "react-stars";

function ClienteHabilitadosItems({ data }) {
  const [getid, setid] = useState(0);
  const handleId = (id) => {
    setid(id);
  };

  return (
    <>
      {data.map((cliente) => (
        <tr key={cliente._id} className="filas_info">
          <td className="w-one">
            <div className="d-flex justify-content-center">
              <img
                src={
                  cliente.perfil.fotoPerfilPNA
                    ? cliente.perfil.fotoPerfilPNA
                    : "https://profileme.app/wp-content/uploads/2021/01/cropped-ProfileMe-06.jpg"
                }
                className="circle-img "
                alt=""
              />
            </div>
          </td>

          <td className="text-center align-middle text-sm w-25 filas_info_larga">
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              <b>Nombre</b>
            </p>
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              {cliente.nombrePNA} {cliente.apellidoPNA}
            </p>
            <p className="font-weight-bold text-xs font-weight-bold m-0 mt-2">
              <b>N° Telefono</b>
            </p>
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              {cliente.nroTelefonoPNA}
            </p>
          </td>
          <td className="text-center align-middle text-sm w-25 filas_info_corta">
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              <b>Correo</b>
            </p>
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              {cliente.correoElectronicoPNA}
            </p>
            <p className="font-weight-bold text-xs font-weight-bold m-0 mt-2">
              <b>Direccion</b>
            </p>
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              {cliente.DireccionPNA}
            </p>
          </td>
          <td className="text-center align-middle filas_info_larga">
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              <b>Calificacion </b>
            </p>
            <div className="d-flex justify-content-center align-items-center cal-star">
              <ReactStarts
                edit={false}
                value={cliente.calificacionPNA}
                size={28}
              />
            </div>

            <p className="font-weight-bold text-xs font-weight-bold m-0">
              <b>Documento</b>
            </p>
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              {cliente.nroDocumentoPNA}
            </p>
          </td>
          <td>
            <div className="text-center">
              <div className="mt-5">
                <button
                  className="btn bg-red botones"
                  style={{padding:"4px 20px"}}
                  data-bs-toggle="modal"
                  data-bs-target="#escribir-motivo-inhabilitacion"
                  onClick={() => handleId(cliente._id)}
                >
                  Inhabilitar
                </button>
              </div>
            </div>
          </td>
        </tr>
      ))}
      <Cliente getid={getid} />
    </>
  );
}

export default ClienteHabilitadosItems;
