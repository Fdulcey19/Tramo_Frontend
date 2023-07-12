import React from "react";
import { Link } from "react-router-dom";
import imagen from "../assets/ilustraciones/img1.svg";
function Pagina404() {
  return (
    <>
    <div>
      <div className="container mt-5 d-flex justify-content-center">
        <img width={"60%"} className="mt-5" src={imagen} alt="" />
      </div>
      <h1 className=" text-center">La página que ha solicitado no se encuentra disponible</h1>
      <div className="boton mx-5 d-flex justify-content-center">
        <Link to={"/"} className="btn btn-primary p-2 fs-5 ">Volver atras</Link>
      </div>
      </div>
    </>
  );
}

export default Pagina404;
