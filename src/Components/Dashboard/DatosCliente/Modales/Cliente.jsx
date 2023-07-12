import { useState } from "react";

import Swal from "sweetalert2";

import { InhabilitarCliente } from "../../../../Data/DatosCliente";

function Cliente({ getid }) {
  

  const [motivoInhabilitadoPNA, setmotivoInhabilitadoPNA] = useState("");

  return (
    <tr>
      <td>
      <div
        className="modal fade"
        id="escribir-motivo-inhabilitacion"
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
                Escriba el motivo de la Inhabilitacion
              </h1>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <textarea
                  className="w-100 p-3"
                  placeholder="Motivo Inhabilitación..."
                  name="motivoInhabilitadoPNA"
                  id="respuesta-pqrs"
                  rows="10"
                  onChange={(e) => setmotivoInhabilitadoPNA(e.target.value)}
                  required
                ></textarea>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                onClick={() => {
                  Swal.fire({
                    title: "¿Seguro que desea Inhabilitar el cliente?",
                    icon: "question",
                    showDenyButton: true,
                    denyButtonText: "No",
                    confirmButtonText: "Si",
                  }).then((response) => {
                    if (response.isConfirmed) {
                       InhabilitarCliente(motivoInhabilitadoPNA, getid);
                    }
                  });
                }}
                className="btn bg-red text-center mx-auto"
              >
                Inhabilitar y enviar motivo
              </button>
            </div>
          </div>
        </div>
      </div>
      </td>
    </tr>
  );
}

export default Cliente;
