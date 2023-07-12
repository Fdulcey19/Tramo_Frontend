import "../../css/style.css";

import imagen1me from "../../assets/ilustraciones/1.png";
import imagen2me from "../../assets/ilustraciones/3.png";
import imagen3me from "../../assets/ilustraciones/5.png";
import huawei from "../../assets/icons/huawey.jpg";
import imagen2 from "../../assets/icons/arrow-right.png";
import company_1 from "../../assets/sponsor/company-1.png";
import company_2 from "../../assets/sponsor/company-2.png";
import company_3 from "../../assets/sponsor/company-3.png";
import company_4 from "../../assets/sponsor/company-4.png";

import icon1 from "../../assets/icons/fast-performance.png";
import icon2 from "../../assets/icons/prototype.png";
import icon3 from "../../assets/icons/vector.png";
import acerca from "../../assets/ilustraciones/acerca.png";
import appstore from "../../assets/icons/app-store.png";
import playstore from "../../assets/icons/google-play.png";
import apk from "../../assets/icons/apk.png";


import { BrowserRouter as Router,  Link } from 'react-router-dom';
import Testimonios from "./Testimonios";
import AOS from "aos";
import "aos/dist/aos.css";
//  import hero from ' ../../assets/ilustraciones/hero-bg.png'
import { lazy, useEffect } from "react";


/* Impor Restaurar <Pagina></Pagina */
import restaurar from "./VolverPosition";
import { Helmet } from "react-helmet";


