import Swal from "sweetalert2";
import { HabilitarConductor } from "../../../../Data/DatosConductor";

function MasDatosInhabilitado({ data }) {
  return (
    <tr>
      <td>
        <div
          className="modal fade"
          id="inhabilitado"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-xl"
            id="modal"
          >
            <div className="modal-content Modal-mas-datos">
              <div className="modal-header">
                <h1 className="modal-title fs-5 fw-bold ps-2 opacity-75" id="staticBackdropLabel">
                  Mas datos conductor
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="btn-close"
                ></button>
              </div>
              <div className="modal-body text-dark">
                <div className="container-fluid">
                  {data.map((conductor) => (
                    <>
                      <div className="row">
                        <div className="col-12 head-title text-white text-center mb-1">
                          DATOS CONDUCTOR
                        </div>
                        <div className="col-12 col-xl-6">
                          <div
                            id="carouselExampleDark"
                            className="carousel carousel-dark slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-indicators">
                              <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                              ></button>
                            </div>
                            <div className="carousel-inner">
                              <div
                                className="carousel-item active"
                                data-bs-interval="10000"
                              >
                                <div>
                                <img
                                  src={
                                    conductor.imagenesInhabilitado.FotoFrontal
                                  }
                                  className=" w-100"
                                  alt="..."
                                />
                                </div>
                              </div>
                              <div
                                className="carousel-item"
                                data-bs-interval="2000"
                              >
                                <img
                                  src={conductor.imagenesInhabilitado.FotoVolco}
                                  className=" w-100"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src={
                                    conductor.imagenesInhabilitado
                                      .Fotolateral_Der
                                  }
                                  className=" w-100"
                                  alt="..."
                                />
                              </div>
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6">
                          <table className="w-100 text-center">
                            <tr>
                              <th colSpan="2" className="head-subtitle text-white">
                                Datos tenedor
                              </th>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Nombre:</td>
                              <td>{conductor.tenedorInhabilitado.nombreTE}</td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Apellido:</td>
                              <td>
                                {conductor.tenedorInhabilitado.apellidoTE}
                              </td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Numero Documento:</td>
                              <td>
                                {conductor.tenedorInhabilitado.NroDocumentoTE}
                              </td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Direccion residencia:</td>
                              <td>
                                {
                                  conductor.tenedorInhabilitado
                                    .DireccionResidenciaTE
                                }
                              </td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Ciudad:</td>
                              <td>{conductor.tenedorInhabilitado.ciudadTE}</td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Telefono:</td>
                              <td>
                                {conductor.tenedorInhabilitado.NroTelefonoTE}
                              </td>
                            </tr>
                          </table>
                          <table className="w-100 text-center">
                            <tr>
                              <th colSpan="2" className="head-subtitle text-white">
                                Contacto Emergencia
                              </th>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Nombre:</td>
                              <td>
                                {
                                  conductor.contactoEmergenciaInhabilitado
                                    .nombreCEM
                                }
                              </td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Apellido:</td>
                              <td>
                                {
                                  conductor.contactoEmergenciaInhabilitado
                                    .apellidoCEM
                                }
                              </td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Numero Documento:</td>
                              <td>
                                {
                                  conductor.contactoEmergenciaInhabilitado
                                    .NroDocumentoCEM
                                }
                              </td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Correo Electronico:</td>
                              <td>
                                {
                                  conductor.contactoEmergenciaInhabilitado
                                    .CorreoElectricoCEM
                                }
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-xl-6">
                          <table className="w-100 text-center">
                            <tr>
                              <th colSpan="2" className="head-subtitle text-white">
                                vehiculo Inhabilitado
                              </th>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Placa Vehiculo:</td>
                              <td>
                                {
                                  conductor.vehiculoInhabilitado
                                    .placavehiculoVehiculo
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Marca:</td>
                              <td>{conductor.vehiculoInhabilitado.marca}</td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>modelo:</td>
                              <td>{conductor.vehiculoInhabilitado.modelo}</td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Numero Ejes:</td>
                              <td>
                                {conductor.vehiculoInhabilitado.numeroEjes}
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Tipo vehiculoInhabilitado:</td>
                              <td>
                                {
                                  conductor.vehiculoInhabilitado.tipovehiculoInhabilitado
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Fecha Vencimiento:</td>
                              <td>
                                {conductor.vehiculoInhabilitado.fechavencSOAT}
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Traccion vehiculoInhabilitado:</td>
                              <td>
                                {" "}
                                {conductor.vehiculoInhabilitado.traccionVeh}
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Placas Trailer:</td>
                              <td>
                                {" "}
                                {
                                  conductor.vehiculoInhabilitado.placasTrailer
                                }{" "}
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Peso Vacio:</td>
                              <td>
                                {conductor.vehiculoInhabilitado.pesoVacio}
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Tipo Combustible:</td>
                              <td>
                                {conductor.vehiculoInhabilitado.CombustibleVeh}
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Numero Licencia:</td>
                              <td>
                                {
                                  conductor.vehiculoInhabilitado
                                    .numeroLicenciaVeh
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Numero Soat:</td>
                              <td>
                                {conductor.vehiculoInhabilitado.numeroSOAT}
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Fecha Venimiento Soat:</td>
                              <td>
                                {" "}
                                {conductor.vehiculoInhabilitado.fechavencSOAT}
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Numero Poliza Responsable:</td>
                              <td>
                                {
                                  conductor.vehiculoInhabilitado
                                    .nroPoliza_ResponCivil
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Numero Revision Tecnomecanica:</td>
                              <td>
                                {
                                  conductor.vehiculoInhabilitado
                                    .nroRev_TecMecanica
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Fecha vencimiento Tecnomecanica:</td>
                              <td>
                                {conductor.vehiculoInhabilitado.fechaVenc_Tecno}
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="col-12 col-xl-6">
                          <table className="w-100 text-center">
                            <tr>
                              <th colSpan="2" className="head-subtitle className='subtitulo' text-white">
                                Conductores
                              </th>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Nombre:</td>
                              <td>
                                {conductor.unicoConductorInhabilitado.nombreCON}
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Apellido:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .apellidoCON
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Tipo Documento:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .tipo_DocumentoCON
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Numero Documento:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .nroDocumentoCON
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Nacionalidad:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .nacionalidadCON
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Fecha Nacimiento:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .fechaNacimientoCON
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Correo Electronico:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .correoElectronicoCON
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Correo Electronico Recuperacion:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .correoRecuperacionCON
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Usuario:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .usuarioCON
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Numero Telefono:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .nroTelefonoCON
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Numero Licencia:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .nroLicenciaCON
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Pregunta Seguridad:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .preguntaSeguridadCON
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Respuesta Seguridad:</td>
                              <td>
                                {
                                  conductor.unicoConductorInhabilitado
                                    .respuestaSeguridadCON
                                }
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <div className="row propietario className='subtitulo'">
                        <div className="col-12 col-md-7">
                          <table className="w-100 text-center">
                            <tr>
                              <th colSpan="2" className="head-subtitle text-white">
                                Datos propietario
                              </th>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Nombre:</td>
                              <td>
                                {conductor.propietarioInhabilitado.nombrePRO}
                              </td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Apellido:</td>
                              <td>
                                {conductor.propietarioInhabilitado.apellidoPRO}
                              </td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Numero Documento:</td>
                              <td>
                                {
                                  conductor.propietarioInhabilitado
                                    .NroDocumentoPRO
                                }
                              </td>
                            </tr>

                            <tr>
                              <td className='subtitulo'>Direcion residencia:</td>
                              <td>
                                {" "}
                                {
                                  conductor.propietarioInhabilitado
                                    .DireccionResidenciaPRO
                                }
                              </td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Ciudad:</td>
                              <td>
                                {conductor.propietarioInhabilitado.ciudadPRO}
                              </td>
                            </tr>
                            <tr>
                              <td className='subtitulo'>Numero Telefono:</td>
                              <td>
                                {
                                  conductor.propietarioInhabilitado
                                    .NroTelefonoPRO
                                }
                              </td>
                            </tr>
                          </table>
                        </div>
                        <hr />
                        <div className="col-12 text-center">
                          <div className="mt-2">
                            <button
                              className="btn bg-blue modal-botones mb-2"
                              onClick={() => {
                                Swal.fire({
                                  title:
                                    "¿Seguro que desea habilitar el Conductor?",
                                  icon: "question",
                                  html: `<p>${conductor.unicoConductorInhabilitado.nombreCON} ${conductor.unicoConductorInhabilitado.apellidoCON}</p>`,
                                  showDenyButton: true,
                                  denyButtonText: "No",
                                  confirmButtonText: "Si",
                                }).then((response) => {
                                  if (response.isConfirmed) {
                                    
                                     HabilitarConductor(
                                      conductor.unicoConductorInhabilitado._id);
                                  }
                                });
                              }}
                            >
                              Habilitar
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default MasDatosInhabilitado;
