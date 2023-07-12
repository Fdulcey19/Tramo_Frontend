import React, { useState } from "react";
import { habilitarCliente } from "../../../../Data/DatosCliente";
import Swal from "sweetalert2";
import ClienteMotivo from "../Modales/ClienteMotivo";
import ReactStarts from "react-stars";

function ClienteInhabilitadosItems({ ClienteInhabilitado }) {
  const [motivo, setmotivo] = useState("");
  const [nombre, setnombre] = useState("");
  return (
    <>
      {ClienteInhabilitado.map(
        ({
          _id,
          perfil,
          nombrePNA,
          apellidoPNA,
          nroTelefonoPNA,
          nroDocumentoPNA,
          correoElectronicoPNA,
          DireccionPNA,
          calificacionPNA,
          estadoCLN,
        }) => (
          <tr key={_id} className="filas_info">
            <td>
              <div className="d-flex justify-content-center">
                <img
                  src={
                    perfil
                      ? perfil.fotoPerfilPNA
                      : "https://profileme.app/wp-content/uploads/2021/01/cropped-ProfileMe-06.jpg"
                  }
                  className="circle-img    "
                  alt=""
                />
              </div>
            </td>
            <td className="text-center align-middle text-sm w-25 filas_info_larga">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre </b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nombrePNA} {apellidoPNA}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nroTelefonoPNA}
              </p>
            </td>
            <td className="text-center align-middle text-sm w-25 filas_info_corta">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {correoElectronicoPNA}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {DireccionPNA}
              </p>
            </td>
            <td className="text-center align-middle filas_info_larga">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Calificacion </b>
              </p>
              <div className="d-flex justify-content-center align-items-center cal-star">
                <ReactStarts edit={false} value={calificacionPNA} size={28} />
              </div>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Documento</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nroDocumentoPNA}
              </p>
            </td>
            <td className="filas_info_corta">
              <div className="text-center mt-4">
                <div className="border-0  bg-white">
                  <button
                    href=""
                    className="btn bg-red botones"
                    style={{fontSize:"15px"}}
                    data-bs-toggle="modal"
                    data-bs-target="#motivo-inhabilitacion"
                    onClick={() => {
                      setmotivo(estadoCLN.motivoInhabilitadoPNA),
                        setnombre(nombrePNA , apellidoPNA);
                    }}
                  >
                    Motivo Inhabilitacion
                  </button>
                </div>
                <div className="mt-2">
                  <button
                    onClick={() =>
                      Swal.fire({
                        icon: "question",
                        title: "Esta seguro que desea habilitar este cliente",
                        showDenyButton: true,
                        denyButtonText: "No",
                        confirmButtonText: "Si",
                      }).then((response) => {
                        if (response.isConfirmed) {
                          
                           habilitarCliente(_id);
                        }
                      })
                    }
                    className="btn bg-blue mb-2 botones"
                    style={{fontSize:"15px", padding:"5px 50px"}}
                  >
                    Habilitar
                  </button>
                </div>
              </div>
            </td>
          </tr>
        )
      )}

      <ClienteMotivo motivo={motivo} nombre={nombre} />
    </>
  );
}

export default ClienteInhabilitadosItems;
