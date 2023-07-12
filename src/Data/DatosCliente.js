import axios from "axios";
import Swal from "sweetalert2";
const URL="https://backend-tramo.vercel.app/"

/**
 * |===================================|
 *! |==     DATOS CLIENTE EMPRESA    ==|
 * |===================================|
 */

{
  /!*Datos  cliente  Empresa Habilitados */;
}
export const EmpresasHabilitadas = async () => {
  try {
    const { data } = await axios.get(`${URL}admin/datosClientesEmpresaHB`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

{
  /!*Inhabilitar Empresa  */;
}
export const InhabilitarEmpresa = async (data,getid) => {
  const { motivoInhabilitadoPJU } = data;
  console.log(data);
  try {
    const response = await axios.put(
      `${URL}admin/datosClientesEmpresaHB/${getid}`,
      { motivoInhabilitadoPJU }
    );
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Inhabilitado Correctamente",
        showConfirmButton:false,

        timer: "2000",
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

{
  /!*Datos  cliente  Empresa Inhabilitados */;
}
export const EmpresasInhabilitadas = async () => {
  try {
    const { data } = await axios.get(`${URL}admin/datosClientesEmpresaIN`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
{
  /!*Habilitar Empresa  */;
}
export const habilitarEmpresa = async (_id) => {
  try {
    const response = await axios.put(
      ` ${URL}admin/datosClientesEmpresaIN/${_id}`
    );
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Habilitado Correctamente",
        showConfirmButton:false,

        timer: "2000",
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
/**
 * |===================================|
 *! |==     DATOS CLIENTES NATURAL    ==|
 * |===================================|
 */

{
  /!*Datos  cliente Natural  */;
}
export const loadClienteHabilitados = async () => {
  try {
    const { data } = await axios.get(`${URL}admin/datosClientesNaturalHB`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

{
  /!*Inhabilitar  cliente Natural  */;
}
export const InhabilitarCliente = async (motivoInhabilitadoPNA, getid) => {
  try {
    const response = await axios.put(
      `${URL}admin/datosClientesNaturalHB/${getid}`,
      { motivoInhabilitadoPNA }
    );
      console.log(response);
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Inhabilitado Correctamente",
        showConfirmButton:false,
        timer:1500,
      }).then(()=>{
      location.reload();

      })
    }
  } catch (error) {
    if (error.response.status===400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};

{
  /!*Datos de los clientes Inhabilitados */;
}
export const loadClienteInhabilitados = async () => {
  try {
    const { data } = await axios.get(`${URL}admin/datosClientesNaturalIN`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

{
  /!*Habilitar Cliente Natural */;
}
export const habilitarCliente = async (_id) => {
  try {
    const response = await axios.put(
      `${URL}admin/datosClientesNaturalIN/${_id}`
    );
    console.log(response);
    if (response.status === 200) {
      location.reload();
      Swal.fire({
        icon: "success",
        title: "Habilitado Correctamente",
        timer: "2000",
        showConfirmButton:false,
        timer:1500,
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
