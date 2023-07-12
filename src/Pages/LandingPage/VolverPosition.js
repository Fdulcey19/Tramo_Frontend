import React, { useEffect, useState } from "react";

function restaurar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Guarda la posición del scroll cuando se sale de la página
    const handleBeforeUnload = () => {
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
      sessionStorage.setItem("scrollPosition", currentPosition.toString());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Restaura la posición del scroll al volver a la página
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      setScrollPosition(parseInt(savedPosition, 10));
      sessionStorage.removeItem("scrollPosition");
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Hace scroll a la posición almacenada
    if (scrollPosition !== 0) {
      window.scrollTo(0, scrollPosition);
    } else {
      window.scrollTo(0, 0); // Hace scroll a la parte superior de la página
    }
  }, [scrollPosition]);

  return null;
}

export default restaurar;