import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/pagina404"} />;
  }
  return (
    <Suspense
      fallback={
        <section >
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
    </Suspense>
  );
}

export default PrivateRoute;
