import React, { useContext, useEffect, useState } from "react";
import { Context } from '../store/appContext.js';

export const HomeUser = () => {
  const { store, actions } = useContext(Context);  // Acceder a acciones y estado del contexto
  const [hasAccess, setHasAccess] = useState(!!store.token);  // Verificar si el usuario tiene acceso basado en el token

  useEffect(() => {
    const token = localStorage.getItem("token");
    setHasAccess(!!token);  // Actualizar acceso cuando cambia el token
  }, [store.token]);

  // Definir la función de logout
  const handleLogout = async () => {
    const success = await actions.logout();  // Llamar a la acción de logout del contexto
    if (success) {
      window.location.href = "/login";  // Redirigir al usuario al login si el logout es exitoso
    } else {
      alert("Error al cerrar sesión. Inténtalo nuevamente.");  // Mensaje de error si el logout falla
    }
  };

  return (
    <div className="private-area p-5">
      {!hasAccess ? (
        <div className="card p-5">
          <div className="card-body">
            <h2 className="card-title">You do not have access to this section</h2>
            <p className="card-text mt-3">
              You must log in as a registered user to view the content of this page.
            </p>
          </div>
        </div>
      ) : (
        <div className="card p-5">
          <div className="card-body">
            <h2 className="card-title">Welcome to the Private Area</h2>
            <p className="card-text mt-3">
              Enjoy exclusive access to our private resources and personalized content. Feel free to explore and make the most of the tools available to you.
            </p>
            <button className="text-white text-decoration-none px-3 py-1 bg-primary rounded-4" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_NApT35W-2Ghuoc2INZFCREowZC7b99XBnw&s" alt="Welcome Image" />
        </div>
      )}
    </div>
  );
};

export default HomeUser;
