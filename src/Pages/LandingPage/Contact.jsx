import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import twitter from "../../assets/icons/twitter.svg";
import ins from "../../assets/icons/instagram.svg";
import wasap from "../../assets/icons/whatsapp.svg";
import telefonoimg from "../../assets/icons/telephone.svg";
import emailimg from "../../assets/icons/email.svg";
import celular from "../../assets/icons/telefono-inteligente.gif";
import Preguntas from "./Preguntas";
import { Link } from "react-router-dom";
/* Impor Restaurar <Pagina></Pagina */
import restaurar from "./VolverPosition.js";
import { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  restaurar();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !email || !telefono || !mensaje) {
      Swal.fire({
        icon: "warning",
        title: "Completa todos los campos",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xdovrlwb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
          telefono,
          mensaje,
        }),
      });

      if (response.ok) {
        setNombre("");
        setEmail("");
        setTelefono("");
        setMensaje("");

        Swal.fire({
          icon: "success",
          title: "Mensaje enviado con éxito",
          text:"Nos pondremos en contacto contigo lo mas pronto posible",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al enviar el formulario",
        text: error.message,
      });
    }
  };

  return (
    <>
      <section id="faq pb-sm-5 container my-5 mt-5">
        <Preguntas />
      </section>

      {/* section fin */}

      {/* Contactanos */}

      <div className="d-flex justify-content-center align-items-end mt-5">
        <img src={celular} alt="" width="68px" height="68px"></img>
        <h1
          className="fw-bold fs-2 dark lh-sm align-items-end font"
          id="contacto"
        >
          Contactanos
        </h1>
      </div>
      <div className="mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.073285212112!2d-76.5646593855345!3d2.482692857580904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300410eb607c65%3A0x614545787e90bea6!2sSENA!5e0!3m2!1ses!2sco!4v1669607479158!5m2!1ses!2sco"
          width="100%"
          height="500"
          style={{ border: "0" }}
          loading="lazy"
          fillOpacity="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <section className="contact-area font">
        <div className="container-form-contacto colorprimario  p-5">
          <div className="row">
            <div className="col-12">
              <div className="contact-content">
                <div className="row">
                  <div className="col-12 col-lg-5 ">
                    <div
                      className="contact-information wow fadeInUp"
                      data-wow-delay="400ms"
                    >
                      <div>
                        <p className="font colorsecundario fs-2 fw-bold">
                          Dejanos un mensaje
                        </p>
                        <p className="mt-30 font colortxt">
                          {" "}
                          Dejanos saber tus dudas, o inconvenientes que hayas
                          tenido durante el uso de nuestra aplicación.
                        </p>
                      </div>

                      <div>
                        <ul className="iconos-form divicons">
                          <li className="form__list-item ">
                            <a
                              target="_blank"
                              href="https://web.facebook.com/profile.php?id=100093163430662"
                              className="form__list-link"
                            >
                              <img
                                src={facebook}
                                width="24px"
                                className="mx-2"
                                alt=""
                              ></img>
                            </a>
                          </li>
                          <li className="form__list-item me-2">
                            <a
                              target="_blank"
                              href="https://www.instagram.com/tramo_oficial/"
                              className="form__list-link"
                            >
                              <img
                                src={ins}
                                width="24px"
                                className="ms-2"
                                alt=""
                              ></img>
                            </a>
                          </li>
                          <li className="form__list-item me-2">
                            <a
                              target="_blank"
                              href="https://twitter.com/Tramo_oficial"
                              className="form__list-link"
                            >
                              <img
                                src={twitter}
                                width="24px"
                                className="ms-2"
                                alt=""
                              ></img>
                            </a>
                          </li>
                          <li className="form__list-item me-2">
                            <a
                              target="_blank"
                              href="https://api.whatsapp.com/send?phone=573226178911"
                              className="form__list-link"
                            >
                              <img
                                src={wasap}
                                width="24px"
                                className="ms-2"
                                alt=""
                              ></img>
                            </a>
                          </li>
                          <li className="form__list-item me-2">
                            <a
                              target="_blank"
                              href="https://www.youtube.com/@Tramo_oficial"
                              className="form__list-link"
                            >
                              <img
                                src={youtube}
                                width="24px"
                                className="ms-2"
                                alt=""
                              ></img>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <h4 className="colorsecundario fw-bold">Contactanos</h4>
                      <div className="single-contact-info d-flex">
                        <ul className="footer__list">
                          <li className="footer__list-item">
                            <img src={emailimg} alt=""></img>
                            <a
                              target="_blank"
                              href="mailto:Tramosas2023@gmail.com"
                              className="colortxt footer__list-link ms-1"
                            >
                              Tramosas2023@gmail.com
                            </a>
                          </li>

                          <li className="footer__list-item">
                            <img
                              className="text-danger"
                              src={telefonoimg}
                              alt=""
                            ></img>
                            <a
                              target="_blank"
                              href="https://api.whatsapp.com/send?phone=573226178911"
                              className="colortxt footer__list-link ms-1"
                            >
                              +57 3226178911
                            </a>
                          </li>
                          <li className="footer__list-item">
                            <img
                              className="text-danger"
                              src={telefonoimg}
                              alt=""
                            ></img>
                            <a
                              target="_blank"
                              href="https://api.whatsapp.com/send?phone=573011800105"
                              className="colortxt footer__list-link ms-1"
                            >
                              +57 3011800105
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-7 ">
                    <div
                      className="contact-form-area wow fadeInUp mt-3 mt-lg-0"
                      data-wow-delay="500ms"
                    >
                      <form
                        action="https://formspree.io/f/xdovrlwb"
                        method="POST"
                        className="needs-validation"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <input
                          name="nombre"
                          type="text"
                          className="form-control"
                          id="nombre"
                          placeholder="Nombre"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          required
                        ></input>

                        <input
                          name="email"
                          type="email"
                          className="form-control mt-2"
                          id="email"
                          placeholder="Correo Electrónico"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        ></input>

                        <input
                          name="telefono"
                          type="number"
                          className="form-control mt-2"
                          id="telefono"
                          placeholder="Numero de telefono"
                          value={telefono}
                          onChange={(e) => setTelefono(e.target.value)}
                          required
                        ></input>

                        <textarea
                          name="mensaje"
                          className="form-control descripcion-pregunta my-2"
                          id="mensaje"
                          cols="30"
                          rows="7"
                          placeholder="Mensaje..."
                          value={mensaje}
                          onChange={(e) => setMensaje(e.target.value)}
                          required
                        ></textarea>

                        <button
                          className="btn btnhover direcciones  ultimocolor w-70  mt-30 p-2"
                          type="submit"
                        >
                          Contactanos
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
