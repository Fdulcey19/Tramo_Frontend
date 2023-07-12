import { useState } from "react";
import { habilitarEmpresa } from "../../../../Data/DatosCliente";
import EmpresaMotivo from "../Modales/EmpresaMotivo";
import Swal from "sweetalert2";
import ReactStarts from 'react-stars'

function EmpresaInhabilitadosItems({ inhabilitados }) {
  const [motivo, setmotivo] = useState("");
  const [nombre, setnombre] = useState("");
  return (
    <>
      {inhabilitados.map(
        ({
          nombreEmpresa,
          nroTelefonoPJU,
          correoElectronicoPJU,
          DireccionEmpresa,
          calificacionPJU,
          nomRepresentanteLegal,
          NITempresa,
          razonSocialEmpresa,
          estadoPJU,
          _id,
        }) => (
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
              <p style={{fontSize:"14px"}}>{razonSocialEmpresa}</p>
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
              <div className="d-flex justify-content-center cal-star">
              <ReactStarts  edit={false}  value={calificacionPJU}  size={28} /> 
              </div>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nit </b>
              </p>
              <p className="">{NITempresa}</p>
            </td>
            
            <td className="filas_info_corta">
              <div className="text-center mt-4">
                <div className="border-0 bg-white">
                  <button
                    className="btn bg-red botones"
                    style={{fontSize:"14px"}}
                    data-bs-toggle="modal"
                    data-bs-target="#motivo-inhabilitacion-empresa"
                    onClick={() => {setmotivo(estadoPJU.motivoInhabilitadoPJU), setnombre(nombreEmpresa)}}
                  >
                    Motivo Inhabilitacion
                  </button>
                </div>
                <div className="mt-2">
                  <button
                    className="btn bg-blue mb-2 botones"
                    style={{fontSize:"15px", padding:"4px 45px"}}
                    onClick={() => {
                      Swal.fire({
                        title: `¿Está seguro de habilitar el cliente ${nombreEmpresa} ? `,

                        icon: "warning",
                        showDenyButton: true,
                        denyButtonText: "Cancelar",
                        confirmButtonText: "Si, Habilitar!",
                      }).then((response) => {
                        if (response.isConfirmed) {
                          habilitarEmpresa(_id);
                        }
                      });
                    }}
                  >
                    Habilitar
                  </button>
                </div>
              </div>
            </td>
          </tr>
        )
      )}
      <EmpresaMotivo motivo={motivo} nombre={nombre} />
    </>
  );
}

export default EmpresaInhabilitadosItems;
