function Head({ subTitulos }) {
    return (
      <>
        {subTitulos.map((name, index) => (
          <th
            key={index}
            className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 cabecera_info"
          >
            {name}
          </th>
        ))}
      </>
    );
  }
  
  export default Head;