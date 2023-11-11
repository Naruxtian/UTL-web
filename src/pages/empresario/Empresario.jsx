import React, {useState} from 'react'
import Navbar from '../../components/navbar'
import imgInnxware from "/src/assets/img/innxware.png"
import imgFundadores from "/src/assets/img/Fundadores.jpg"
import imgConstruccion from "/src/assets/img/Construccion.jpg"
import imgFilosofia from "/src/assets/img/filosofia.jpg"
import imgCampusCentral from "/src/assets/img/CampusCentral.jpg"
import imgCampus2 from "/src/assets/img/CampusII.jpg"
import imgCapitalHumano from "/src/assets/img/carrerasING/CapitalHumano.jpg"
import imgBolsa from "/src/assets/img/BolsaT.jpg"
import imgDual from "/src/assets/img/Dual.jpg"
import imgJunta2 from "/src/assets/img/Junta2.jpg"
import imgAdminstracion from "/src/assets/img/carrerasTSU/administracion.jpg"
import imgAsesoria from "/src/assets/img/Asesoria.jpg"
import imgServiciosT from "/src/assets/img/ServiciosT.jpeg"

const Empresario = () => {
  const [activeSection, setActiveSection] = useState("Conoce");
  const [activeValue, setActiveValue] = useState(null);
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

  const headerStyle = {
    backgroundColor: "#003082",
    color: "white",
    padding: "10px",
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

  const Card = ({ title, imageSrc }) => (
    <div className="cardOfertas">
      <div className="card2 custom-card">
        <img src={imageSrc} className="card-img-top" alt="Imagen" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a href="Carrera.jsx" className="btn btn-primary">
            Leer más
          </a>
        </div>
      </div>
    </div>
  );

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
    Conoce: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Historia</h1>
          <img
            src="/src/assets/img/Fundadores.jpg"
            alt="Imagen"
            className="image"
          />
          <div className="div-historia">
            <div className="div-historia-izq col-5">
              <img
                src="/src/assets/img/Construccion.jpg"
                alt="Imagen"
                className="image"
              />
            </div>
            <div className="div-historia-der col-7">
              <p>
                La UTL fue creada gracias a la visión de diversos actores y
                actrices que proyectaron para nuestra localidad escenarios de
                desarrollo y progreso tecnológico.
              </p>
              <p>
                Desde el 25 de septiembre de 1995 y hasta la fecha, formamos
                ciudadanos y ciudadanas de bien, con pensamiento global y acción
                local, con innovación, profundos valores humanos y universales y
                sobre todo, brindando educación tecnológica y de calidad,
                orientada a la industria 4.0 y la mente-factura”.
              </p>
            </div>
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
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>PIDE</h1>
          <h3>Plan Institucional de Desarrollo 2015-2020 (PIDE)</h3>
          <div class="card3">
            <div style={headerStyle} class="card-header text-white w-100">
              <h2>EJE 1. CALIDAD EDUCATIVA</h2>
            </div>
            <div class="card-body">
              <p>
                La UTL reconoce que ofrecer calidad e innovación educativa en
                sus programas es esencial para el desarrollo humano, por ello
                evocamos nuestros esfuerzos en formar estudiantes capaces de
                detonar el desarrollo de su entorno para avanzar hacia el futuro
                con valores, conocimientos, y experiencias académicas nacionales
                e internacionales que cubran las expectativas y necesidades de
                la sociedad.
              </p>
              <p>
                <b>Objetivo general:</b>Garantizar la calidad educativa.
              </p>
            </div>
          </div>{" "}
          <br />
          <div class="card3">
            <div style={headerStyle} class="card-header text-white w-100">
              <h2>EJE 2. INVESTIGACIÓN APLICADA Y DESARROLLO TECNOLÓGICO</h2>
            </div>
            <div class="card-body">
              <p>
                La investigación aplicada y la innovación son pilares
                fundamentales de nuestra Universidad, estamos comprometidos con
                la construcción y trasferencia de conocimientos que mejoren la
                calidad de vida de las personas.
              </p>
              <p>
                <b>Objetivo general:</b>Generar nuevo conocimiento que
                contribuya a la solución de problemas de manera innovadora , que
                mejore la calidad de vida de las personas y genere riqueza.
              </p>
            </div>
          </div>{" "}
          <br />
          <div class="card3">
            <div style={headerStyle} class="card-header text-white w-100">
              <h2>EJE 3. Vinculación INNOVADORA Y EMPRENDIMIENTO</h2>
            </div>
            <div class="card-body">
              <p>
                La investigación aplicada y la innovación son pilares
                fundamentales de nuestra Universidad, estamos comprometidos con
                la construcción y trasferencia de conocimientos que mejoren la
                calidad de vida de las personas.
              </p>
              <p>
                <b>Objetivo general:</b>Generar nuevo conocimiento que
                contribuya a la solución de problemas de manera innovadora , que
                mejore la calidad de vida de las personas y genere riqueza.
              </p>
            </div>
          </div>{" "}
          <br />
          <div class="card3">
            <div style={headerStyle} class="card-header text-white w-100">
              <h2>EJE 4. SUSTENTABILIDAD PARA EL DESARROLLO</h2>
            </div>
            <div class="card-body">
              <p>
                La investigación aplicada y la innovación son pilares
                fundamentales de nuestra Universidad, estamos comprometidos con
                la construcción y trasferencia de conocimientos que mejoren la
                calidad de vida de las personas.
              </p>
              <p>
                <b>Objetivo general:</b>Generar nuevo conocimiento que
                contribuya a la solución de problemas de manera innovadora , que
                mejore la calidad de vida de las personas y genere riqueza.
              </p>
            </div>
          </div>{" "}
          <br />
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>
            <a
              href="https://utleon.edu.mx/resource/img/estructura%20organica%20UTL.jpg"
              target="_blank"
            >
              Equipo Directivo UTL
            </a>
          </h1>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Ubicaciones</h1>
          <h4>Campus Central</h4>
          <div className="div-ubicacion">
            <div className="col-7">
              <p>
                La Universidad Tecnológica de León se ubica al sureste de la
                ciudad de León, Guanajuato, a un costado del Hospital Regional
                de Alta Especialidad del Bajío, a la altura del Puente del
                Milenio.
              </p>
            </div>
            <div className="div-ubicacion-der col-5">
              <img src="/src/assets/img/CampusCentral.jpg" alt="" />
            </div>
          </div>
          <div className="col ubicacion">
            <div className="row justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14892.76321961692!2d-101.58166455!3d21.065040149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b963652f40f0d%3A0xa7d88da0ad8eff8a!2sUniversidad%20Tecnol%C3%B3gica%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1651591395502!5m2!1ses-419!2smx"
                width="900"
                height="400"
                allowfullscreen="allowfullscreen"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <h4>Campus II</h4>
          <div className="div-ubicacion">
            <div className="col-7">
              <p>
                La Universidad Tecnológica de León campus II se ubica al sureste
                de la ciudad de León, Guanajuato, ingresando por el
                fraccionamiento Jardines de Versalles.
              </p>
            </div>
            <div className="div-ubicacion-der col-5">
              <img src="/src/assets/img/CampusII.jpg" alt="" />
            </div>
          </div>
          <div className="col ubicacion">
            <div className="row justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4427.500424414372!2d-101.57605742203658!3d21.069896779806143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b962c40501be9%3A0x6f8a0c54cf13cf56!2sUniversidad%20Tecnol%C3%B3gica%20de%20Le%C3%B3n%20Campus%20II!5e0!3m2!1ses-419!2smx!4v1652122525705!5m2!1ses-419!2smx"
                width="900"
                height="400"
                allowfullscreen="allowfullscreen"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>{" "}
        <br /> <br />
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
        <div className="arregloOfertas">
          <div className="ofertas">
            {cardsData.map((card, index) => (
              <Card key={index} title={card.title} imageSrc={card.imageSrc} />
            ))}
          </div>
        </div>
        <br /> <br />
        <div className="Aspirante">
          <h3>Carreras de ING/LIC</h3>
        </div>
        <div className="arregloOfertas">
          <div className="ofertas">
            {cardDataIng.map((card, index) => (
              <Card key={index} title={card.title} imageSrc={card.imageSrc} />
            ))}
          </div>
        </div>{" "}
        <br /> <br />
      </div>
    ),
    Vinculacion: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Estadias Empresariales</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                La Estadía es la práctica profesional de Técnico/a Superior
                Universitario/a (TSU) o de nivel Licenciatura o Ingeniería donde
                el estudiante desarrolla un proyecto real del área relacionada
                con la carrera que cursa.
              </p>
              <p>Dicha estadía se desarrolla en un periodo de 13 semanas.</p>
              <ul>
                <li>
                  El estudiante es guiado por un/a Asesor/a Académico/a (docente
                  de tiempo completo y experto en el área) y un/a Asesor/a
                  Organizacional (persona designada por la organización para el
                  seguimiento del proyecto).
                </li>
                <li>
                  Se le debe proporcionar al estudiantado el espacio, material y
                  equipo necesario para desarrollar el proyecto.
                </li>
                <li>Firmar el Convenio Individual</li>
              </ul>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src="/src/assets/img/carrerasING/CapitalHumano.jpg" alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Bolsa de Trabajo</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                La bolsa de trabajo de egresados/as de la UTL es un espacio para
                que las empresas, instituciones y organizaciones puedan ofertar
                sus vacantes y la comunidad de egresados y egresadas de UTL
                tengan acceso.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src="/src/assets/img/BolsaT.jpg" alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>¿Qué es un Analisis Situacional del Trabajo (AST)?</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col">
              <p>
                Es una sesión de grupo donde se pretende identificar los:
                requerimientos y expectativas reales de una empresa o sector
                productivo.
              </p>
              <h3>Objetivo</h3>
              <ul>
                <li>
                  Identificar las habilidades y características pertinentes con
                  las que debe contar el recién egresado: “necesidades presentes
                  y de futuro inmediato”
                </li>
                <li>
                  Conocer el campo laboral y ordenar las funciones productivas,
                  de modo tal, que se llegue a una descripción precisa de un
                  área ocupacional.
                </li>
                <li>
                  Actualización de planes de estudio y servicios de
                  capacitación, el cual por reglamento deberá ser cada 3 años.
                </li>
              </ul>
              <p>¿Te gustaría participar en estas Sesiones de Trabajo?</p>
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Educación DUAL</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                Contamos con sólidos programas de formación dual donde el alumno
                comparte su proceso de enseñanza aprendizaje entre las aulas y
                la empresa, logrando así un mayor conocimiento teórico práctico
                y una mayor inserción laboral formando el talento humano desde
                el principio de su carrera.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src="/src/assets/img/Dual.jpg" alt="" />
            </div>
          </div>
        </div>
        <br /> <br />
      </div>
    ),
    Servicios: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Educación DUAL</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                Contamos con sólidos programas de formación dual donde el alumno
                comparte su proceso de enseñanza aprendizaje entre las aulas y
                la empresa, logrando así un mayor conocimiento teórico práctico
                y una mayor inserción laboral formando el talento humano desde
                el principio de su carrera.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src="/src/assets/img/Dual.jpg" alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Capacitación Empresarial</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                Impulsamos la vinculación académica con los sectores productivo
                y social en la aportación de soluciones tecnológicas y de
                capacitación a necesidades específicas, a través de estrategias
                innovadoras, que contribuyan al desarrollo sustentable de la
                región.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src="/src/assets/img/Junta2.jpg" alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Educación Continua</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <h3>
                <b>Objetivo:</b>
              </h3>
              <p>
                Ofrecer servicios de capacitación en diferentes modalidades como
                cursos, talleres y diplomados, desarrollados en colaboración con
                docentes de las diferentes direcciones académicas, dirigidos
                tanto a egresados(as) y demás integrantes de la Universidad, así
                como al público en general, con el propósito de apoyarles en su
                actualización profesional.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img
                src="/src/assets/img/carrerasTSU/administracion.jpg"
                alt=""
              />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Asesoría Empresarial</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                Impulsamos la vinculación académica con los sectores productivo
                y social en la aportación de soluciones tecnológicas y de
                capacitación a necesidades específicas, a través de estrategias
                innovadoras, que contribuyan al desarrollo sustentable de la
                región.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src="/src/assets/img/Asesoria.jpg" alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Servicios Tecnológicos</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                Impulsamos la vinculación académica con los sectores productivo
                y social en la aportación de soluciones tecnológicas y de
                capacitación a necesidades específicas, a través de estrategias
                innovadoras, que contribuyan al desarrollo sustentable de la
                región.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src="/src/assets/img/ServiciosT.jpeg" alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>CENTRO DE INNOVACIÓN Y DESARROLLO EN TI (INNXWARE)</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                <b>Objetivo:</b>Objetivo: Generar innovación y desarrollo en
                tecnologías de información con estándares internacionales,
                orientado a las necesidades del sector público y privado,
                particularmente en el desarrollo de software a la medida y
                gestión de servicios TI.
              </p>
              <p>
                Centro innovador en tecnologías de la información certificado en
                2018 en CMMI nivel IV, integrado por directivos/as, personal
                docente y personas egresadas de la misma Universidad.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src="/src/assets/img/innxware.png" alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
      </div>
    ),
  };

  return (
    <div>
      <Navbar modulo={"empresario"} />
      <div className="section-buttons">
        <button className="btn " onClick={() => handleSectionChange("Conoce")}>
          Conoce la UTL
        </button>
        <button
          className="btn"
          onClick={() => handleSectionChange("Desarrollo")}
        >
          Desarrollo Humano y Organizacional
        </button>
        <button
          className="btn"
          onClick={() => handleSectionChange("OfertaEducativa")}
        >
          Programas Educativos
        </button>
        <button
          className="btn"
          onClick={() => handleSectionChange("Vinculacion")}
        >
          Vinculacion
        </button>
        <button
          className="btn"
          onClick={() => handleSectionChange("Servicios")}
        >
          Servicios
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

export default Empresario;
