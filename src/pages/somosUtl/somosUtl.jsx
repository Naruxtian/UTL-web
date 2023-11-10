import React, { useState } from "react";
import Navbar from "../../components/navbar";

const SomosUtl = () => {
  const [activeValue, setActiveValue] = useState(null);
  const [activeSection, setActiveSection] = useState("Conocenos");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleValueClick = (value) => {
    if (value === activeValue) {
      setActiveValue(null);
    } else {
      setActiveValue(value);
    }
  };

  const closeModal = () => {
    setActiveValue(null);
  };

  const Modal = ({ title, content }) => {
    return (
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{ display: "block", zIndex: 1050 }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="close btn btn-danger"
                onClick={closeModal}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const valores = [
    {
      title: "Dignidad",
      content:
        "Es el valor intrínseco de las personas, así como de los objetos y situaciones en cuanto contribuyen a la realización personal.",
    },
    {
      title: "Honestidad",
      content:
        "Tener conciencia clara de lo que está bien en nuestra propia conducta y en nuestra relación con los demás.",
    },
    {
      title: "Libertad",
      content:
        "Tomar decisiones propias y expresar ideales aceptando las diferencias con el resto de las personas.",
    },
    {
      title: "Búsqueda de la verdad",
      content:
        "Cualidad de la inteligencia por la cual el ser humano se capacita y perfecciona para llegar a las causas de las cosas.",
    },
    {
      title: "Responsabilidad",
      content:
        "Cumplir con las obligaciones y trabajos asignados según las normas establecidas.",
    },
    {
      title: "Justicia",
      content:
        "Conjunto de principios que adopta una comunidad a fin de asegurar el orden y la convivencia entre sus miembros.",
    },
  ];

  const utl = [
    <div className="Aspirante">
      <h1>Historia</h1>
      <div>
        <img
          src="/src/assets/img/universidad.png"
          alt="Logo"
          className="v-image__image v-image__image--cover"
        />{" "}
        <br />
        <div
          className="v-responsive__content"
          style={{ width: "1217px" }}
        ></div>
        <br />
        <p className="text-justify">
          La Universidad Tecnológica de León inició su funcionamiento el 26 de
          septiembre de 1995, con la inauguración de cursos efectuada por el C.
          Vicente Fox Quesada, Gobernador Constitucional del Estado de
          Guanajuato, ante la presencia de altas personalidades del gobierno
          federal, estatal, municipal y la comunidad universitaria.
        </p>
        <p className="text-justify">
          Desde el 25 de septiembre de 1995 y hasta la fecha, formamos
          ciudadanos y ciudadanas de bien, con pensamiento global y acción
          local, con innovación, profundos valores humanos y universales y sobre
          todo, brindando educación tecnológica y de calidad, orientada a la
          industria 4.0 y la mente-factura”.
        </p>
      </div>
    </div>,
  ];

  const sections = {
    ConoceUtl: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Historia</h1>
          <div>
            <img
              src="/src/assets/img/universidad.png"
              alt="Logo"
              className="v-image__image v-image__image--cover"
            />{" "}
            <br />
            <div
              className="v-responsive__content"
              style={{ width: "1217px" }}
            ></div>
            <br />
            <p className="text-justify">
              La Universidad Tecnológica de León inició su funcionamiento el 26
              de septiembre de 1995, con la inauguración de cursos efectuada por
              el C. Vicente Fox Quesada, Gobernador Constitucional del Estado de
              Guanajuato, ante la presencia de altas personalidades del gobierno
              federal, estatal, municipal y la comunidad universitaria.
            </p>
            <p className="text-justify">
              Desde el 25 de septiembre de 1995 y hasta la fecha, formamos
              ciudadanos y ciudadanas de bien, con pensamiento global y acción
              local, con innovación, profundos valores humanos y universales y
              sobre todo, brindando educación tecnológica y de calidad,
              orientada a la industria 4.0 y la mente-factura”.
            </p>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Filosofía</h1>
          <div className="div-filosofia">
            <div className="div-filosofia-izq col-6">
              <img src="/src/assets/img/filosofia.jpg" alt="" />
            </div>
            <div className="div-filosofiamvv col-6">
              <h4>Misión</h4>
              <hr />
              <p>
                Formar ciudadanos/as del mundo con educación tecnológica de
                calidad a través de la docencia, la investigación aplicada, la
                difusión del conocimiento y la vinculación, que contribuyan a la
                innovación y al desarrollo sustentable.
              </p>
              <h4>Visión</h4>
              <hr />
              <p>
                Somos una Universidad reconocida por su calidad internacional,
                sus aportaciones al desarrollo de la tecnología y al bienestar
                de la sociedad.
              </p>
              <h4>Valores</h4>
              <hr />
              <div className="valores-container">
                {valores.map((valor, index) => (
                  <div key={index} className="valor">
                    <button
                      className={`btn valor-button ${
                        activeValue === index ? "active" : ""
                      }`}
                      onClick={() => handleValueClick(index)}
                    >
                      {valor.title}
                    </button>
                    {isModalOpen && (
                      <Modal
                        title={valores[activeValue].title}
                        content={valores[activeValue].content}
                        onClose={() => setModalOpen(false)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className="Aspirante">
          <h1>Estructura Organizacional</h1>
          <br />
          <div>
            <div>
              <iframe
                title="Estructura Organizacional"
                frameborder="0"
                width="1600px"
                height="800px"
                src="https://utleon.edu.mx/resource/img/estructura%20organica%20UTL.jpg"
                type="text/html"
                allowscriptaccess="always"
                allowfullscreen="true"
                scrolling="yes"
                allownetworking="all"
              ></iframe>{" "}
            </div>{" "}
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-12">
                <h1 className="font-weight-bold text-primary">
                  Consejo <span className="text-secondary">Directivo</span>
                </h1>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-12">
                <p>
                  Es el máximo órgano de gobierno de la universidad y en
                  conjunto con la Rectoría, son los responsables de su dirección
                  y administración.
                </p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-12">
                <hr className="bg-secondary" />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-12 text-justify">
                <p>
                  El Consejo Directivo está integrado de la siguiente manera:
                </p>
                <p>
                  I.- Tres representantes del Gobierno del Estado de Guanajuato,
                  que serán nombrados por el Gobernador y lo presidirá quien él
                  designe;
                </p>
                <p>
                  II.- Tres representantes del Gobierno Federal, designados por
                  el Secretario de Educación Pública;
                </p>
                <p>
                  III.- Un representante del Gobierno Municipal designado por el
                  H. Ayuntamiento, donde se ubique la universidad;
                </p>
                <p>
                  IV.- Dos representantes del Sector Productivo, a invitación
                  del Ejecutivo Estatal.
                </p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-12 text-center">
                <button className="btn btn-primary btn-lg">
                  Conoce el Reglamento del Consejo Directivo
                </button>
              </div>
            </div>

            {/* Informes Anuales */}
            <div className="row mt-3">
              <div className="col-md-12">
                <h2 className="font-weight-bold text-primary">
                  Informes <span className="text-secondary">Anuales</span>
                </h2>
              </div>
            </div>

            <div className="row mt-3">
              <div
                role="tablist"
                className="v-item-group theme--light v-slide-group v-tabs-bar transparent"
                style={{
                  color: "rgb(0, 151, 127)",
                  caretColor: "rgb(0, 151, 127)",
                }}
                data-booted="true"
              >
                <div
                  tabIndex="0"
                  aria-selected="false"
                  role="tab"
                  className="v-tab text-right"
                  style={{
                    borderBottom: "4px solid rgb(0, 151, 127)",
                    borderColor: "rgb(0, 151, 127)",
                  }}
                  color="transparent"
                >
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://utleon.edu.mx/resource/documentos/InformeDeActividadesAnual24%202018-2019.pdf"
                      >
                        2018 - 2019
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://utleon.edu.mx/resource/documentos/Informe%20Anual%202019-2020.pdf"
                      >
                        2019 - 2020
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://utleon.edu.mx/resource/documentos/XCVIII_InformeAnual2020-2021.pdf"
                      >
                        2020 - 2021
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://utleon.edu.mx/resource/documentos/CII_Informe%20Anual%2027%202021-2022.pdf"
                      >
                        2021 - 2022
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mt-2">
                    <div className="tab-pane fade" id="informe-2018-2019">
                      <p>Contenido del informe 2018-2019.</p>
                    </div>
                    <div className="tab-pane fade" id="informe-2019-2020">
                      <p>Contenido del informe 2019-2020.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div
                tabIndex="0"
                aria-selected="false"
                role="tab"
                className="v-tab text-right"
                style={{
                  borderBottom: "4px solid rgb(0, 151, 127)",
                  borderColor: "rgb(0, 151, 127)",
                }}
                color="transparent"
              >
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://utleon.edu.mx/resource/documentos/XCIX_InformeCuatrimestralSD2021.pdf"
                    >
                      Sep - Dic 2021
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://utleon.edu.mx/resource/documentos/C_InformeCuatrimestralEA2022.pdf"
                    >
                      ENE - ABR 2022
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://utleon.edu.mx/resource/documentos/CI_Informe%20Cuatrimestral%20MA2022.pdf"
                    >
                      MAY - AGO 2022
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://utleon.edu.mx/resource/documentos/CIII_Informe_cuatrimestral_sep-dic%202022.pdf"
                    >
                      SEP - DIC 2022
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://utleon.edu.mx/resource/documentos/CIV_Informe_ejecutivo_EA2023.pdf"
                    >
                      ENE - ABR 2023
                    </a>
                  </li>
                </ul>
                <div className="tab-content mt-2">
                  <div className="tab-pane fade" id="informe-sep-dic-2021">
                    <p>Contenido del informe Sep - Dic 2021.</p>
                  </div>
                  <div className="tab-pane fade" id="informe-ene-abr-2022">
                    <p>Contenido del informe Ene - Abr 2022.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>{" "}
        <br /> <br />
        <br /> <br />
        </div>
    ),
  };

  return (
    <div>
      <Navbar />
      <div className="section-buttons">
        <button
          className="btn "
          onClick={() => handleSectionChange("ConoceUtl")}
        >
          Conoce Utl
        </button>
        <button className="btn" onClick={() => handleSectionChange("Calidad")}>
          Calidad
        </button>
        <button
          className="btn"
          onClick={() => handleSectionChange("Admisiones")}
        >
          Admisiones
        </button>
      </div>
      {sections[activeSection]}
      {activeValue !== null && (
        <Modal
          title={valores[activeValue].title}
          content={valores[activeValue].content}
        />
      )}
    </div>
  );
};

export default SomosUtl;
