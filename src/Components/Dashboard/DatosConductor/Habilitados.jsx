import ItemsHabilitados from "./ItemsHabilitados";
import img_hab from '../../../assets/icons/habilitado.png';

function Habilitados() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card my-4">
          <div className="card-header p-0 position-relative pb-3 mt-n4 mx-3 z-index-2">
            <div className="bg-blue-head head-title shadow-primary border-radius-lg">
              <h4 className="text-light d-flex align-items-center"><img className='imagen-titulo' src={img_hab} alt="" />Conductores Habilitados</h4>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-2 bottom-table">
                <tbody>
                  <ItemsHabilitados  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habilitados;
