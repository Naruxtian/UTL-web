import React, { useState } from "react";
import Navbar from "../../components/navbar";
import imgUniversidad from "/src/assets/img/universidad.png"
import imgFilosofia from "/src/assets/img/filosofia.jpg"
import imgModeloEducativo from "/src/assets/img/ModeloEducativo.jpg"
import imgModeloEducativo2 from "/src/assets/img/ModeloEducativo2.jpg"
import imgBecas from "/src/assets/img/becas.jpg"
import imgCampusCentral from "/src/assets/img/CampusCentral.jpg"
import imgCampusII from "/src/assets/img/CampusII.jpg"

const Aspirante = () => {
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

  const Card = ({ title, imageSrc }) => (
    <div className="">
      <div className="card2 custom-card">
        <img src={imageSrc} className="card-img-top" alt="Imagen" />
        <div className="card-body">
          <a href="Carrera.jsx" className="btn btn-primary">
            Leer más
          </a>
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );

  const cardsData = [
    {
      title: "TSU EN TI ÁREA ENTORNOS VIRTUALES Y NEGOCIOS DIGITALES",
      imageSrc:
        "/src/assets/img/carrerasTSU/EntornosVirtualesYNegociosDigitales.jpg",
    },
    {
      title: "TSU EN TI ÁREA DESARROLLO DE SOFTWARE MULTIPLATAFORMA",
      imageSrc:
        "/src/assets/img/carrerasTSU/DesarrolloDeSoftwareMultiplataforma.jpg",
    },
    {
      title: "TSU EN TI ÁREA INFRAESTRUCTURA DE REDES DIGITALES",
      imageSrc: "/src/assets/img/carrerasTSU/RedesYTelecomunicaciones.jpg",
    },
    {
      title: "TSU EN ADMINISTRACIÓN ÁREA CAPITAL HUMANO",
      imageSrc: "/src/assets/img/carrerasTSU/administracion.jpg",
    },
    {
      title: "TSU EN DESARROLLO DE NEGOCIOS ÁREA MERCADOTECNIA",
      imageSrc:
        "/src/assets/img/carrerasTSU/DesarrolloDeNegociosAreaMercadotecnia.jpg",
    },
    {
      title: "TSU EN TURISMO ÁREA HOTELERÍA",
      imageSrc: "/src/assets/img/carrerasTSU/Turismo.jpg",
    },
    {
      title: "TSU EN GASTRONOMÍA",
      imageSrc: "/src/assets/img/carrerasTSU/Gastronomía.jpg",
    },
    {
      title: "LOGÍSTICA ÁREA TRANSPORTE TERRESTRE",
      imageSrc: "/src/assets/img/carrerasTSU/TransporteTerrestre.jpg",
    },
    {
      title: "TSU EN QUÍMICA ÁREA TECNOLOGÍA AMBIENTAL",
      imageSrc: "/src/assets/img/carrerasTSU/Química.jpg",
    },
    {
      title: "TSU EN MECATRÓNICA ÁREA SISTEMAS DE MANUFACTURA FLEXIBLE",
      imageSrc: "/src/assets/img/carrerasTSU/Manufactura.jpg",
    },
    {
      title: "TSU EN MECATRÓNICA ÁREA OPTOMECATRÓNICA",
      imageSrc: "/src/assets/img/carrerasTSU/Mecatrónica.jpg",
    },
    {
      title: "TSU EN PROCESOS INDUSTRIALES ÁREA AUTOMOTRIZ",
      imageSrc: "/src/assets/img/carrerasTSU/Automotriz.jpg",
    },
    {
      title: "TSU EN PROCESOS INDUSTRIALES ÁREA MANUFACTURA",
      imageSrc: "/src/assets/img/carrerasTSU/Manufactura.jpg",
    },
    {
      title: "TSU EN PROCESOS INDUSTRIALES ÁREA PLÁSTICOS",
      imageSrc: "/src/assets/img/carrerasTSU/Plásticos.jpg",
    },
    {
      title:
        "TSU EN PROCESOS INDUSTRIALES ÁREA GESTIÓN Y PRODUCTIVIDAD DE CALZADO",
      imageSrc:
        "/src/assets/img/carrerasTSU/GestiónYProductividadDeCalzado.jpg",
    },
    {
      title: "TSU EN MANTENIMIENTO ÁREA INDUSTRIAL",
      imageSrc: "/src/assets/img/carrerasTSU/MantenimientoIndustrial.jpg",
    },
  ];

  const cardDataIng = [
    {
      title: "INGENIERÍA EN ENTORNOS VIRTUALES Y NEGOCIOS DIGITALES",
      imageSrc:
        "/src/assets/img/carrerasING/EntornosVirtualesYNegociosDigitales.jpg",
    },
    {
      title: "INGENIERÍA EN DESARROLLO Y GESTIÓN DE SOFTWARE",
      imageSrc: "/src/assets/img/carrerasING/GestiónDeSoftware.jpg",
    },
    {
      title: "INGENIERÍA EN REDES INTELIGENTES Y CIBERSEGURIDAD",
      imageSrc:
        "/src/assets/img/carrerasING/RedesInteligentesYCiberseguridad.jpg",
    },
    {
      title: "LICENCIATURA EN GESTIÓN DEL CAPITAL HUMANO",
      imageSrc: "/src/assets/img/carrerasING/CapitalHumano.jpg",
    },
    {
      title: "LICENCIATURA EN INNOVACIÓN DE NEGOCIOS Y MERCADOTECNIA",
      imageSrc:
        "/src/assets/img/carrerasING/InnovaciónDeNegociosYMercadotecnia.jpg",
    },
    {
      title: "LICENCIATURA EN GESTIÓN Y DESARROLLO TURÍSTICO",
      imageSrc: "/src/assets/img/carrerasING/DesarrolloTurístico.jpg",
    },
    {
      title: "LICENCIATURA EN GASTRONOMÍA",
      imageSrc: "/src/assets/img/carrerasING/Gastronomía.jpg",
    },
    {
      title: "LICENCIATURA EN DISEÑO Y GESTIÓN DE REDES LOGÍSTICAS",
      imageSrc: "/src/assets/img/carrerasING/RedesLogísticas.jpg",
    },
    {
      title: "INGENIERÍA EN TECNOLOGÍA AMBIENTAL",
      imageSrc: "/src/assets/img/carrerasING/TecnologíaAmbiental.jpg",
    },
    {
      title: "INGENIERÍA EN MECATRÓNICA",
      imageSrc: "/src/assets/img/carrerasING/Mecatrónica.jpg",
    },
    {
      title: "INGENIERÍA EN MANTENIMIENTO INDUSTRIAL",
      imageSrc: "/src/assets/img/carrerasING/MantenimientoIndustrial.jpg",
    },
    {
      title: "INGENIERÍA EN SISTEMAS PRODUCTIVOS",
      imageSrc: "/src/assets/img/carrerasING/SistemasProductivos.jpg",
    },
  ];

  const sections = {
    Conocenos: (
      <div>
        {" "}
        <br />
        <div className="Aspirante">
          <h1>¿Quienes somos?</h1>
          <h3 className="title">Historia</h3>
          <div className="div-historia">
            <div className="div-historia-izq col-5">
              <img
                src={imgUniversidad}
                alt="Imagen"
                className="image"
              />
            </div>
            <div className="div-historia-der col-7">
              <p>
                La Universidad Tecnológica de León inició su funcionamiento el
                26 de Septiembre de 1995, con la inauguración de cursos
                efectuada por el C. Vicente Fox Quesada, Gobernador
                Constitucional del Estado de Guanajuato, ante la presencia de
                altas personalidades del Gobierno Federal, Estatal, Municipal y
                la Comunidad Universitaria. Desde el 25 de septiembre de 1995 y
                hasta la fecha, formamos ciudadanos y ciudadanas de bien, con
                pensamiento global y acción local, con innovación, profundos
                valores humanos y universales y sobre todo, brindando educación
                tecnológica y de calidad, orientada a la industria 4.0 y la
                mente-factura”.
              </p>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className="Aspirante">
          <h1>Filosofía</h1>
          <div className="div-filosofia">
            <div className="div-filosofia-izq col-6">
              <img src={imgFilosofia} alt="" />
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
          <h1>Modelo Educativo</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-5">
              <img src={imgModeloEducativo} alt="" />
            </div>
            <div className="div-modeloEducativo-der col-7">
              <p>
                Estudiando en la UTL se pueden lograr 2 títulos profesionales en
                menos de 4 años. Debido a la formación intensiva cuatrimestral
                en los primeros 2 años se puede obtener el título como Técnico/a
                Superior Universitario/a (TSU) y continuando los estudios por 1
                año 8 meses más, se consigue un segundo título como Ingeniería o
                Licenciatura. Brindamos formación 70% práctica y 30% teórica.
              </p>
            </div>
          </div>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                La Universidad Tecnológica de León (UTL) forma parte del Sistema
                Nacional de Universidades Tecnológicas, integrado por más de 122
                planteles en la República Mexicana. Nuestro modelo ofrece planes
                de estudio funcionales, para formar a los profesionales que
                requieren los sectores productivos y sociales. La UTL cuenta con
                mas de 27 años de experiencia y ha recibido importantes
                reconocimientos de calidad. Tenemos las certificaciones en la
                norma ISO 9001:2015 e ISO 14001:2015, NMX-R-025-SCFI-2015,
                además de todos nuestros programas educativos están acreditados
                en calidad por organismos reconocidos por el COPAES (Consejo
                para la Acreditación de la Educación Superior) y CIEES (Comités
                Interinstitucionales para la Evaluacion de la Educacion
                Superior).
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src={imgModeloEducativo2} alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Becas</h1>
          <div className="div-becas">
            <div className="col-7">
              <p>
                <b>La Universidad Tecnológica de León,</b>cuenta con un sistema
                de Becas Internas y Externas con el objetivo de brindar apoyo
                para que el alumnado pueda continuar con su preparación
                académica y aminorar los factores económicos. ¡Que las
                cuestiones financieras no sean una limitante para que puedas
                continuar con tus estudios!
              </p>
            </div>
            <div className="div-becas-der col-5">
              <img src={imgBecas} alt="" />
            </div>
          </div>
          <div>
            <div>
              <iframe
                title="Sitio Becas_EA5"
                frameborder="0"
                width="800px"
                height="1600px"
                src="https://view.genial.ly/63ed23b4958690001992bfc8"
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
          <h1>Ubicaciones</h1>
          <hr />
          <h4>Campus Central</h4>
          <div className="primerMapa">
            <div className="div-ubicacion">
              <p>
                La Universidad Tecnológica de León se ubica al sureste de la
                ciudad de León, Guanajuato, a un costado del Hospital Regional
                de Alta Especialidad del Bajío, a la altura del Puente del
                Milenio.
              </p>
              <img src={imgCampusCentral} alt="" />
            </div>
            <div>
              <div className="ubicacion">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14892.76321961692!2d-101.58166455!3d21.065040149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b963652f40f0d%3A0xa7d88da0ad8eff8a!2sUniversidad%20Tecnol%C3%B3gica%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1651591395502!5m2!1ses-419!2smx"
                  width="700"
                  height="400"
                  allowfullscreen="allowfullscreen"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <hr />
          <h4>Campus II</h4>
          <div className="segundoMapa">
            <div className="ubicacion">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4427.500424414372!2d-101.57605742203658!3d21.069896779806143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b962c40501be9%3A0x6f8a0c54cf13cf56!2sUniversidad%20Tecnol%C3%B3gica%20de%20Le%C3%B3n%20Campus%20II!5e0!3m2!1ses-419!2smx!4v1652122525705!5m2!1ses-419!2smx"
                width="700"
                height="400"
                allowfullscreen="allowfullscreen"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="div-ubicacion">
              <p>
                La Universidad Tecnológica de León campus II se ubica al sureste
                de la ciudad de León, Guanajuato, ingresando por el
                fraccionamiento Jardines de Versalles.
              </p>
              <img src={imgCampusII} alt="" />
            </div>
          </div>{" "}
          <br /> <br />
        </div>
        <br />
        <br />
        <br />
      </div>
    ),
    OfertaEducativa: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Oferta Educativa</h1>
          <h3>Carreras de TSU</h3>
        </div>
        <div className="">
          <div className="row">
            {cardsData.map((card, index) => (
              <Card key={index} title={card.title} imageSrc={card.imageSrc} />
            ))}
          </div>
        </div>
        <br /> <br />
        <div className="Aspirante">
          <h3>Carreras de ING/LIC</h3>
        </div>
        <div className="">
          <div className="row">
            {cardDataIng.map((card, index) => (
              <Card key={index} title={card.title} imageSrc={card.imageSrc} />
            ))}
          </div>
        </div>{" "}
        <br /> <br />
      </div>
    ),
    Admisiones: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Admisiones TSU</h1>
          <div className="row">
            <div>
              <iframe
                title="Proceso de admisión TSU 2023"
                frameborder="0"
                width="1000px"
                height="675px"
                src="https://view.genial.ly/61ddab3ca31fbb0d87451c9b"
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
          <h1>Admisiones Ingenierias y Licenciaturas</h1>
          <div>
            <div>
              <iframe
                title="DIAGRAMA NÚMEROS"
                frameborder="0"
                width="1000px"
                height="675px"
                src="https://view.genial.ly/6470f08a4ee68f0019b5b74f"
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
      </div>
    ),
  };

  return (
    <div>
      <Navbar modulo={"aspirante"} />
      <div className="section-buttons">
        <button
          className="btn "
          onClick={() => handleSectionChange("Conocenos")}
        >
          Conócenos
        </button>
        <button
          className="btn"
          onClick={() => handleSectionChange("OfertaEducativa")}
        >
          Oferta Educativa
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

export default Aspirante;
