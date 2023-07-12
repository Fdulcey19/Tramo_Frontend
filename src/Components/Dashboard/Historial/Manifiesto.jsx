import logo from "../../../assets/icons/Logofin.png";
import ministerio from "../../../assets/icons/ministerio.png";
import "./manifiesto.css";
import { Link, useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import axios from "axios";
import { NumeroALetras } from "./Num";
import moment from 'moment'

function Manifiesto() {
  const [manifiesto, setmanifiesto] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [carga, setcarga] = useState({});
  const [destinatario, setdestinatario] = useState({});
  const [conductor, setconductor] = useState({});
  const [vehiculo, setvehiculo] = useState({});
  const [tenedor, settenedor] = useState({});
  const [usuario, setusuario] = useState({});
  const [ubicacion, setubicacion] = useState({});
  const [fecha, saetFecha] = useState("");

  const [propietario, setpropietario] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const getManifiesto = async () => {
      const { data } = await axios.get(
        `https://backend-tramo.vercel.app/natural/verManifiesto/${id}`
      );
      setmanifiesto(data);
      const conductor = await data.pedido.id_conductor;
      const ubicacion = await data.pedido;
      const carga = await data.pedido.carga;
      const vehiculo = await data.vehiculo;
      const tenedor = await data.tenedor;
      const propietario = await data.propietario;
      const destinatario = await data.pedido.destinatario;
      const usuario = await data.usuario;
      const observaciones = await data.pedido.descripcionUbicacion;
      const valor = await data.pedido.costosViaje;
      const pagoDescarga = await data.pedido.pagoDescarge;
      const pagoCarga = await data.pedido.pagoCarga;

      setconductor(conductor);
      setcarga(carga);
      setvehiculo(vehiculo);
      settenedor(tenedor);
      setpropietario(propietario);
      setdestinatario(destinatario);
      setcarga({ ...carga, valor, observaciones, pagoDescarga, pagoCarga });
      setubicacion(ubicacion)
      setusuario(usuario);
      const fecha=conductor.createdAt;
      const formattedDate = moment(fecha).format("DD-MM-YYYY  ");
      saetFecha(formattedDate);
    };

    getManifiesto();
  }, [isLoading]);

  return (
    <>
      <div className="p-3 Manifiesto  transformText  ">
        <table>
          <tr className="head">
            <td colSpan={2}>
              <img src={logo} alt="" style={{ maxWidth: "120px" }} />
              <img src={ministerio} alt="" style={{ maxWidth: "140px" }} />
            </td>
            <td colSpan={3} className="text-center titulo">
              <tr>
                <p className="fw-bold">MANIFIESTO ELECTRONICO DE CARGA</p>
              </tr>
              <tr>
                <h3 className="fw-bold fs-4">TRAMO S.A.S</h3>
              </tr>
              <tr>
                <p>NIT: 7457239240945</p>
              </tr>
              <tr>
                <p>Crra 4#7-65 Popayan Cauca</p>
              </tr>
            </td>
            <td rowSpan={5} colSpan={2}>
              <tr>
                <p className="texto-largo">
                  "La impresión en soporte cartular (papel) de este acto
                  administrativo producido por medios electrónicos en
                  cumplimiento de la ley 627 de 1999 (Artículos 6 y 13) de la
                  ley 962 de 205 (Artículo 6), es una reproducción del documento
                  original que se encuentra en formato electrónico firmado
                  digitalmente, cuya representación digital goza de
                  autenticidad, integridad y no repudio"
                </p>
              </tr>
              <tr>
                <p>
                  <span className="subtitulos">Manifiesto:</span> 02822374
                </p>
              </tr>
              <tr>
                <p>
                  <span className="subtitulos">Autorización:</span> 02822374
                </p>
              </tr>
            </td>
            <td rowSpan={7} className="d-flex justify-content-center ">
              {/* <img src={codigo} alt="" style={{ maxWidth: "120px" }} /> */}
              <div
                style={{
                  height: "auto",
                  margin: "0 auto",
                  maxWidth: "120px",
                  width: "100%",
                }}
              >
                <QRCode
                className="qr"
                  value={`https://tramo.vercel.app/manifiesto/${id} `}
                  style={{ maxWidth: "120px" }}
                />
              </div>
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>

          <tr></tr>
          <tr className="subtitulos text-center">
            <td className="bordes">
              <p>FECHA DE EXPEDICIÓN</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>TIPO DE MANIFIESTO</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>ORIGEN DEL VIAJE</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>DESTINO DEL VIAJE</p>
            </td>
          </tr>

          <tr className="text-center">
            <td className="bordes">
              <p>{fecha}</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>GENERAL</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>{ubicacion.addressInicial}</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>{ubicacion.addressFinal}</p>
            </td>
          </tr>
          <tr className="bordes">
            <td colSpan={8} className="text-center subtitulos">
              <p>INFORMACIÓN DEL VEHICULO Y CONDUCTOR</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td colSpan={2}>
              <p>TITULAR DE MINIFIESTO</p>
            </td>
            <td>
              <p> INDENTIFICACIÓN</p>
            </td>
            <td colSpan={3}>
              <p>DIRECCIÓN</p>
            </td>
            <td>
              <p>TELEFONO</p>
            </td>
            <td>
              <p>CIUDAD</p>
            </td>
          </tr>

          <tr className="bordes">
            <td colSpan={2}>
              <p>
                {propietario.nombrePRO}
                <p className="mx-2">{propietario.apellidoPRO}</p>
              </p>
            </td>
            <td>
              <p> {propietario.NroDocumentoPRO}</p>
            </td>
            <td colSpan={3}>
              <p>{propietario.DireccionResidenciaPRO}</p>
            </td>
            <td>
              <p>{propietario.NroTelefonoPRO}</p>
            </td>
            <td>
              <p> {propietario.ciudadPRO}</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td>
              <p>PLACA</p>
            </td>
            <td>
              <p>MARCA</p>
            </td>
            <td>
              <p>PLACA SEMIREMOLQUE</p>
            </td>
            <td>
              <p>CONFIGURACIÓN</p>
            </td>
            <td>
              <p>PESO VACIO</p>
            </td>
            <td>
              <p>N° DE POLIZA</p>
            </td>
            <td>
              <p>COMPAÑIA DE SOAT</p>
            </td>
            <td>
              <p>FECHA VENCIMIENTO SOAT</p>
            </td>
          </tr>

          <tr className="bordes">
            <td>
              <p>{vehiculo.placaVehiculo}</p>
            </td>
            <td>
              <p>{vehiculo.marca}</p>
            </td>
            <td>
              <p>{vehiculo.placasTrailer}</p>
            </td>
            <td>
              <p>{vehiculo.numeroEjes}</p>
            </td>
            <td>
              <p>{vehiculo.pesoVacio} KG</p>
            </td>
            <td>
              <p>{vehiculo.nroPoliza_ResponCivil}</p>
            </td>
            <td>
              <p>{vehiculo.numeroSOAT}</p>
            </td>
            <td>
              <p>{vehiculo.fechavencSOAT}</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td colSpan={2}>
              <p>CONDUCTOR</p>
            </td>
            <td>
              <p>INDENTIFICACIÓN</p>
            </td>
            <td colSpan={2}>
              <p>DIRECCIÓN</p>
            </td>
            <td>
              <p>N° TELÉFONO</p>
            </td>
            <td>
              <p>N° DE LICENCIA</p>
            </td>
            <td>
              <p>CIUDAD</p>
            </td>
          </tr>

          <tr className="bordes">
            <td colSpan={2}>
              <p>{conductor.nombreCON}</p>
            </td>
            <td>
              <p>{conductor.nroDocumentoCON}</p>
            </td>
            <td colSpan={2}>
              <p>{conductor.DireccionResidenciaCON}</p>
            </td>
            <td>
              <p>{conductor.nroTelefonoCON}</p>
            </td>
            <td>
              <p>{conductor.nroLicenciaCON}</p>
            </td>
            <td>
              <p>{conductor.ciudadCON}</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td colSpan="2">
              <p>POSEEDOR O TENEDOR VEHICULO</p>
            </td>
            <td>
              <p>INDENTIFICACIÓN</p>
            </td>
            <td colSpan="2">
              <p>DIRECCIÓN CONDUCTOR N°2</p>
            </td>
            <td>
              <p>N° TELÉFONO</p>
            </td>
            <td colSpan="2">
              <p>CIUDAD</p>
            </td>
          </tr>
          <tr className="bordes">
            <td colSpan="2">
              <p>
                {tenedor.nombreTE} {tenedor.apellidoTE}
              </p>
            </td>
            <td>
              <p>{tenedor.NroDocumentoTE}</p>
            </td>
            <td colSpan="2">
              <p>{tenedor.DireccionResidenciaTE}</p>
            </td>
            <td>
              <p>{tenedor.NroTelefonoTE}</p>
            </td>
            <td colSpan="2">
              <p>{tenedor.ciudadTE}</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td colSpan={8}>
              <p>INFORMACIÓN DE LA MERCACANCÍA TRANSPORTADA</p>
            </td>
          </tr>

          <tr className="bordes subtitulos">
            <td colSpan={5}>
              <p>INFORMACIÓN MERCACANCÍA</p>
            </td>
            <td>
              <p>INFORMACIÓN REMITENTE</p>
            </td>
            <td>
              <p>INFORMACIÓN DESTINATARIO</p>
            </td>
            <td rowSpan={2}>
              <p>DUEÑO POLIZA</p>
            </td>
          </tr>

          <tr className="bordes subtitulos">
            <td>
              <p>N° REMEZA</p>
            </td>
            <td>
              <p>UNIDAD DE MEDIDA</p>
            </td>
            <td>
              <p>CANTIDAD</p>
            </td>
            <td>
              <p>EMPAQUE</p>
            </td>
            <td>
              <p>PRODUCTO TRANSPORTADO</p>
            </td>
            <td>
              <p>CC/NIT NOMBRE/RAZÓN SOCIAL</p>
            </td>
            <td>
              <p>CC/NIT NOMBRE/RAZÓN SOCIAL</p>
            </td>
          </tr>
          <tr className="bordes">
            <td>
              <p>a4268</p>
            </td>
            <td>
              <p>KILOGRAMOS</p>
            </td>
            <td>
              <p>{carga.cantidadAproximada}</p>
            </td>
            <td>
              <p>{carga.empaque}</p>
            </td>
            <td>
              <p>{carga.producto}</p>
            </td>
            <td>
              <p>
                {usuario.nroDocumentoPNA}
                <p className="mx-1">{usuario.nombrePNA}</p>
              </p>
            </td>
            <td>
              <p>
                {destinatario.numeroIdentificacion}
                {destinatario.nombreEntidad}
                {destinatario.razonSocial}
              </p>
            </td>
            <td>
              <p>SEGURO S.A.S</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td colSpan={6}>
              <p>VALORES</p>
            </td>
            <td colSpan={2}>
              <p>OBSERVACIONES</p>
            </td>
          </tr>
          <tr className="bordes">
            <td>
              <p className="subtitulos">VALOR TOTAL DEL VIAJE</p>
            </td>
            <td>
              <p>
                {carga.valor - (carga.valor / 100 + (carga.valor * 3.5) / 100)}
              </p>
            </td>
            <td rowSpan={2}>
              <p className="subtitulos">LUGAR</p>
            </td>
            <td rowSpan={2}>
              <p>POPAYAN</p>
            </td>
            <td rowSpan={2}>
              <p className="subtitulos">FECHA</p>
            </td>
            <td rowSpan={2}>
              <p>{fecha}</p>
            </td>
            <td colSpan={2} rowSpan={6}>
              <p>{carga.observaciones}</p>
            </td>
          </tr>
          <tr className="bordes">
            <td>
              <p className="subtitulos">RETENCIÓN EN LA FUENTE</p>
            </td>
            <td>
              <p> {carga.valor / 100}</p>
            </td>
          </tr>

          <tr className="bordes">
            <td>
              <p className="subtitulos">RETENCIÓN ICA</p>
            </td>
            <td>
              <p>{(carga.valor * 3.5) / 100}</p>
            </td>
            <td colSpan={4} rowSpan={2}>
              <p className="subtitulos">CARGO PAGADO POR:</p>{" "}
              <p>{carga.pagoCarga}</p>
            </td>
          </tr>

          <tr className="bordes">
            <td>
              <p className="subtitulos">NETO A PAGAR</p>
            </td>
            <td>
              <p> {carga.valor}</p>
            </td>
          </tr>

          <tr className="bordes">
            <td>
              <p className="subtitulos">VALOR ANTICIPO</p>
            </td>
            <td>
              <p>0</p>
            </td>
            <td colSpan={4} rowSpan={2}>
              <p className="subtitulos">DESCARGA PAGADA POR:</p>{" "}
              <p>{carga.pagoDescarga}</p>
            </td>
          </tr>

          <tr className="bordes">
            <td>
              <p className="subtitulos">SALDO A PAGAR</p>
            </td>
            <td>
              <p>{carga.valor}</p>
            </td>
          </tr>

          <tr className="bordes">
            <td colSpan={8}>
              <p>
                <span className="subtitulos my-1">
                  VALOR A PAGAR EN LETRAS:
                </span>{" "}
                {NumeroALetras(carga.valor)}
              </p>
            </td>
          </tr>

          <tr
            className="bordes subtitulos"
            style={{ height: "80px" }}
            valign="top"
          >
            <td colSpan={3}>
              <p>DOCUMENTO FIRMADO DIGITALMENTE POR LA EMPRESA:</p>{" "}
              <p>TRAMO S.A.S</p>
            </td>
            <td colSpan={3}>
              <p>FIRMA Y CC TITULAR MANIFIESTO</p>
            </td>
            <td colSpan={3}>
              <p>FIRMA Y CC DEL CONDUCTOR</p>
            </td>
          </tr>
        </table>
        <div className="d-flex justify-content-center mt-2">
          {!isLoading ? (
            <button
              className="btn btn-primary w-50 "
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

export default Manifiesto;