function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  restaurar()


 

  return (
    
    <>
   

      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Helmet>
      <section className="index_inicio fond touch1 py-md-5 " id="home ">
        <div className="w-100 px-5 mt-5 container   ">
          <div
            className="row align-items-center mt-5 py-md-5   w-100  "
            data-aos="fade-up"
          >
            <div className="col-md-3 arreglar3   mt-5 col-lg-6 order-md-1 text-center ">
              <img
                className="img-fluid flotante"
                src={imagen1me}
                style={{ maxWidth: "290px" }}
                alt=""
              ></img>
            </div>
            <div
              className="col-md-9 arreglar2  col-lg-6 text-center text-md-start "
              data-aos="fade-up"
            >
              <span className=" badge bg_gray rounded-pill text-dark align-items-center d-flex flex-row-reverse justify-content-end mx-auto mx-md-0 ps-0 w-100 w-sm-50 w-md-75 w-xl-0 my-3   ">
                APP #1 Transporte De Carga 2023
                <img
                  className="img-fluid float-start me-1   "
                  src={imagen2}
                  alt=""
                ></img>
              </span>
              <h1 className="mb-4 arreglar1 display-5 fw-bold lh-sm dark pt-3">
                TRAMO <br className="d-block d-lg-none d-xl-block d5 " />
                <span className="arreglar display-6 fw-bold ">
                  Transporte y Movilidad
                </span>
              </h1>
              <p className="mt-3 mb-4 fs-5   gray">
                Solicita tu servicio desde cualquier lugar{" "}
                <br className="d-none d-lg-block fw-bold" />
                Descargando nuestra aplicación, disponible para Android y IOS
              </p>
              <div className="text-center text-md-start">
                <Link  className="btn btn-lg btn-success rounded-pill hover-top bg_green mb-4 movilstore"
                  onClick={() => document.getElementById('descarga-con').scrollIntoView({ behavior: "smooth" })}>
                      Descarga Gratis
                </Link>
               
              </div>
            </div>
          </div>
          {/* <img src={hero} className="w-100 " alt="" /> */}
        </div>
        <div className="d-flex justify-content-center   w-100 "></div>
      </section>

      {/* fin section */}

      {/* sponsor */}
      <section className="py-5 touch1  ">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto align-items-center text-center">
              <p className="mb-5 mt-1 text-secondary fs-5">
                Empresas que trabajan con nosotros
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-center justify-content-lg-around efectos">
            <div
              className="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center efecto1"
              data-aos="fade-up"
            >
              <img src={company_1}  alt=""></img>
            </div>
            <div
              className="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center efecto2"
              data-aos="fade-up"
            >
              <img src={company_2}  alt=""></img>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center efecto3" data-aos="fade-up">
              <img src={company_3}  alt=""></img>
            </div>
            <div
              className="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center efecto4"
              data-aos="fade-up"
            >
              <img src={company_4}  alt=""></img>
            </div>
            <div
              className="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center efecto5"
              data-aos="fade-up"
            >
              <img src={company_1}  alt=""></img>
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* Caracteristicas de la APP */}
      <section className="py-1 touch1" id="features">
        <div className="container-lg pt-2 mt-2">
          <div className="row align-items-center">
            <div
              className="col-md-4 col-lg-5 order-md-0  text-start mb-5 mb-md-0 conEmpresa"
              data-aos="fade-up"
            >
              <img
                className="img-fluid ilustracionEmpresa flotante"
                src={imagen2me}
                style={{ maxWidth: "280px" }}
                alt=""
              ></img>
            </div>
            <div className="col-md-8 col-lg-7 px-sm-5 px-md-0 text-start">
              <h6 className="fw-bold  fs-2 lh-sm text-start dark">
                Caracteristicas de la
                <br />
                App TRAMO
              </h6>
              <p className="my-4 text-secondary fs-6">
                TRAMO conecta el campo y las ciudades en una sola aplicación,
                <br className="d-none d-xl-block" />
                siendo la primera empresa con enfoque en el campo.
              </p>
              <div className="d-flex align-items-center mb-5">
                <div>
                  <img
                    className="img-fluid espaciosicons"
                    src={icon1}
                    width="90"
                    alt=""
                  ></img>
                </div>
                <div className="px-4">
                  <h5 className="fw-bold text-danger">Servicios Rapidos</h5>
                  <p className="my-4 text-secondary fs-6">
                    Encuentra los vehiculos disponibles que esten{" "}
                    <br className="d-none d-xl-block"></br> más cerca de tu
                    ubicación.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div>
                  <img
                    className="img-fluid "
                    src={icon2}
                    width="90"
                    alt=""
                  ></img>
                </div>
                <div className="px-4">
                  <h5 className="fw-bold text-primary">Ahorro</h5>
                  <p className="text-secondary fs-6">
                    Podrás ahorrar en tiempo y precios reduciendo{" "}
                    <br className="d-none d-xl-block"></br>y controlando los
                    sobreprecios en los servicios
                    <br className="d-none d-xl-block"></br> de transporte
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div>
                  <img
                    className="img-fluid "
                    src={icon3}
                    width="90"
                    alt=""
                  ></img>
                </div>
                <div className="px-4">
                  <h5 className="fw-bold text-success">
                    Desarrollo Para El Campo
                  </h5>
                  <p className="text-secondary fs-6">
                    Ofrecemos cobertura en en zonas urbanas y rurales
                    <br className="d-none d-xl-block"></br>para sacarte de
                    apuros en cualquier condición.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* Acerca de nosotros */}
      <section className="py-sm-4 fond  my-sm-2 py-md-4 my-md-5 touch1">
        <div className="container pt-md-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start offset-md-1 mb-sm-5">
              <h6 className="fw-bold display-6 dark lh-sm m-3">
                Acerca de Nosotros
              </h6>
              <p className="my-4  pe-xl-5 fs-6 font text-secondary ">
                {" "}
                TRAMO es una aplicación que conecta de forma más fácil, rapida y
                segura a las personas que requieren de un servicio de transporte
                de carga para sus productos. No solamente con enfoque en las
                ciudades, sino que también en el campo, debido a que en el
                departamento del Cauca cerca del 60% de la población pertenece a
                zonas rurales.
              </p>
              <Link
                className="btn btn-lg btn-primary rounded-pill text-center hover-top   px-4 py-2 "
                to="/about"
                role="button"
              >
                Ver Más
              </Link>
            </div>
            <div
              className="col-md-5 order-md-0 text-center text-md-start pt-sm-5"
              data-aos="fade-up"
            >
              <img
                className="img-fluid acercaImg my-md-5  flotante"
                src={acerca}
                style={{maxWidth:"400px"}}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* Testimonios */}
      <Testimonios />
      {/* fin section */}

      {/* Preguntas frecuentes */}
      <section id="faq pb-sm-5 touch1">
        <div className="container py-sm-2 pt-md-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 text-center mb-3">
              <h6 className=" fs-3 fw-bold lh-sm mb-3 display-6 dark dark py-2">
                Preguntas Frecuentes
              </h6>
              <p className="pb-3 fs-6 font text-secondary ">
                En este apartado podras encontrar todas las preguntas frecuentes
                que nuestros usuarios han echo con anterioridad. En caso de que
                no encuentres lo que buscas, contactactanos pulsando{" "}
                <Link to="/contactos#contacto">aqui</Link>
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
                      <span className="fs-6   mb-0 fw-bold text-start  dark">
                        Es posible negociar el precio del flete directamente con
                        el conductor encargado del servicio ?
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
                      Hola, buenos dias, si es posible negociar el precio del
                      flete con el conductor encargado de prestar el servicio,
                      lo puedes hacer por medio una llamada telefonica, ya que
                      tienes la posibilidad de poder acceder a los datos del
                      conductor.
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
                      <span className="mb-0 fs-6  fw-bold text-start  dark">
                        Que pasa si hay un retraso en la llegada del vehiculo
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
                      Hola, buenas tardes, en tal caso de que sucedan ese tipo
                      de situaciones, el conductor debera notificarte del por
                      que el retraso, en tal caso de que se le haga imposible
                      llegar, te debe notificar, para que asi puedas solicitar
                      otro vehiculo.
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
                        Que sucederia si el vehiculo en el cual transportaba los
                        alimentos nunca llego al lugar de destino.
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
                      En tal caso de que suceda una situacion de este tipo debes
                      de comunicarte con las autoridades pertinentes para dar
                      aviso, y brindarles toda la informacion que te brinda la
                      aplicacion en ese momento sobre el conductor y el vehiculo
                      en el cual estaba prestando el servicio, tambien debes de
                      notificar con los administardores de la aplicacion para
                      que se encarguen de inhabilitar al condutor, en ese
                      momento se le notificara al conductor del por que la
                      suspencion
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
                        Como hago para tener la seguridad de que los vehiculos y
                        conductores que estan regristrados a la app cumplen con
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
                      Los administradores de TRAMO se encaragn de verificar que
                      cada solicitud que es enviada a la aplicacion, que los
                      documentos de la persona se encuentren en regla igual que
                      los documentos del vehiculo, despues de haber revisado y
                      comprobar que se encuentren en regla, sera aprobado para
                      que pueda prestar sus servicios.
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
                      Tengo la posibilidad de escoger el vehiculo de acuerdo a mis nesecidades?
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
                    Hola, buenas tardes, si es posible escoger el vehiculo de acuerdo a tus nesecidades, y al lugar geografico donde te encuentres.
    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* section descarga */}
     
      <section className="pt-sm-3 mt-md-5 pt-sm-2 pt-md-5  fond touch1" id="descarga-con">
      
        <div className="container mt-sm-3 mt-md-5 ">
          <div className="row align-items-center ">
            <div className="col-md-5 col-lg-5  order-md-1 text-center z-index-2 cta-image " data-aos="fade-up" >
              <img
                className="img-fluid mb-4 mb-md-0  ilustracion  flotante"
                src={imagen3me}
                style={{ maxWidth: "270px" }}
                alt=""
              ></img>
            </div>
            <div className="col-md-7 col-lg-7 text-center text-md-start">
              <h1 className="display-5 fw-bold lh-sm mt-md-8  dark">
                Descarga La App De Tramo
              </h1>
              <p className="my-4 fs-5 text-secondary">
                {" "}
                El auge de los dispositivos moviles transforma la forma en que
                consumimos informacion por completo y los mas importante del
                mundo, como facebook.
              </p>
              
              <div className=" justify-content-center d-md-inline-block columna centrar">
                <Link  className="pe-2 pe-sm-3 pe-md-4" to={"https://play.google.com/store/games?hl=es_CO&gl=US&pli=1"} target="_blank">
                <img
                    className="w-sm-50 w-md-50 playstore"
                    src={playstore}
                    alt=""
                  ></img>
                </Link>
                <Link  className="pe-2 pe-sm-3 pe-md-4" to={"https://www.apple.com/co/app-store/"} target="_blank">
                <img
                    className="w-sm-50 w-md-50 appstore"
                    src={appstore}
                    alt=""
                  ></img>
                </Link>
                <Link className="pe-2 pe-sm-3 pe-md-4 " to="https://drive.google.com/uc?export=download&id=1ty0XKdfloqcUf-zoPsQ69zYXnpJnb8bM" target="_blank">
                <img
                    className="w-sm-50 w-md-50 wuawei  "
                    src={apk}
                    alt=""
                  ></img>
                </Link>
               
               
              </div>
             
            </div>
          </div>
        </div>
       
      </section>
     
   
    </>
  );
}

export default Home;
