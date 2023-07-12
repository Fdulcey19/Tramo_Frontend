import React from 'react'
import { updateSolicitudesPendientes } from '../../../../Data/Solicitudes';
import Swal from "sweetalert2";

function MasDatos({data}) {
  return (
    <div
      className="modal fade"
      id="mas-datos"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-xl" id="modal">
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
                    <div className="col-12 head-title text-white mb-1">
                      DATOS CONDUCTOR
                    </div>
                    <div className="col-12 col-xl-6 ps-4 pt-2">
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
                            <img
                              src={conductor.imagenesSolicitud.FotoFrontal}
                              className="d-block w-100"
                              alt=""
                            />
                          </div>
                          <div className="carousel-item" data-bs-interval="2000">
                            <img
                              src={conductor.imagenesSolicitud.FotoVolco}
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={conductor.imagenesSolicitud.Fotolateral_Der}
                              className="d-block w-100"
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
                          <th colspan="2" className="head-subtitle text-white">
                            Datos Tenedor
                          </th>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Nombre:</td>
                          <td>{conductor.tenedorSolicitud.nombreTE}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Apellido:</td>
                          <td>{conductor.tenedorSolicitud.apellidoTE}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Numero Documento:</td>
                          <td>{conductor.tenedorSolicitud.apellidoTE}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Direccion residencia:</td>
                          <td>{conductor.tenedorSolicitud.DireccionResidenciaTE}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Ciudad:</td>
                          <td>{conductor.tenedorSolicitud.ciudadTE}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Telefono:</td>
                          <td>{conductor.tenedorSolicitud.NroTelefonoTE}</td>
                        </tr>
                      </table>
                      <table className="w-100 text-center">
                        <tr>
                          <th colspan="2" className="head-subtitle text-white">
                            Contacto Emergencia
                          </th>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Nombre:</td>
                          <td>{conductor.contactoEmergenciaSolicitud.nombreCEM}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Apellido:</td>
                          <td>{conductor.contactoEmergenciaSolicitud.apellidoCEM}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Numero Documento:</td>
                          <td>{conductor.contactoEmergenciaSolicitud.NroDocumentoCEM}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Correo Electronico:</td>
                          <td>{conductor.contactoEmergenciaSolicitud.CorreoElectricoCEM}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-xl-6">
                      <table className="w-100 text-center">
                        <tr>
                          <th colspan="2" className="head-subtitle text-white">
                            Vehículo
                          </th>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Placa Vehiculo:</td>
                          <td>{conductor.vehiculoSolicitud.placaVehiculo}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Marca:</td>
                          <td>{conductor.vehiculoSolicitud.marca}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>modelo:</td>
                          <td>{conductor.vehiculoSolicitud.modelo}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Numero Ejes:</td>
                          <td>{conductor.vehiculoSolicitud.numeroEjes}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Tipo Vehiculo:</td>
                          <td>{conductor.vehiculoSolicitud.tipoVehiculo}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Fecha Vencimiento:</td>
                          <td>{conductor.vehiculoSolicitud.fechavencSOAT}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Traccion Vehiculo:</td>
                          <td> {conductor.vehiculoSolicitud.traccionVeh}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Placas Trailer:</td>
                          <td> {conductor.vehiculoSolicitud.placasTrailer} </td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Peso Vacio:</td>
                          <td>{conductor.vehiculoSolicitud.pesoVacio}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Tipo Combustible:</td>
                          <td>{conductor.vehiculoSolicitud.CombustibleVeh}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Numero Licencia:</td>
                          <td>{conductor.vehiculoSolicitud.numeroLicenciaVeh}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Numero Soat:</td>
                          <td>{conductor.vehiculoSolicitud.numeroSOAT}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Fecha Venimiento Soat:</td>
                          <td> {conductor.vehiculoSolicitud.fechavencSOAT}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Numero Poliza Responsable:</td>
                          <td>{conductor.vehiculoSolicitud.nroPoliza_ResponCivil}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Numero Revision Tecnomecanica:</td>
                          <td>{conductor.vehiculoSolicitud.nroRev_TecMecanica}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Fecha vencimiento Tecnomecanica:</td>
                          <td>{conductor.vehiculoSolicitud.fechaVenc_Tecno}</td>
                        </tr>
                      </table>
                    </div>
                    <div className="col-12 col-xl-6">
                      <table className="w-100 text-center">
                        <tr>
                          <th colspan="2" className="head-subtitle text-white">
                            Conductores
                          </th>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Nombre:</td>
                          <td>{conductor.conductorSolicitud.nombreCON}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Apellido:</td>
                          <td>{conductor.conductorSolicitud.apellidoCON}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Tipo Documento:</td>
                          <td>{conductor.conductorSolicitud.tipo_DocumentoCON}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Numero Documento:</td>
                          <td>{conductor.conductorSolicitud.nroDocumentoCON}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Nacionalidad:</td>
                          <td>{conductor.conductorSolicitud.nacionalidadCON}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Fecha Nacimiento:</td>
                          <td>{conductor.conductorSolicitud.fechaNacimientoCON}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Correo Electronico:</td>
                          <td>{conductor.conductorSolicitud.correoElectronicoCON}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Correo Electronico Recuperacion:</td>
                          <td>{conductor.conductorSolicitud.correoRecuperacionCON}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Usuario:</td>
                          <td>{conductor.conductorSolicitud.usuarioCON}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Numero Telefono:</td>
                          <td>{conductor.conductorSolicitud.nroTelefonoCON}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Numero Licencia:</td>
                          <td>{conductor.conductorSolicitud.nroLicenciaCON}</td>
                        </tr>
                        
                        <tr>
                          <td className='subtitulo'>Pregunta Seguridad:</td>
                          <td>{conductor.conductorSolicitud.preguntaSeguridadCON}</td>
                        </tr>

                        <tr>
                          <td className='subtitulo'>Respuesta Seguridad:</td>
                          <td>{conductor.conductorSolicitud.respuestaSeguridadCON}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="row propietario">
                    <div className="col-12 col-md-7">
                      <table className="w-100 text-center mb-3">
                        <tr>
                          <th colspan="2" className="head-subtitle text-white">
                            Datos Propietario
                          </th>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Nombre:</td>
                          <td>{conductor.propietarioSolicitud.nombrePRO}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Apellido:</td>
                          <td>{conductor.propietarioSolicitud.apellidoPRO}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Numero Documento:</td>
                          <td>{conductor.propietarioSolicitud.NroDocumentoPRO}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Direcion residencia:</td>
                          <td> {conductor.propietarioSolicitud.DireccionResidenciaPRO}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Ciudad:</td>
                          <td>{conductor.propietarioSolicitud.ciudadPRO}</td>
                        </tr>
                        <tr>
                          <td className='subtitulo'>Numero Telefono:</td>
                          <td>{conductor.propietarioSolicitud.NroTelefonoPRO}</td>
                        </tr>
                      </table>
                    </div>
                    <hr />
                    <div className="col-12 text-center">
                      <button type="button" className="btn bg-blue modal-botones me-2 btn-sm"
                      onClick={() => {
                        Swal.fire({
                          title: "¿Seguro que desea Aceptar la solicitud?",
                          icon: "question",
                          html: `<p>${conductor.conductorSolicitud.nombreCON} ${conductor.conductorSolicitud.apellidoCON}</p>`,
                          showDenyButton: true,
                          denyButtonText: "No",
                          confirmButtonText: "Si",
                        }).then((response) => {
                          if (response.isConfirmed) {
                            Swal.fire({
                              icon: "success",
                              title: "Habilitado Correctamente",
                            });
                            button: updateSolicitudesPendientes(conductor.conductorSolicitud._id);
                          }
                        });
                      }}>
                        Aceptar
                      </button>
                      <button
                        type="button"
                        className="btn bg-red modal-botones  btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#escribir-motivo-rechazo"
                      >
                        Rechazar
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default MasDatos