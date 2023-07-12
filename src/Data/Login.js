import axios from "axios";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";
const URL = "https://backend-tramo.vercel.app/";

export const authUsuarios = async ({ correo, contrasena }, navigate) => {
  try {
    const response = await axios.post(`${URL}auchAdmin`, {
      correo,
      contrasena,
    });

    if (response.status === 200 && response.data) {
      Swal.fire({
        title: response.data.messagge,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        const authToken = response.data.token;
        localStorage.setItem("token", authToken);
         const usuario=jwtDecode(authToken);
         localStorage.setItem("name", usuario.nameAdmin)
        location.href= "/dashboard";
       
      });
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
