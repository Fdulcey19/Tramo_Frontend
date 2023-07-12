import logo from "../assets/icons/horizontal.jpg";
import login from "../assets/ilustraciones/1.png";
import loading from "../assets/icons/cargando.gif";
import back from "../assets/icons/back.png";
import { Link, useNavigate } from "react-router-dom";
import "../css/styleAdmin.css";
import { useState } from "react";
import { authUsuarios } from "../Data/Login";

function Login() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    correo: "",
    contrasena: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Estado de carga del botón

  const handleInputChange = ({ target }) => {
    setdata({
      ...data,
      [target.name]: target.value,
    });
  };

  function handle(event) {
    event.preventDefault();
  }

  const handleLogin = () => {
    setIsLoading(true); // Establecer estado de carga al iniciar sesión
    authUsuarios(data, navigate)
      .then(() => {
        setIsLoading(false); // Establecer estado de carga a false después de recibir la respuesta 200
      })
      .catch((error) => {
        setIsLoading(false); // Establecer estado de carga a false en caso de error
        console.log(error);
      });
  };

  return (
    <div className="containerp  " style={{ height: "100vh" }}>
      <div className="container w-75 shadow-login rounded-4">
        <div className="row movil">
          <div className="col-sm-12 col-lg-6 colorlogin">
            <div className="card-body p-md-2 mx-md-4 movilP ">
             <a href="/" className="back"> <img src={ back} className=" back2" style={{width:"24px"}} alt="" /><span className="volver">Volver</span></a>
              <h4 className="mb-5 mt-3 text-center fw-bold text-light">
                Sesión De Administrador
              </h4>
              <form autoComplete="on" onSubmit={handle}>
                <div className="form mb-4 text-light">
                  <label className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    onChange={handleInputChange}
                    name="correo"
                    id="form-label"
                    className="form-control p-3"
                    placeholder="Ingrese correo electrónico"
                    required
                  />
                </div>

                <div className="form- mb-5 text-light">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    onChange={handleInputChange}
                    name="contrasena"
                    id="contrasena"
                    className="form-control p-3"
                    placeholder="Ingrese la contraseña"
                    required
                  />
                </div>

                <div className="d-grid gap-2 col-12 mx-auto text-center pt-1 mb-5 pb-1 mt-4">
                  {isLoading ? ( // Mostrar solo el gif de carga si isLoading es true
                    <img
                      src={loading}
                      style={{ width: "32px", scale:"1.5"}}
                      className="loading-animation mx-auto rounded-circle"
                      alt="Cargando..."
                    />
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-iniciar-sesion text-white gradient-custom-button p-2 w-100 pb-2"
                      onClick={handleLogin}
                    >
                      Iniciar sesión
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="d-none d-sm-flex col-lg-6 contan1 flex-column d-flex align-items-end justify-content-end">
            <div className="d-flex mx-auto">
              <img
                src={login}
                className="d-none flotante d-sm-block mb-5"
                style={{ maxWidth: "270px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
