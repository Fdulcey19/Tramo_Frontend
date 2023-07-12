import testimonio1 from "../../assets/icons/test1.png";
import testimonio2 from "../../assets/icons/test2.png";
import testimonio3 from "../../assets/icons/test3.jpeg";
import comillas from "../../assets/icons/comillas.png";
function Testimonios() {
  return (
    <>
      <div className="container-fluid w-100  my-5 font">
        <h1 className="text-center mt-5 fw-bold ">TESTIMONIOS</h1>
        <div
          id="carouselExampleControls"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="card m-auto my-4 card-testimonios"
                style={{ maxWidth: "650px" }}
              >
                <img className="comillas-img" src={comillas} alt="" />
                <div className="card-body">
                  <p className="card-text px-5 mt-3 ">
                    "Mi experiencia con TRAMO ha sido increíble. Esta plataforma
                    revoluciona la solicitud de servicios de transporte de
                    carga, beneficiando tanto a los conductores como a los
                    usuarios. Desde que la adopté, mis ingresos se han
                    incrementado y constantemente recibo nuevas solicitudes de
                    clientes"
                  </p>
                </div>
                <img
                  src={testimonio1}
                  className="card-img-top m-auto w-25 rounded-circle"
                  style={{ objectFit: "cover" }}
                  alt="..."
                />
                <h5 className="fw-bold text-center">Sebastian Herrera</h5>
                <h6 className="fw-lighter text-center">Conductor</h6>
              </div>
            </div>

            <div className="carousel-item">
              <div
                className="card m-auto my-4 card-testimonios"
                style={{ maxWidth: "650px" }}
              >
                <img className="comillas-img" src={comillas} alt="" />
                <div className="card-body">
                  <p className="card-text px-5 mt-3 ">
                    "TRAMO ha transformado por completo mi experiencia como
                    conductor. Ha revolucionado la forma en que se solicitan los
                    servicios de carga, beneficiando tanto a conductores como a
                    usuarios. Desde que la adopté, mis ingresos han aumentado
                    significativamente y constantemente recibo nuevas
                    solicitudes.
                  </p>
                </div>
                <img
                  src={testimonio2}
                  className="card-img-top m-auto w-25 rounded-circle"
                  alt="..."
                />
                <h5 className="fw-bold text-center">Francisco Matinez</h5>
                <h6 className="fw-lighter text-center">Conductor</h6>
              </div>
            </div>

            <div className="carousel-item">
              <div
                className="card m-auto my-4 card-testimonios"
                style={{ maxWidth: "650px" }}
              >
                <img className="comillas-img " src={comillas} alt="" />
                <div className="card-body">
                  <p className="card-text px-5  mt-3">
                    "TRAMO ha cambiado por completo mi forma de trabajar como
                    conductor. Ahora tengo más clientes y mis ingresos se han
                    multiplicado. Esta plataforma es una auténtica revolución en
                    el sector del transporte de carga. ¡No puedo estar más
                    satisfecho con los resultados que he obtenido desde que la
                    utilizo!"
                  </p>
                </div>
                <img
                  src={testimonio3}
                  className="card-img-top m-auto w-25 rounded-circle"
                  alt="..."
                />

                <h5 className="fw-bold text-center">Marcelo Pelaez</h5>
                <h6 className="fw-lighter text-center">Conductor</h6>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Testimonios;
