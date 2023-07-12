import React, { useEffect, useState } from "react";
import { getSolicitudesPendientes } from "../../../Data/Solicitudes";
import ItemsPen from "./ItemsPen";
import img_pen from "../../../assets/icons/pendiente.png";

function Pendientes() {
  const [SolicitudesPendientes, setSolicitudesPendientes] = useState([]);

  useEffect(() => {
    const loadSolicitudesPendientes = async () => {
      let response = await getSolicitudesPendientes();
      setSolicitudesPendientes(response);
    };

    loadSolicitudesPendientes();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-blue-head head-title shadow-primary border-radius-lg">
                <h4 className="text-light d-flex align-items-center">
                  <img
                    className="imagen-titulo"
                    src={img_pen}
                    alt=""
                    style={{ width: "24px", height: "24px", opacity: "90%" }}
                  />{" "}
                  Solicitudes Pendientes
                </h4>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <ItemsPen SolicitudesPendientes={SolicitudesPendientes} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pendientes;
