import felipeD from "../../assets/Integrantes/Perfil_SF1-01.png";
import carlos from "../../assets/Integrantes/Carlos.jpg";

import jhon from "../../assets/Integrantes/JhonS.png";
import felipeS from "../../assets/Integrantes/FelipeSF.png";

import yonathan from "../../assets/Integrantes/YonatanSF.png";
import hernan from "../../assets/Integrantes/Hernan_sf.png";
import facebook from "../../assets/icons/facebook.svg";
import ins from "../../assets/icons/instagram.svg";
import wasap from "../../assets/icons/whatsapp.svg";
import { Link } from "react-router-dom";

function IntegrantesSliderGrande() {
  return (
    <>
      {/* <!-- Slider de Integrantes --> */}
      <div id="desarrolladores" className="container-fluid  font">
        <h6 className="text-center mt-5 fw-bold fs-2 dark">INTEGRANTES</h6>
        {/* <!-- Carrusell Para pantalla Grande --> */}
        <div className="d-flex justify-content-center bg-white d-none d-md-block carousel-grande">
          <div
            id="carouselExampleFade"
            className="carousel carousel-dark slide carousel-fade w-100 "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner px-5">
              {/* <!-- Primer Equipo --> */}
              <div className="carousel-item active text-center d-flex  justify-content-center  w-100">
                <div
                  className="card card-integrantes my-5"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={felipeD}
                    className="card-img-top m-auto d-block w-75"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Felipe Dulcey Idrobo</h5>
                    <h6 className="">Scrum Master</h6>
                    <ul className="d-flex redes-integrantes justify-content-center">
                      <li>
                        <a
                          className=" bg-yellow wasap"
                          target={"_blank"}
                          href="https://api.whatsapp.com/send?phone=573226178911"
                        >
                          <img
                            src={wasap}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className=" bg-yellow  instagram"
                          target={"_blank"}
                          href="https://www.instagram.com/felipe_dullcey/"
                        >
                          <img src={ins} className=" p-2 rounded mb-2" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          className=" bg-yellow facebook"
                          target={"_blank"}
                          href="https://web.facebook.com/felipe.dullcey/"
                        >
                          <img
                            src={facebook}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="ms-3  card card-integrantes my-5"
                  style={{ width: "18rem" }}
                >
                  <img
                            src={carlos}
                  
                    className="card-img-top m-auto d-block w-75"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Carlos Noguera Cordoba</h5>
                    <h6 className="">Product Owner</h6>
                    <ul className="d-flex redes-integrantes justify-content-center">
                      <li>
                        <a
                          className=" bg-yellow wasap"
                          target="_blank"
                          href="https://api.whatsapp.com/send?phone=573011800105"
                        >
                          <img
                            src={wasap}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className=" bg-yellow instagram"
                          target="_blank"
                          href="https://www.instagram.com/krlos_nc/"
                        >
                          <img src={ins} className=" p-2 rounded mb-2" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          className=" bg-yellow facebook"
                          target="_blank"
                          href="https://www.facebook.com/robertocarlos.nogueracordoba"
                        >
                          <img
                            src={facebook}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                          {" "}
                  </div>
                </div>
              </div>

              {/* <!-- Segundo Equipo --> */}
              <div className="carousel-item text-center d-flex justify-content-center  w-100">
                <div
                  className="card card-integrantes my-5"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={felipeS}
                    className="card-img-top m-auto d-block w-75"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Felipe Segura Villamarin</h5>
                    <h6 className="">Full Stack Developer</h6>
                    <ul className="d-flex redes-integrantes justify-content-center">
                      <li>
                        <a
                          className=" bg-yellow wasap"
                          target="_blank"
                          href="https://api.whatsapp.com/send?phone=573112474569"
                        >
                          <img
                            src={wasap}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className=" bg-yellow instagram"
                          target="_blank"
                          href="https://www.instagram.com/felipesegura1826/"
                        >
                          <img src={ins} className=" p-2 rounded mb-2" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          className=" bg-yellow facebook"
                          target="_blank"
                          href="https://www.facebook.com/felipesegura0"
                        >
                          <img
                            src={facebook}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="ms-3  card card-integrantes my-5"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={jhon}
                    className="card-img-top m-auto d-block w-75"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Jhon Sebastian Hurtado</h5>
                    <h6 className="">Full Stack Developer</h6>
                    <ul className="d-flex redes-integrantes justify-content-center">
                      <li>
                        <a
                          className=" bg-yellow wasap"
                          target="_blank"
                          href="https://api.whatsapp.com/send?phone=573156376672"
                        >
                          <img
                            src={wasap}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className=" bg-yellow instagram"
                          target="_blank"
                          href="https://www.instagram.com/jhonshurtado/"
                        >
                          <img src={ins} className=" p-2 rounded mb-2" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          className=" bg-yellow facebook"
                          target="_blank"
                          href="https://www.facebook.com/jhon.xat2"
                        >
                          <img
                            src={facebook}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <!-- Tercer Equipo --> */}
              <div className="carousel-item text-center d-flex justify-content-center  w-100">
                <div
                  className="card card-integrantes my-5"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={yonathan}
                    className="card-img-top m-auto d-block w-75"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Yonatan David Pechene</h5>
                    <h6 className="">Desarrollador Frontend Movil</h6>
                    <ul className="d-flex redes-integrantes justify-content-center">
                      <li>
                        <a
                          className=" bg-yellow wasap"
                          target="_blank"
                          href="https://api.whatsapp.com/send?phone=573182268916"
                        >
                          <img
                            src={wasap}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className=" bg-yellow facebook"
                          target="_blank"
                          href="https://www.facebook.com/Yonatan.suarez08"
                        >
                          <img
                            src={facebook}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="ms-3  card card-integrantes my-5"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={hernan}
                    className="card-img-top m-auto d-block w-75"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Hernan Dario Zuñiga</h5>
                    <h6 className="">Desarrollador Frontend Web</h6>
                    <ul className="d-flex redes-integrantes justify-content-center">
                      <li>
                        <a
                          className=" bg-yellow wasap"
                          target="_blank"
                          href="https://api.whatsapp.com/send?phone=573107425878"
                        >
                          <img
                            src={wasap}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
              
                      <li>
                        <a
                          className=" bg-yellow facebook"
                          target="_blank"
                          href="https://www.facebook.com/hernandario.zuniga.79"
                        >
                          <img
                            src={facebook}
                            className=" p-2 rounded mb-2"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
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
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntegrantesSliderGrande;
