import axios from "axios";
import Swal from "sweetalert2";
const URL = "https://backend-tramo.vercel.app/";
export const getPqrs = async () => {
  const { data } = await axios.get(`${URL}pqrs`);
  return data;
};
export const getPqrsId = async (id) => {
  const { data } = await axios.get(`${URL}pqrs/${id}`);
  return data;
};
export const udpatePqrs = async (id,respuesta) => {
  try {
    console.log(id)
    console.log(respuesta)
    const response = await axios.put(`${URL}pqrs/${id}`,{respuesta});
    if (response.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Respuesta enviada correctamente",
      }).then(() => {
        location.reload();
      });
    }
  } catch (error) {
    if (error.response.status == 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};
