import axios from "axios";
const URL = "https://backend-tramo.vercel.app/";

/* CONDUCTORES  DISPONIBLE*/
export const getConductoresDisponibles = async () => {
  try {
    const { data } = await axios.get(`${URL}admin/conductoresDis`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

{
  /* CONDUCTORES  SERVICIO*/
}

export const getConductoresServicio = async () => {
  try {
    const { data } = await axios.get(`${URL}admin/conductoresEnServicio`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
