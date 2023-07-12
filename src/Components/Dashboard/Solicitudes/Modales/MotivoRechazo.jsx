import React, { useState } from 'react'
import { putSolicitudesRechazar } from '../../../../Data/Solicitudes';
import Swal from 'sweetalert2';

function MotivoRechazo({_id}) {

  const [data, setdata] = useState({
    _id: _id,
    motivoRechazoCON: "",
  });

  const handleChange = ({ target }) => {
    setdata({
      ...data,
      [target.name]: target.value,
    });
    
  };


  return (
    <>
      <tr>
        <td>
          <div
            className="modal fade"
            id="escribir-motivo-rechazo"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Escriba el motivo de cancelar solicitud
                  </h1>
                  <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <textarea
                    className="w-100 p-3"
                    name="motivoRechazoCON"
                    id="respuesta-pqrs"
                    rows="10"
                    placeholder='Motivo de cancelación...'
                    autoFocus
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    onClick={() => {
                      Swal.fire({
                        title: "¿Seguro que desea cancelar la solicitud?",
                        icon: "question",
                        showDenyButton: true,
                        denyButtonText: "No",
                        confirmButtonText: "Si",
                      }).then((response) => {
                        if (response.isConfirmed) {
                          Swal.fire({
                            icon: "success",
                            title: "Cancelado Correctamente",
                          });
                          button: putSolicitudesRechazar(data);
                        }
                      });
                    }}
                    className="btn btn-primary"
                  >
                    Confirmar cancelación y enviar motivo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default MotivoRechazo