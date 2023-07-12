import React from "react";
import EmpresaHabilitadosItems from "./EmpresaHabilitadosItems";
import img_pen from '../../../../assets/icons/empresa_habiltado.png';

function EmpresaHabilitados({ data }) {
 
  return (
    <div className="row">
      <div className="col-12">
        <div className="card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-blue-head head-title border-radius-lg">
              <h4 className="text-light d-flex align-items-center"><img className='imagen-titulo' src={img_pen} alt=""/> Clientes Habilitados</h4>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <tbody>
                  <EmpresaHabilitadosItems data={data} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpresaHabilitados;
