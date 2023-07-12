import logo from "../../assets/icons/horizontal.jpg";
import Footer from "./Footer";
import "../../css/style.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { useState } from "react";

function Header() {
  const activeLink = "active_header";
  const inactiveLink = "inactive_header";

  const rouerterlink = useLocation();
  const { pathname } = rouerterlink;

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header>
        <nav
          className="navbar d-flex navbar-expand-lg nav-menu navbar-light fixed-top pt-2 bg-white"
          data-navbar-on-scroll="data-navbar-on-scroll"
        >
          <div className="container-fluid">
            <NavLink
              className=" w-sm-100 w-md-25 logonav position-md-absolute left-md-5"
              to="/"
            >
              <img
                src={logo}
                alt=""
                className="position-md-relative w-sm-100 w-md-75"
              ></img>
            </NavLink>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleMenuClick}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link links_headaer"
                    aria-current="page"
                    id={pathname === "/" ? activeLink : inactiveLink}
                    to="/"
                    onClick={handleLinkClick}
                  >
                    <p>Inicio</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link links_headaer"
                    id={pathname === "/about" ? activeLink : inactiveLink}
                    to="/about"
                    onClick={handleLinkClick}
                  >
                    <p>Acerca de Nosotros</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link links_headaer"
                    id={pathname === "/contactos" ? activeLink : inactiveLink}
                    to="/contactos"
                    onClick={handleLinkClick}
                  >
                    <p>Contactos</p>
                  </NavLink>
                </li>
              </ul>
              <div className="ps-lg-3">
                <NavLink
                  to={"/login"}
                  className="btn btn-lg btn-primary rounded-pill mx-1 order-0 fs-6 me-5"
                >
                  Inicio Sesion
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Suspense
        fallback={
          <section>
            <div className="container-loaders">
              <span className="loader1"></span>
              <div className="loader-title">
                <span className="loader2">T R A M &nbsp; </span>
              </div>
              <span className="slogan">Transporte & Movilidad</span>
            </div>
          </section>
        }
      >
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
}

export default Header;
