import { useState } from 'react';
import FooterInformativo from '../../components/footerInformativo';
import Footer from '../../components/footerLogoAso';

const Aspirante = () => {
  const [mostrarContenidoModulo, setMostrarContenidoModulo] = useState(false);
  const [mostrarContenidoModuloM, setMostrarContenidoModuloM] = useState(false);
  const [mostrarContenidoAModulos, setMostrarContenidoAModulos] = useState(false);
  const [mostrarContenidoAModulosM, setMostrarContenidoAModulosM] = useState(false);
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
      <div>
        <div>
          <nav className="navbar">
            <div className="left-content">
              <button className="hamburger-button d-none d-lg-block" onClick={handleMostrarContenidoAModulos}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
              </button>
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
              <button className="hamburger-button d-block d-lg-none" onClick={handleMostrarContenidoAModulosM}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
              </button>
              {mostrarContenidoAModulosM && (
                <div className={`modal fade ${mostrarContenidoAModulosM ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: mostrarContenidoAModulosM ? 'block' : 'none' }}>
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Otros modulos</h5>
                        <button className="btn btn-danger  close" onClick={handleMostrarContenidoAModulosM}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p><a href="#">Soy Estudiante</a></p>
                        <p><a href="#">Soy Docente</a></p>
                        <p><a href="#">Soy Administrativo/a</a></p>
                        <p><a href="#">Soy Empresario/a</a></p>
                        <p><a href="#">Soy Egresado</a></p>
                        <p><a href="#">Somos UTL</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='div-dropdown'>
              <div className="center-content">
                <h1>Soy aspirante</h1>
              </div>
              <button className="dropdown-button d-none d-lg-block" onClick={handleMostrarContenidoModulo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
              {mostrarContenidoModulo && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">CONOCE LA UTL</a>
                  </li>
                  <li>
                    <a href="#">OFERTA EDUCATIVA</a>
                  </li>
                  <li>
                    <a href="#">¿CÓMO INGRESO A ESTUDIAR EN LA UTL?</a>
                  </li>
                  <li>
                    <a href="#">CONOCENOS</a>
                  </li>
                </ul>
              )}
              <button className="dropdown-button d-block d-lg-none" onClick={handleMostrarContenidoModuloM}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
              {mostrarContenidoModuloM && (
                <div className={`modal fade ${mostrarContenidoModuloM ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: mostrarContenidoModuloM ? 'block' : 'none' }}>
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Opciones</h5>
                        <button className="btn btn-danger  close" onClick={handleMostrarContenidoModuloM}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p><a href="#">CONOCE LA UTL</a></p>
                        <p><a href="#">OFERTA EDUCATIVA</a></p>
                        <p><a href="#">¿CÓMO INGRESO A ESTUDIAR EN LA UTL?</a></p>
                        <p><a href="#">CONOCENOS</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="right-content">
              <img src="/src/assets/img/utlLogo2.png" alt="Logo" className="logo" />
            </div>
          </nav>
        </div>
        <div className='carousel'>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.utleon.edu.mx/resource/img/banners/0%20Roll%20Up%20Aspirante%202_202209140216.JPG" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>PREPARATE Y TRASCIENDE PARA EL MAÑANA</h5>
                  <p>Estás en la zona donde converge el aprendizaje, la innovación y el conocimiento aplicado.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://www.utleon.edu.mx/resource/img/banners/0%20Roll%20Up%20Aspirante%201_202209140218.PNG" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>PREPARATE Y TRASCIENDE PARA EL MAÑANA</h5>
                  <p>Somos una institución tecnológica con sentido humano.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="container div-historia">
          <h1 className="title">Historia</h1>
          <button type="button" className="btn btn-info" onClick={handleMostrarContenidoModal}>
            Nuestra Rectora
          </button>
              {mostrarContenidoModal && (
                <div className={`modal fade ${mostrarContenidoModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: mostrarContenidoModal ? 'block' : 'none' }}>
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content modal-rectora">
                      <div className="modal-header">
                        <h5 className="modal-title">Nuestra Rectora</h5>
                        <button className="btn btn-danger close" onClick={handleCloseModal}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                      <div>
                        <img src="https://www.utleon.edu.mx/resource/img/imagenes/1.1.1.jpeg" alt="" />
                        <p>
                          Es un gusto muy especial dirigirme a ti, apreciable aspirante.
                          En la Universidad Tecnológica de León, te abrimos las puertas para que formes parte de nuestra familia, ya que contamos con una gama muy amplia de carreras universitarias para preparar a los futuros profesionistas que requiere León y Guanajuato.
                          Estamos seguros que nuestro modelo educativo puede ser de gran interés y utilidad para continuar tu trayecto de formación profesional y laboral.
                        </p>
                        <b><p className='modalp'>Yoloxóchitl Bustamante Díez
                          Encargada del Despacho de Rectoría</p></b>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          <img src="https://www.utleon.edu.mx/resource/img/banners/0%20Roll%20Up%20Aspirante%201_202209140218.PNG" alt="Imagen" className="image" />
          <p>La Universidad Tecnológica de León inició su funcionamiento el 26 de Septiembre de 1995, con la inauguración de cursos efectuada por el C. Vicente Fox Quesada, Gobernador Constitucional del Estado de Guanajuato, ante la presencia de altas personalidades del Gobierno Federal, Estatal, Municipal y la Comunidad Universitaria.
            Desde el 25 de septiembre de 1995 y hasta la fecha, formamos ciudadanos y ciudadanas de bien, con pensamiento global y acción local, con innovación, profundos valores humanos y universales y sobre todo, brindando educación tecnológica y de calidad, orientada a la industria 4.0 y la mente-factura”.</p>
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <FooterInformativo />
        </div>
      </div>
    </div>
  );
};

export default Aspirante;
