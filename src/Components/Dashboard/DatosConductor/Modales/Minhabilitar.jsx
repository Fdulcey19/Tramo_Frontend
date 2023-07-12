import React, { useState } from "react";
import { InhabilitarConductor } from "../../../../Data/DatosConductor";
import Swal from "sweetalert2";

function Minhabilitar({ getid }) {
  const [motivoInhabilitadoCON, setmotivoInhabilitadoCON] = useState("")
   

  
  return (
    <tr style={{borderColor:"white"}}>
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
                Escriba el motivo de Inhabilitacion
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
                  required
                  name="motivoInhabilitadoCON"
                  rows="10"
                  onChange={(e)=>setmotivoInhabilitadoCON(e.target.value)}
                  placeholder="Motivo De Inhabilitación...."
                ></textarea>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                onClick={() => {
                  Swal.fire({
                    title: "¿Seguro que desea Inhabilitar el conductor?",
                    icon: "question",
                    showDenyButton: true,
                    denyButtonText: "No",
                    confirmButtonText: "Si",
                  }).then((response) => {
                    if (response.isConfirmed) {
                     
                       InhabilitarConductor(motivoInhabilitadoCON,getid);
                    }
                  });
                }}
                className="btn bg-red mx-auto"
              >
                Confirmar inhabilitacion
              </button>
            </div>
          </div>
        </div>
      </div>
      </td>
    </tr>
  );
}

export default Minhabilitar;
