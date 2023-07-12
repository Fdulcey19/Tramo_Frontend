import ReactStarts from "react-stars";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Items({ data }) {
  return (
    <>
      {data.map(({ conductor }) => (
        <tr key={conductor._id} className="filas_info">
          <td>
            <div className="d-flex justify-content-center">
              <LazyLoadImage
                src={conductor.perfil.fotoperfilCON}
                className="circle-img-conductores"
                effect="blur"
              ></LazyLoadImage>
            </div>
          </td>
          <td className="text-center align-middle text-sm filas_info_corta">
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              {conductor.nombreCON} {conductor.apellidoCON}
            </p>
          </td>
          <td className="text-center align-middle text-sm">
            <span className="font-weight-bold text-xs font-weight-bold">
              {conductor.nroTelefonoCON}
            </span>
          </td>
          <td className="text-center align-middle text-sm filas_info_larga">
            <div className="d-flex justify-content-center">
              <ReactStarts
                edit={false}
                value={conductor.calificacionCON}
                size={28}
              />
            </div>
          </td>

          <td className="text-center align-middle">
            <span
              className={
                conductor.estadoCON.disponibilidadCON == 1
                  ? "estado badge badge-sm bg-success"
                  : "estado badge badge-sm bg-primary"
              }
            >
              {conductor.estadoCON.disponibilidadCON == 1
                ? "Disponible"
                : " En Servicio"}
            </span>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Items;
