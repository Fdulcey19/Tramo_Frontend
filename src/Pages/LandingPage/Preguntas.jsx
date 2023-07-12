import React from "react";
import { Link } from "react-router-dom";

function Preguntas() {
  return (
    <section id="faq pb-sm-5 " className="mt-5">
      <div className="container py-sm-2 pt-md-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 col-lg-6 text-center mb-3">
            <h6 className=" fs-3 fw-bold lh-sm mb-3 display-6 dark dark py-2">
              Preguntas Frecuentes
            </h6>
            <p className="pb-3 fs-6 font text-secondary ">
              En este apartado podrás encontrar todas las preguntas frecuentes
              que nuestros usuarios han hecho con anterioridad. En caso de que
              no encuentres lo que buscas, contactactanos pulsando{" "}
              <a href="#contacto">aquí</a>
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center ">
          <div></div>
          <div className="col-lg-9 fs-6 font text-secondary ">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="heading1">
                  <button
                    className="accordion-button bg_azul"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    <span className=" fs-6   mb-0 fw-bold text-start  dark">
                      ¿Es posible negociar el precio del flete directamente con
                      el conductor encargado del servicio?
                    </span>
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse show  "
                  id="collapse1"
                  aria-labelledby="heading1"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body  text-secondary bg_azul ">
                    Hola, buenos días, si es posible negociar el precio del
                    flete con el conductor encargado de prestar el servicio, lo
                    puedes hacer por medio una llamada telefónica, ya que tienes
                    la posibilidad de poder acceder a los datos del conductor.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="heading2">
                  <button
                    className="accordion-button collapsed bg_azul"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    <span className="mb-0 fs-6  fw-bold text-start   dark">
                      ¿Que pasa si hay un retraso en la llegada del vehículo
                      encargado de prestar el servicio?
                    </span>
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse bg_azul"
                  id="collapse2"
                  aria-labelledby="heading2"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-secondary  bg_azul">
                    Hola, buenas tardes, en tal caso de que sucedan ese tipo de
                    situaciones, el conductor deberá notificarte del porqué el
                    retraso, en tal caso de que se le haga imposible llegar, te
                    debe notificar, para que asi puedas solicitar otro vehículo.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="heading3">
                  <button
                    className="accordion-button collapsed bg_azul"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="true"
                    aria-controls="collapse3"
                  >
                    <span className="mb-0 fs-6 fw-bold text-start dark ">
                      ¿Que sucedería si el vehículo en el cual transportaba los
                      alimentos nunca llego al lugar de destino?
                    </span>
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse bg_azul"
                  id="collapse3"
                  aria-labelledby="heading3"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body  text-secondary bg_azul">
                    En tal caso de que suceda una situación de este tipo debes
                    de comunicarte con las autoridades pertinentes para dar
                    aviso, y brindarles toda la información que te brinda la
                    aplicación en ese momento sobre el conductor y el vehículo
                    en el cual estaba prestando el servicio, también debes de
                    notificar con los administradores de la aplicación para que
                    se encarguen de inhabilitar al conductor, en ese momento se
                    le notificara al conductor del porqué la suspensión
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="heading4">
                  <button
                    className="accordion-button collapsed bg_azul"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="true"
                    aria-controls="collapse4"
                  >
                    <span className="mb-0 fs-6 fw-bold text-start  dark ">
                      ¿Como hago para tener la seguridad de que los vehículos y
                      conductores que están registrados a la app cumplen con
                      toda la normativa?
                    </span>
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse4"
                  aria-labelledby="heading4"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-secondary bg_azul">
                    Los administradores de TRAMO se encargan de verificar que
                    cada solicitud que es enviada a la aplicación, que los
                    documentos de la persona se encuentren en regla igual que
                    los documentos del vehículo, después de haber revisado y
                    comprobar que se encuentren en regla, será aprobado para que
                    pueda prestar sus servicios.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="heading5">
                  <button
                    className="accordion-button collapsed bg_azul"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="true"
                    aria-controls="collapse5"
                  >
                    <span className="mb-0 fs-6 text-start fw-bold  dark">
                      ¿Tengo la posibilidad de escoger el vehículo de acuerdo a
                      mis necesidades?
                    </span>
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse5"
                  aria-labelledby="heading5"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-secondary bg_azul">
                    Hola, buenas tardes, si es posible escoger el vehículo de
                    acuerdo a tus necesidades, y al lugar geográfico donde te
                    encuentres.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preguntas;
