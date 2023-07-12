import React, { useState } from "react";
import Empresa from "../Modales/Empresa";
import ReactStarts from "react-stars";

function EmpresaHabilitadosItems({ data }) {
  const [getid, setgetid] = useState()
  return (
    <>
      {data.map(
        ({
          nombreEmpresa,
          nroTelefonoPJU,
          correoElectronicoPJU,
          DireccionEmpresa,
          calificacionPJU,
          NITempresa,
          razonSocialEmpresa,
          nomRepresentanteLegal,

          _id,
        }) => (
          <>
            <tr key={_id} className="filas_info">
              <td className="text-center align-middle text-sm w-25 filas_info_larga">
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  <b>Nombre Empresa</b>
                </p>
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  {nombreEmpresa}
                </p>
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  <b>N° Telefono</b>
                </p>
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  {nroTelefonoPJU}
                </p>
              </td>
              <td className="text-center align-middle text-sm w-25 filas_info_larga">
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  <b>Razon Social </b>
                </p>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  {razonSocialEmpresa}
                </p>
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  <b>Representante Legal </b>
                </p>
                <p>{nomRepresentanteLegal}</p>
              </td>
              <td className="text-center align-middle text-sm filas_info_corta">
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  <b>Correo</b>
                </p>
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  {correoElectronicoPJU}
                </p>
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  <b>Direccion</b>
                </p>
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  {DireccionEmpresa}
                </p>
              </td>
              <td className="text-center align-middle filas_info_corta">
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  <b>Calificacion </b>
                </p>
                <div className="d-flex justify-content-center align-items-center cal-star">
                  <ReactStarts edit={false} value={calificacionPJU} size={28} />
                </div>

                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  <b>Nit </b>
                </p>
                <p className="mb-0">{NITempresa}</p>
              </td>
              <td className="align-middle">
                <div className="text-center">
                  <div className="mt-4">
                    <button
                      className="btn bg-red botones"
                      data-bs-toggle="modal"
                      data-bs-target="#motivo-inhabilitacion-o"
                      onClick={()=>setgetid(_id)}
                    >
                      Inhabilitar
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-none bg-white">
              <td className="bg-white">
                <Empresa getid={getid} />
              </td>
            </tr>
          </>
        )
      )}
    </>
  );
}

export default EmpresaHabilitadosItems;
