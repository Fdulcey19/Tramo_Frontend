import React, { useEffect, useState } from "react";
import logo from "../../../assets/icons/tranporte.png";
import logo2 from "../../../assets/icons/Logofin.png";
import "./remesa.css";
import { useParams } from "react-router-dom";
import { getRemesa } from "../../../Data/Historial";
import moment from 'moment'

function Remesa() {
    const [fecha, setfecha] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  const [pedidoCarga, setPedido] = useState({});
  const [cliente, setCliente] = useState({});
  const [conductor, setConductor] = useState({});
  const [vehiculo, setVehiculo] = useState({});
  const [destinatario, setdestinatario] = useState({});
  const [origen, setOrigen] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const load = async () => {
      const response = await getRemesa(id);
      const cliente = await response.cliente;
      const pedido = await response.pedidoFound;
      const destinatario = await response.pedidoFound.destinatario;
      const pedidoFound = await response.pedidoFound.carga;
      const conductorFound = await response.conductorFound;
      const vehiculoFound = await response.vehiculoFound;
      const origen=await response.pedidoFound;
      setCliente(cliente);
      setConductor(conductorFound);
      setPedido(pedidoFound);
      setVehiculo(vehiculoFound);
      setdestinatario(destinatario)
      const fecha=pedido.createdAt;
      const formattedDate = moment(fecha).format("DD-MM-YYYY HH:mm:ss  ");
      setfecha(formattedDate)
      setOrigen(origen);
    };
    load();
  }, [isLoading]);
 

  return (
    <>
      <div className="container  mt-4 remesa">
        <table className="table border-white mt-4  ">
          <thead>
            <tr>
              <td colSpan={4} rowSpan={2} className="text-center fw-bold">
                <img className="logo1"  src={logo2} alt="logo" style={{ maxWidth: "160px" }} />
                <p  style={{fontSize:"8px"}}> Transporte y Movilidad</p>
              </td>
              <td colSpan={4} rowSpan={2}>
                <tr className="d-flex justify-content-center">
                  <h3 className="titulo">REMESA DE TRANSPORTE</h3>
                </tr>
                <tr className="d-flex justify-content-center">
                  <span style={{  }}>No.{" "} {id}</span>
                </tr>
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src={logo}
                  alt="logo"
                  className="logo2 mb-4 mb-md-0"
                  style={{ minHeight: "30x", maxWidth: "260px" }}
                />
              </th>
            </tr>
          </thead>
        </table>

        <div className="contenedorHead">
          <table className="table border-white">
            <tbody>
              <tr>
                <td className="fw-bold">REMITENTE:</td>
               <td> {cliente.nombrePNA ? `${cliente.nombrePNA} ${cliente.apellidoPNA}` : cliente.nombreEmpresa}</td>
                <td className="fw-bold">FECHA:</td>
                <td>{fecha}</td>
              </tr>
              <tr>
                <td className="fw-bold">DESTINATARIO:</td>
                 <td>{destinatario.nombreEntidad}</td> 
                <td className="fw-bold">LUGAR:</td>
                <td>{origen.addressInicial}</td>
              </tr>
              <tr>
                <td className="fw-bold">CONDUCTOR:</td>
                <td>
                  {conductor.nombreCON} 
                  {" "}
                  {conductor.apellidoCON}
                </td>
                <td className="fw-bold">TIPO VEHICULO:</td>
                <td>{vehiculo.tipoVehiculo}</td>
              </tr>
              <tr>
                <td className="fw-bold">PLACA VEHICULO:</td>
                <td>{vehiculo.placaVehiculo}</td>
                <td className="fw-bold">PLACA REMOLQUE:</td>
                <td>{vehiculo.placasTrailer}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="contenedorHead">
          <h5 className="text-center m-2 fw-bold">DETALLES DE LA CARGA</h5>
        </div>
        <div className="contenedorHead mb-3 pb-3 fontSize">
          <table className="table border-white ">
            <thead>
              <tr className="fw-bold">
                <td>PRODUCTO</td>
                <td>CANTIDAD</td>
                <td>CUIDADO CARGA</td>
                <td>TIPO DE CARGA</td>
                <td>ORIGEN</td>
                <td>DESTINO</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pedidoCarga.producto}</td>
                <td>{pedidoCarga.cantidadAproximada}Kg</td>
                <td>{pedidoCarga.cuidadoCarga}</td>
                <td>{pedidoCarga.tipoCarga}</td>
                 <td>{origen.addressInicial}</td>
                <td>{origen.addressFinal}</td> 
              </tr>
            </tbody>
          </table>
          <br />
          <p className="mx-1">
            <b>NOTA:</b> Una vez recibida la mercancia a satisfacción no se
            aceptan reclamos
          </p>
          <p className="mx-1">
            <b>OBSERVACIONES:</b> Al lado de la casa roja recoger
          </p>
          <br />
          <br />

          <h5 className="text-center">
            {" "}
            _____________________________ <br />
            FIRMA Y SELLO RECIBIDO
          </h5>
          <br />
        </div>
        <div className="d-flex justify-content-center mt-2">
          {!isLoading ? (
            <button
              className="btn btn-primary w-50 mb-5"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  window.print();
                }, 100); // Agrega un retraso de 100 ms antes de llamar a window.print()
              }}
            >
              Descargar{" "}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Remesa;
