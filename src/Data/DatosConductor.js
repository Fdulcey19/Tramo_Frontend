import axios from "axios";
import Swal from "sweetalert2";
const URL = "https://backend-tramo.vercel.app/";

export const CondutoresHabilitados = async () => {
  try {
    const { data } = await axios.get(
      `${URL}admin/conductoresHabilitados`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const CondutoresHabilitado = async (id) => {
  try {
    const { data } = await axios.get(
      `${URL}admin/conductoresHabilitados/${id}`
    );
    
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const CondutoresInhabilitados = async () => {
  try {
    const { data } = await axios.get(
      `${URL}admin/conductoresInhabilitados`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const CondutoresInhabilitado = async (id) => {
  try {
    const { data } = await axios.get(
      `${URL}admin/conductoresInhabilitados/${id}`
    );
    
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const InhabilitarConductor = async (motivoInhabilitadoCON, getid) => {
  try {
    const response = await axios.put(
      `${URL}admin/inhabilitarConductor/${getid}`,
      { motivoInhabilitadoCON }
    );

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Inhabilitado Correctamente",
        timer:1500,
        showConfirmButton:false,
      }).then(()=>{
        location.reload();

      })
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};
export const HabilitarConductor = async (_id) => {
  try {
    const response = await axios.put(
      `${URL}admin/habilitarConductor/${_id}`
    );
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Habilitado Correctamente",
        timer:1500,
        showConfirmButton:false,
      }).then(()=>{
        location.reload();

      })
 
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
