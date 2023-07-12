import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getHistorial } from "../../../Data/Historial";
import moment from 'moment';

function HistorialCards() {
  const [Historial, setHistorial] = useState([]);

  useEffect(() => {
    async function loadHistorial() {
      const { data } = await getHistorial();
      setHistorial(data);
    }

    loadHistorial();
  }, []);

  // Ordenar la data por fecha (orden descendente)
  Historial.sort((a, b) => moment(b.pedidoManifesto.createdAt) - moment(a.pedidoManifesto.createdAt));

  return (
    <>
      {Historial.map(({ usuario, pedidoManifesto, index }) => (
        <tr key={index}>
          <td className="text_movil filas_info_corta text-center pt-4 order-2" >
            {moment(pedidoManifesto.createdAt).format("HH:mm A")}
          </td>
          <td className="text_movil filas_info_corta text-center pt-4 order-2">
            {moment(pedidoManifesto.createdAt).format("DD-MM-YYYY")}
          </td>

          <td className="text_movil filas_info_corta text-center pt-4  order-2">
            {usuario.nombrePNA ? `${usuario.nombrePNA} ${usuario.apellidoPNA}` : usuario.nombreEmpresa}
          </td>

          <td className="text_movil filas_info_corta text-center p-4 order-0 ">
            {pedidoManifesto.id_conductor.nombreCON} {pedidoManifesto.id_conductor.apellidoCON}
          </td>
          <td className="text_movil text-center pt-4">
            {pedidoManifesto.carga.cantidadAproximada} kilos
          </td>
          <td className="text_movil filas_info_larga text-center pt-4">
            {pedidoManifesto.carga.producto}
          </td>
          <td className="text_movil  text-center pt-4">
            ${pedidoManifesto.costosViaje}
          </td>
          <td className="text_movil filas_info_corta text-center pt-4">
            <Link to={`/manifiesto/${pedidoManifesto._id}`} target="blank">
              <button
                className="btn bg-orange-btn px-4"
                style={{ fontSize: "14px"}}
              >
                Ver manifiesto
              </button>
            </Link>
            <Link to={`/remesa/${pedidoManifesto._id}`} target="blank">
              <button
                className="btn bg-blue mt-2 px-4"
                style={{ fontSize: "14px" }}
              >
                Ver Remesa
              </button>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
}

export default HistorialCards;
