import { Link,NavLink, Outlet, useLocation, useRoutes } from "react-router-dom";
import "../../../css/styleAdmin.css";
import volante from '../../../assets/icons/volante.png';
import campana from '../../../assets/icons/campana.png';
import ruta from '../../../assets/icons/camion.png';
import cliente from '../../../assets/icons/cliente.png';
import historial from '../../../assets/icons/historialNar.png';
import buzon from '../../../assets/icons/buzon.png';

function Sidebar() {

  const activeLink = "active_dashboard"
  const inactiveLink = "inactive_dashboard  "

  const rouerterlink = useLocation()
  const { pathname } = rouerterlink

  return (
    <>
      <Outlet />
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <NavLink className="nav-link collapsed" id={pathname === "/dashboard" ? activeLink : inactiveLink} to={"/dashboard"}>
              <img src={ruta} className="img-sidebar" alt="" />
              <span className="m-2">Conductores</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link collapsed" id={pathname.includes("/dashboard/solicitudes") ? activeLink : inactiveLink} to={"solicitudes"}>
              <img src={campana} className="img-sidebar" alt="" />
              <span className="m-2">Solicitudes</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" id={pathname.includes("/dashboard/datosconductores") ? activeLink : inactiveLink} to={"datosconductores"}>
             <img src={volante} className="img-sidebar" alt="" />
              <span className="m-2">Datos Conductores</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" id={pathname.includes("/dashboard/datoscliente") ? activeLink : inactiveLink} to={"datoscliente"}>
             <img src={cliente} className="img-sidebar" alt="" />
              <span className="m-2">Datos cliente</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" id={pathname.includes("/dashboard/historial") ? activeLink : inactiveLink} to={"historial"}>
              <img src={historial} className="img-sidebar" alt="" />
              <span className="m-2">Historial</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" id={pathname.includes("/dashboard/pqrs") ? activeLink : inactiveLink} to={"pqrs"}>
              <img src={buzon} className="img-sidebar" alt="" />
              <span className="m-2">P.Q.R.S</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
