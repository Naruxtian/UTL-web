import { useState } from 'react';
import imgRectora from "/src/assets/img/RectoraAspirante.jpeg"
import imgUTLogo from "/src/assets/img/utlLogo2.png"

const Navbar = ({ modulo }) => {
  const [mostrarContenidoModulo, setMostrarContenidoModulo] = useState(false);
  const [mostrarContenidoModuloM, setMostrarContenidoModuloM] = useState(false);
  const [mostrarContenidoAModulos, setMostrarContenidoAModulos] =
    useState(false);
  const [mostrarContenidoAModulosM, setMostrarContenidoAModulosM] =
    useState(false);
  const [mostrarContenidoModal, setMostrarContenidoModal] = useState(false);

  const handleMostrarContenidoModulo = () => {
    setMostrarContenidoModulo(!mostrarContenidoModulo);
  };

  const handleMostrarContenidoModuloM = () => {
    setMostrarContenidoModuloM(!mostrarContenidoModuloM);
  };

  const handleMostrarContenidoAModulos = () => {
    setMostrarContenidoAModulos(!mostrarContenidoAModulos);
  };

  const handleMostrarContenidoAModulosM = () => {
    setMostrarContenidoAModulosM(!mostrarContenidoAModulosM);
  };

  const handleMostrarContenidoModal = () => {
    setMostrarContenidoModal(true);
  };

  const handleCloseModal = () => {
    setMostrarContenidoModal(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="left-content">
          {mostrarContenidoAModulos && (
            <ul className="dropdown-inicio">
              <li>
                <a href="#">Soy Estudiante</a>
              </li>
              <li>
                <a href="#">Soy Docente</a>
              </li>
              <li>
                <a href="#">Soy Administrativo/a</a>
              </li>
              <li>
                <a href="#">Soy Empresario/a</a>
              </li>
              <li>
                <a href="#">Soy Egresado</a>
              </li>
              <li>
                <a href="#">Somos UTL</a>
              </li>
            </ul>
          )}
          <button
            className="hamburger-button d-block d-lg-none"
            onClick={handleMostrarContenidoAModulosM}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          {mostrarContenidoAModulosM && (
            <div
              className={`modal fade ${
                mostrarContenidoAModulosM ? "show" : ""
              }`}
              tabIndex="-1"
              role="dialog"
              style={{ display: mostrarContenidoAModulosM ? "block" : "none" }}
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Otros modulos</h5>
                    <button
                      className="btn btn-danger  close"
                      onClick={handleMostrarContenidoAModulosM}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                      <a href="#">Soy Estudiante</a>
                    </p>
                    <p>
                      <a href="#">Soy Docente</a>
                    </p>
                    <p>
                      <a href="#">Soy Administrativo/a</a>
                    </p>
                    <p>
                      <a href="#">Soy Empresario/a</a>
                    </p>
                    <p>
                      <a href="#">Soy Egresado</a>
                    </p>
                    <p>
                      <a href="#">Somos UTL</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="div-dropdown">
          <div className="center-content">
            {modulo === "Somos UTL" ? (
              <h1>Somos UTL</h1>
            ) : (
              <h1>Soy {modulo}</h1>
            )}
          </div>

          <button
            className="dropdown-button d-block d-lg-none"
            onClick={handleMostrarContenidoModuloM}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          {mostrarContenidoModuloM && (
            <div
              className={`modal fade ${mostrarContenidoModuloM ? "show" : ""}`}
              tabIndex="-1"
              role="dialog"
              style={{ display: mostrarContenidoModuloM ? "block" : "none" }}
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Opciones</h5>
                    <button
                      className="btn btn-danger  close"
                      onClick={handleMostrarContenidoModuloM}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                      <a href="#">CONOCE LA UTL</a>
                    </p>
                    <p>
                      <a href="#">OFERTA EDUCATIVA</a>
                    </p>
                    <p>
                      <a href="#">¿CÓMO INGRESO A ESTUDIAR EN LA UTL?</a>
                    </p>
                    <p>
                      <a href="#">CONOCENOS</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          type="button"
          className="btn btn-info"
          onClick={handleMostrarContenidoModal}
        >
          Mensaje de la Rectora
        </button>
        {mostrarContenidoModal && (
          <div
            className={`modal fade ${mostrarContenidoModal ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: mostrarContenidoModal ? "block" : "none" }}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content modal-rectora">
                <div className="modal-header">
                  <h5 className="modal-title">Nuestra Rectora</h5>
                  <button
                    className="btn btn-danger close"
                    onClick={handleCloseModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div>
                    <img src="/src/assets/img/RectoraAspirante.jpeg" alt="" />
                    <p>
                      Es un gusto muy especial dirigirme a ti, apreciable
                      aspirante. En la Universidad Tecnológica de León, te
                      abrimos las puertas para que formes parte de nuestra
                      familia, ya que contamos con una gama muy amplia de
                      carreras universitarias para preparar a los futuros
                      profesionistas que requiere León y Guanajuato. Estamos
                      seguros que nuestro modelo educativo puede ser de gran
                      interés y utilidad para continuar tu trayecto de formación
                      profesional y laboral.
                    </p>
                    <b>
                      <p className="modalp">
                        Yoloxóchitl Bustamante Díez Encargada del Despacho de
                        Rectoría
                      </p>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="imagenNav">
          <img src="/src/assets/img/utlLogo2.png" alt="Logo" className="logo" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
