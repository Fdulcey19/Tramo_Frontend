import fondo1 from "../../assets/ilustraciones/fondo.jpg";
import fondo2 from "../../assets/ilustraciones/fondo2.jpg";
import fondo3 from "../../assets/ilustraciones/fondo3.jpg";

function SliderAbout() {
  return (
    <>
      <div className=" w-100  my-5 font">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner  ">
            <div className="carousel-item active">
              <img
                src={fondo3}
                className="d-block w-100 espacios "
                style={{ maxHeight: "94vh" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={fondo2}
                className="d-block w-100"
                style={{ maxHeight: "94vh" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={fondo1}
                className="d-block w-100"
                style={{ maxHeight: "94vh" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default SliderAbout;
