const URL = "https://backend-tramo.vercel.app/natural/verHistoriales";
const URL2 = "https://backend-tramo.vercel.app/natural/remesa";
// HISTORIAL 

import axios from "axios";
  
  export const getHistorial = async () => {
    const response = axios.get(URL);
    return response;
  };

  //remesa

  export const getRemesa = async (id) => {
    console.log(id)
    const {data} = await axios.get(`${URL2}/${id}`);
    console.log(data)
    return data;
  };