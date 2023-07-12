import Minhabilitar from "./Modales/Minhabilitar";
import MasDatos from "./Modales/MasDatos";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  CondutoresHabilitado,
  CondutoresInhabilitado,
} from "../../../Data/DatosConductor";
import { useConductores } from "../../../Context/Contexto";

function ItemsHabilitados() {
  const { datosConductor, loadingconductor } = useConductores();
  const [data, setdata] = useState([]);
  const [getid, setgetid] = useState(0);

  const handleOnsumbit = async (id) => {
    setgetid(id);
    const response = await CondutoresHabilitado(id);
    setdata(response);
  };

  console.log(datosConductor);
  
  return (
    <>
      {loadingconductor ? (
        datosConductor.map(({ conductor }) => (
          <tr key={conductor._id} className="filas_info">
            <td className="">
              <img
                className="circle-img"
                src={
                  conductor.perfil.fotoperfilCON
                    ? conductor.perfil.fotoperfilCON
                    : "https://profileme.app/wp-content/uploads/2021/01/cropped-ProfileMe-06.jpg"
                }
                alt=""
              />
            </td>
            <td className="text-center align-middle text-sm filas_info_larga">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.nombreCON || <Skeleton count={1} />}{" "}
                {conductor.apellidoCON || <Skeleton count={1} />}
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
            <td className="align-middle filas_info_corta">
              <div className="text-center">
                <button
                  className="btn bg-blue "
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => handleOnsumbit(conductor._id)}
                >
                  Mostrar Más datos
                </button>
              </div>
             
            </td>
          </tr>
        ))
      ) : (
        <div className="d-flex justify-content-center">
          <span className="loader3"></span>
        </div>
      )}
      <Minhabilitar getid={getid} />

      <MasDatos data={data} />
    </>
  );
}

export default ItemsHabilitados;
