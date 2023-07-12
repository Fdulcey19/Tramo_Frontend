import { useState } from "react";
import Modal from "./Modal";

function PqrsCards({ data }) {
  const [selectedPqrsId, setSelectedPqrsId] = useState(null);

  const handleVerMasClick = (pqrsId) => {
    setSelectedPqrsId(pqrsId);
  };

  // Invertir el orden de la matriz data
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map(({ usuario, pqrsItem, _id }) => (
        <tr key={_id}>
          <td className="text-center pt-3 filas_info_corta">
            {usuario.nombrePNA
              ? `${usuario.nombrePNA} ${usuario.apellidoPNA}`
              : usuario.nombreCON
              ? `${usuario.nombreCON} ${usuario.apellidoCON}`
              : usuario.nombreEmpresa
              ? usuario.nombreEmpresa
              : ""}
          </td>
          <td className="pt-3 filas_info_corta">
            <div className="d-flex justify-content-center">{pqrsItem.tipo}</div>
          </td>
          <td className="p-3 filas_info_corta">
            <button
              href=""
              className="btn bg-blue px-4"
              data-bs-toggle="modal"
              data-bs-target="#peticion"
              onClick={() => handleVerMasClick(pqrsItem._id)}
            >
              Ver mas...
              <i className="bi bi-cursor fs-6"></i>
            </button>
          </td>
        </tr>
      ))}
      {selectedPqrsId && <Modal userId={selectedPqrsId} />}
    </>
  );
}

export default PqrsCards;
