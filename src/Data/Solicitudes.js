import axios from "axios";
import Swal from "sweetalert2";
const URL = "https://backend-tramo.vercel.app/";

/* SOLICITUDES PENDIENTES */

export const getSolicitudesPendientes = async () => {
  try {
    const { data } = await axios.get(`${URL}admin/solicitudesPendiente`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
/* SOLICITUDES PENDIENTES ID*/

export const getSolicitudesPendientesid = async (id) => {
  try {
    const { data } = await axios.get(`${URL}admin/solicitudesPendiente/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

{
  /* SOLICITUDES  ACTUALIZAR */
}

export const updateSolicitudesPendientes = async (_id) => {
  try {
    const response = await axios.put(`${URL}admin/aceptarSoli/${_id}`);
    console.log(response)
    if (response.status === 200) {
      window.location.reload();
     
    }
  } catch (error) {
    console.log(error);
  }
};

{
  /* SOLICITUDES  ACTUALIZAR RECHAZAR */
}
export const putSolicitudesRechazar = async (data) => {
  const { _id, motivoRechazoCON } = data;
  try {
    const response = await axios.put(`${URL}admin/rechazarSolicitud/${_id}`, {
      motivoRechazoCON,
    });
    console.log(response)
    if (response.status === 200) {
      window.location.reload();
    }
  } catch (error) {
    if (error.response.data) {
      Swal.fire({
        icon: "error",
        title: response.data,
      });
    }
  }
};

{
  /* SOLICITUDES  RECHAZADAS */
}

export const getSolicitudesRechazadas = async () => {
  const { data } = await axios.get(`${URL}admin/solicitudesRechazadas`);
  return data;
};

{
  /* SOLICITUDES  RECHAZADAS ID */
}

export const getSolicitudesRechazadasid = async (id) => {
  try {
    const { data } = await axios.get(`${URL}admin/solicitudesRechazadas/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
