import React, { useState } from "react";
import Navbar from "../../components/navbar";
import imgUniversidad from "/src/assets/img/universidad.png"
import imgFilosofia from "/src/assets/img/filosofia.jpg"
import imgCampusCentral from "/src/assets/img/CampusCentral.jpg" 
import imgCampus2 from "/src/assets/img/CampusII.jpg"
import imgUtlEnDatos from "/src/assets/img/UTLENDATOS-02.jpg"
import imgPolitica from "/src/assets/img/Politica.jpg"
import imgCertificacion from "/src/assets/img/Certificacion.jpeg"
import imgSistemaGI from "/src/assets/img/SistemaGI.png"
import imgDifusion from "/src/assets/img/Difusion.png"
import imgContraloria from "/src/assets/img/Contraloria.png"

const SomosUtl = () => {
  const [activeValue, setActiveValue] = useState(null);
  const [activeSection, setActiveSection] = useState("Conoce");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

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
    backgroundColor: '#003082',
    color: 'white', 
    padding: '10px', 
  };

  const handleOpenModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalOpen2(true);
  };

  const CustomModal = (
    <div className={`modal ${isModalOpen2 ? 'show d-block' : ''}`} style={{ zIndex: 1050 }} onClick={() => setModalOpen2(false)}>
        <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: '90%' }} nClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>
            <button type="button" className="close btn btn-danger" onClick={() => setModalOpen2(false)}>
                <span>&times;</span>
            </button>
            </div>
            <div className="modal-body">
            {modalContent}
            </div>
        </div>
        </div>
    </div>
    );  

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

  

  const sections = {
    Conoce: (
      <div> <br /> <br />
        <div className="Aspirante">
          <h1>Historia</h1>
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
        </div> <br /> <br />
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
        </div> <br /> <br />
          <div className='Aspirante'>
            <h1><a href="https://utleon.edu.mx/resource/img/estructura%20organica%20UTL.jpg" target='_blank'>Equipo Directivo UTL</a></h1>
          </div> <br /> <br />
          <div className='Aspirante'>
                  <h1>Consejo Directivo</h1>
                      <div className='div-modeloEducativo'>
                          <div className='div-modeloEducativo-izq col'>
                              <p>Es el máximo órgano de gobierno de la universidad y en conjunto con la Rectoría, son los responsables de su dirección y administración.</p>
                              <hr />
                              <p>El Consejo Directivo está integrado de la siguiente manera:</p>
                                <p>I.- Tres representantes del Gobierno del Estado de Guanajuato, que serán nombrados por el Gobernador y lo presidirá quien él designe;</p>
                                <p>II.- Tres representantes del Gobierno Federal, designados por el Secretario de Educación Pública;</p>
                                <p>III.- Un representante del Gobierno Municipal designado por el H. Ayuntamiento, donde se ubique la universidad;</p>
                                <p>IV.- Dos representantes del Sector Productivo, a invitación del Ejecutivo Estatal.</p>
                                <br />
                                <h3>Informes Anuales</h3>
                                <div className='button-container'>
                                    <a href="https://www.utleon.edu.mx/resource/documentos/InformeDeActividadesAnual24%202018-2019.pdf" className="custom-button button-primary" target='_blank'>2018 - 2019</a>
                                    <a href="https://www.utleon.edu.mx/resource/documentos/Informe%20Anual%202019-2020.pdf" className="custom-button button-secondary" target='_blank'>2019 - 2020</a>
                                    <a href="https://www.utleon.edu.mx/resource/documentos/XCVIII_InformeAnual2020-2021.pdf" className="custom-button button-primary" target='_blank'>2020 - 2021</a>
                                    <a href="https://www.utleon.edu.mx/resource/documentos/CII_Informe%20Anual%2027%202021-2022.pdf" className="custom-button button-primary" target='_blank'>2021 - 2022</a>
                                </div> <br />
                                <h3>Informes Cuatrimestrales</h3>
                                <div className='button-container'>
                                    <a href="https://www.utleon.edu.mx/resource/documentos/XCIX_InformeCuatrimestralSD2021.pdf" className="custom-button button-primary" target='_blank'>SEP - DIC 2021</a>
                                    <a href="https://www.utleon.edu.mx/resource/documentos/C_InformeCuatrimestralEA2022.pdf" className="custom-button button-secondary" target='_blank'>ENE - ABR 2022</a>
                                    <a href="https://www.utleon.edu.mx/resource/documentos/CI_Informe%20Cuatrimestral%20MA2022.pdf" className="custom-button button-primary" target='_blank'>MAY - AGO 2022</a>
                                    <a href="https://www.utleon.edu.mx/resource/documentos/CIII_Informe_cuatrimestral_sep-dic%202022.pdf" className="custom-button button-primary" target='_blank'>SEP - DIC 2021</a>
                                    <a href="https://www.utleon.edu.mx/resource/documentos/CIV_Informe_ejecutivo_EA2023.pdf" className="custom-button button-primary" target='_blank'>ENE - ABR 2023</a>
                                </div> <br />
                          </div>
                    </div>
            </div>  <br /> <br />
            <div className='Aspirante'>
                    <h1>PIDE</h1>
                    <h3>Plan Institucional de Desarrollo 2021-2025 (PIDE)</h3>
                        <div class="cards">
                            <div style={headerStyle} class="card-header text-white w-100">
                                <h2>Macro Proceso Institucional Académico</h2>
                                <h6>EJE 1. CALIDAD EDUCATIVA</h6>
                            </div>
                            <div class="card-body">
                                <p><b>Objetivo general:</b>Asegurar y mejorar la calidad de la capacidad y competitividad académica, así como los elementos que intervienen en el proceso de enseñanza-aprendizaje.</p>
                            </div>
                        </div> <br />
                        <div class="cards">
                            <div style={headerStyle} class="card-header text-white w-100">
                                <h2>Macro Proceso Institucional Vinculación</h2>
                                <h6>EJE 2. Vinculación INNOVADORA Y EMPRENDIMIENTO</h6>
                            </div>
                            <div class="card-body">
                                <p><b>Objetivo general:</b>rear interacciones permanentes entre la universidad y los sectores sociales.</p>
                            </div>
                        </div> <br />
                        <div class="cards">
                            <div style={headerStyle} class="card-header text-white w-100">
                                <h2>Macro Proceso Institucional Administración</h2>
                                <h6>EJE 3. ADMINISTRACIÓN Y FINANZAS EFICACES Y EFICIENTES</h6>
                            </div>
                            <div class="card-body">
                                <p><b>Objetivo general:</b>Utilizar racional y efectivamente los recursos humanos, materiales y financieros con el fin de cumplir con los objetivos Institucionales.</p>
                            </div>
                        </div> <br />
                        <div class="cards">
                            <div style={headerStyle} class="card-header text-white w-100">
                                <h2>Macro Proceso Institucional Ambiental</h2>
                                <h6>EJE 4. SUSTENTABILIDAD PARA EL DESARROLLO</h6>
                            </div>
                            <div class="card-body">
                                <p><b>Objetivo general:</b>Promover la responsabilidad social universitaria por medio de la cultura del cuidado del medio ambiente en las actividades que emprenda la universidad.</p>
                            </div>
                        </div> <br />
                </div> <br /> <br />
                <div className="Aspirante">
          <h1>Ubicaciones</h1>
<hr />
          <h4>Campus Central</h4>
          <div className="primerMapa">
              <div className="div-ubicacion">
                <p>
                    La Universidad Tecnológica de León se ubica al sureste de la
                    ciudad de León, Guanajuato, a un costado del Hospital
                    Regional de Alta Especialidad del Bajío, a la altura del
                    Puente del Milenio.
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
              <img src={imgCampus2} alt="" />
            </div>
        </div>{" "}
        <br /> <br />
      </div>
      <br /><br /><br />
      <div className='Aspirante'>
                  <h1>UTL en Cifras</h1>
                      <div className='div-modeloEducativo'>
                          <div className='div-modeloEducativo-izq col'>
                                <div className='button-container'>
                                    <a href="https://www.utleon.edu.mx/public_html/plantilla_html/index.php" className="custom-button button-primary" target='_blank'>Información Financiera</a>
                                    <a href="https://www.utleon.edu.mx/resource/img/imagenes/utl_datos/PROGRAMA%20ANUAL%20POA%202022%20CORREGIDO.pdf" className="custom-button button-secondary" target='_blank'>Plan Anual De Compras</a>
                                    <a href="https://www.utleon.edu.mx/resource/img/imagenes/utl_datos/POA%202022.pdf" className="custom-button button-primary" target='_blank'>Presupuesto 2022</a>
                                </div> <br />
                                    <button class="custom-button" onClick={() => handleOpenModal("Matricula 2018 a 2023",<div><div><img src={imgUtlEnDatos} alt="" /> </div> </div>)}>
                                        <span class="button-text">Matricula 2018 A 2023</span>
                                        <span class="button-icon">➯</span>
                                    </button>
                                    <button class="custom-button" onClick={() => handleOpenModal("Matricula 2018 a 2023 por género", <div><div ><img src={imgUtlEnDatos} alt="" /> </div> </div>)}>
                                        <span class="button-text">Matricula 2018 a 2023 por género</span>
                                        <span class="button-icon">➯</span>
                                    </button>
                                    <button class="custom-button" onClick={() => handleOpenModal("Absorción", <div><div><img src={imgUtlEnDatos} alt="" /> </div> </div>)}>
                                        <span class="button-text">Abosrcion</span>
                                        <span class="button-icon">➯</span>
                                    </button>
                                    <button class="custom-button" onClick={() => handleOpenModal("Población Atendida", <div><div><img src={imgUtlEnDatos} alt="" /> </div> </div>)}>
                                        <span class="button-text">Población Atendida</span>
                                        <span class="button-icon">➯</span>
                                    </button>
                                    <button class="custom-button" onClick={() => handleOpenModal("Eficiencia Terminal", <div><div><img src={imgUtlEnDatos} alt="" /> </div> </div>)}>
                                        <span class="button-text">Eficiencia Terminal</span>
                                        <span class="button-icon">➯</span>
                                    </button>
                                    <button class="custom-button" onClick={() => handleOpenModal("Historico de Egresados", <div><div><img src={imgUtlEnDatos} alt="" /> </div> </div>)}>
                                        <span class="button-text">Historico de Egresados</span>
                                        <span class="button-icon">➯</span>
                                    </button>
                                    <button class="custom-button" onClick={() => handleOpenModal("Modelo Dual", <div><div><img src={imgUtlEnDatos} alt="" /> </div> </div>)}>
                                        <span class="button-text">Modelo Dual</span>
                                        <span class="button-icon">➯</span>
                                    </button>
                                    <button class="custom-button" onClick={() => handleOpenModal("Calidad", <div><div><img src={imgUtlEnDatos} alt="" /> </div> </div>)}>
                                        <span class="button-text">Calidad</span>
                                        <span class="button-icon">➯</span>
                                    </button>
                          </div>
                    </div>
            </div>  <br /> <br />
      </div>
    ),
    Calidad: (
      <div> <br /> <br />
        <div className='Aspirante'>
          <h1><a href="http://sgi.utleon.edu.mx/" target='_blank'>SGI</a></h1>
        </div> <br /> <br />
        <div className='Aspirante'>
                    <h1>Política de Calidad Integral</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                          <p>Nos comprometemos en brindar satisfacción a nuestros clientes y nuestras clientas, a través de los servicios de educación superior tecnológica, de apoyo a los sectores productivo y social e incubación de negocios, así como prevenir la contaminación de los aspectos ambientales institucionales, cumpliendo con la normativa ambiental aplicable, promoviendo y difundiendo los principios de sustentabilidad a las partes interesadas, a través de la mejora continua del Sistema de Gestión Integral.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgPolitica} alt="" />
                        </div>
                    </div>
          </div> <br /> <br />
          <div className='Aspirante'>
                    <h1>Certificaciones Institucionales</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                          <p>La Universidad Tecnológica de León asegura el cumplimiento de la política y objetivos de calidad, a través de la implementación, mantenimiento y mejoramiento de los requisitos de la Normas ISO 9001:2015, ISO 14001:2015 y NMX-R-025-SCFI-2015</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgCertificacion} alt="" />
                        </div>
                    </div>
          </div> <br /> <br />
          <div className='Aspirante'>
                    <h1>Acreditaciones</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col'>
                          <tbody><tr><td className="ColorBotonLibre white--text">SEDE / NIVEL</td> <td className="ColorBotonLibre white--text">PROGRAMA EDUCATIVO</td> <td className="ColorBotonLibre white--text">ORGANISMO ACREDITADOR</td> <td colspan="2" className="ColorBotonLibre white--text">VIGENCIA</td> <td className="ColorBotonLibre white--text">LINK</td></tr> <tr><td rowspan="9">LEÓN TSU</td></tr> <tr><td>Administración, Área Recursos Humanos</td> <td>CACECA Consejo de Acreditación en la Enseñanza de&nbsp; la Contaduría y Administración A.C.</td> <td>31/10/2016</td> <td>31/10/2021</td> <td><a href="public_html/calidad/acreditaciones/a)Administración área Recursos Humanos 16- 21.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td>Desarrollo de Negocios, Área Mercadotecnia</td> <td>CACECA Consejo de Acreditación en la Enseñanza de&nbsp; la Contaduría y Administración A.C.</td> <td>31/10/2016</td> <td>31/10/2021</td> <td><a href="public_html/calidad/acreditaciones/b)Desarrollo de Negocios Área Mercadotecnia 16-21.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td>Turismo, Área Hotelería</td> <td>CONAET Consejo Nacional para la Calidad de la Educación Turística A.C.</td> <td>03/03/2017</td> <td>02/03/2022</td> <td><a href="public_html/calidad/acreditaciones/c)Turismo Área Hotelería 17-22.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td>Mecatrónica, Área Manufactura Flexible</td> <td>CACEI Consejo de Acreditación de la Enseñanza de la Ingeniería A.C.</td> <td>16/08/2018</td> <td>15/08/2023</td> <td><a href="public_html/calidad/acreditaciones/d)Mecatronica Área Sistemas de Manufactura Flexible 18-23.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td>Procesos Industriales, Área Manufactura</td> <td>CACEI Consejo de Acreditación de la Enseñanza de la Ingeniería A.C.</td> <td>16/08/2018</td> <td>15/08/2023</td> <td><a href="public_html/calidad/acreditaciones/e)Procesos Industriales Area Manufactura 18-23.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td>Procesos Industriales, Área Gestión y Productividad del Calzado </td> <td>CACEI Consejo de Acreditación de la Enseñanza de la Ingeniería A.C.</td> <td>16/08/2018</td> <td>15/08/2023</td> <td><a href="public_html/calidad/acreditaciones/f)Gestion y Productividad del Calzado 18-23.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td>Química, Área Tecnología Ambiental</td> <td>CACEI Consejo de Acreditación de la Enseñanza de la Ingeniería A.C.</td> <td>16/08/2018</td> <td>15/08/2023</td> <td><a href="public_html/calidad/acreditaciones/g)Quimica are Tecnologia Ambiental 18-23.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td>Gastronomía</td> <td>CONAET Consejo Nacional para la Calidad de la Educación Turística A.C.</td> <td>26/02/2020</td> <td>25/02/2025</td> <td><a href="public_html/calidad/acreditaciones/h)Gastronomía 20-25.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td rowspan="4">UAS TSU</td> <td>Administración, Área Recursos Humanos</td> <td>CACECA Consejo de Acreditación en la Enseñanza de  la Contaduría y Administración A.C.</td> <td>22/03/2019</td> <td>21/03/2024</td> <td>-</td></tr> <tr><td>Desarrollo de Negocios, Área Mercadotecnia</td> <td>CACECA Consejo de Acreditación en la Enseñanza de  la Contaduría y Administración A.C.</td> <td>22/03/2019</td> <td>21/03/2024</td> <td>-</td></tr> <tr><td>Procesos Industriales, Área Manufactura</td> <td>CIEES Comites Interinstitucionales para la Evaluación de la Educación Superior</td> <td>05/2021	</td> <td>06/2026</td> <td><a href="public_html/calidad/acreditaciones/i)Procesos Industriales Área Manufactura 21-26.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td>Tecnologías de la Información y Comunicación, Área Multimedia y Comercio Electrónico</td> <td>CONAIC Consejo Nacional de Acreditación en Informática y Computación, A.C.</td> <td>26/0372021	</td> <td>26/03/2026</td> <td><a href="public_html/calidad/acreditaciones/j)Tecnologías de la Información y Comunicación área Multimedia y Comercio Electrónico.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td rowspan="3">LEÓN/ING</td> <td>Ingeniería en Desarrollo e Innovación Empresarial</td> <td>CACECA Consejo de Acreditación en la Enseñanza de&nbsp; la Contaduría y Administración A.C.</td> <td>29/12/2017</td> <td>29/12/2022</td> <td><a href="public_html/calidad/acreditaciones/k)Ingeniería en Desarrollo e Innovación Empresarial 17-22.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td>Ingeniería en Tecnología Ambiental</td> <td>CACEI Consejo de Acreditación de la enseñanza de la Ingeniería, A.C.</td> <td>11/08/2021</td> <td>10/08/2024</td> <td><a href="public_html/calidad/acreditaciones/l)Ingeniería en Tecnología Ambiental 21-24.pdf" target="blank">Constancia de acreditación</a></td></tr> <tr><td>Licenciatura en Gestión y Desarrollo Turístico</td> <td>CONAET  Consejo Nacional para la Calidad de la Educación Turística A.C.</td> <td>13/03/2019	</td> <td>12/03/2024</td> <td>-</td></tr> <tr><td>UAS/ING</td> <td>Ingeniería en Tecnologías de la Información</td> <td>CONAIC Consejo Nacional de Acreditación en Informática y Computación, A.C.</td> <td>28/04/2021</td> <td>27/04/2026</td> <td><a href="public_html/calidad/acreditaciones/m)Ingeniería en Tecnologías de la Información.pdf" target="blank">Constancia de acreditación</a></td></tr></tbody>
                        </div>
                    </div>
          </div> <br /> <br />
          <div className='Aspirante'>
                    <h1>Sistema de Gestión Ambiental</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                          <p>Desarrollo y provisión de servicios educativos para los niveles de técnico/a superior universitario/a, licenciatura e ingeniería, incubación de negocios y servicios de apoyo a los sectores productivo y social.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgSistemaGI} alt="" />
                        </div>
                    </div>
          </div> <br /> <br />
      </div>
    ),
    Difusion: (
      <div> <br /> <br />
      <div className='Aspirante'>
                    <h1>Imagen Institucional </h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                          <p>El departamento de Imagen Institucional es el encargado del diseño gráfico de conceptos, productos y campañas de difusión internas y externas que sean congruentes y apoyen al posicionamiento de la institución.</p>
                          <p>Una de sus principales funciones es verificar el correcto uso del logotipo institucional, por lo cual, ponemos a su disposición el Manual de Identidad Corporativa para que se apegue a sus lineamientos.</p>
                          <p>Antes de producir cualquier material que incluya el logotipo institucional, deberá solicitar su validación con el Departamento de Imagen a la ext. 213 o al correo argomez@utleon.edu.mx.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgDifusion} alt="" />
                        </div>
                    </div>
          </div> <br /> <br />
          <div className='Aspirante'>
                    <h1>Comunicación y Eventos </h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                          <h3> Lineamientos del área de Comunicación y Eventos </h3>
                          <ul>
                            <li><a href="https://www.utleon.edu.mx/public_html/difusion-e-imagen/comunicacion-eventos/docs/Politicas_de_comunicacion_interna_y_externa_2023.docx" target='_blank'>Políticas de comunicación interna y externa</a></li>
                            <li><a href="https://www.utleon.edu.mx/public_html/difusion-e-imagen/comunicacion-eventos/docs/Politicas_web%202023.docx" target='_blank'>Políticas Web</a></li>
                            <li><a href="https://www.utleon.edu.mx/public_html/difusion-e-imagen/comunicacion-eventos/docs/FRDRP07_A_Solicitud_de_apoyo_para_evento.xlsx" target='_blank'>Formato de Solicitud de Apoyo a Eventos</a></li>
                            <li><a href="https://www.utleon.edu.mx/public_html/difusion-e-imagen/comunicacion-eventos/docs/FRDRP01_B%20Solicitud_de_apoyo_del_area_de%20comunicacion%20.xlsx" target='_blank'>Formato de Solicitud de Apoyo del Área de Comunicación</a></li>
                            <li><a href="https://www.utleon.edu.mx/public_html/difusion-e-imagen/comunicacion-eventos/docs/FRDRP08_A_Solicitud_de_difusion_de_campanas.xlsx" target='_blank'>Solicitud de Apoyo de Difusión de Campañas</a></li>
                            <li><a href="https://www.utleon.edu.mx/public_html/difusion-e-imagen/comunicacion-eventos/docs/formato_de_aviso_de_evento_2018.xlsx" target='_blank'>Ficha Informativa de Evento 2018</a></li>
                          </ul>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgDifusion} alt="" />
                        </div>
                    </div>
          </div> <br /> <br />
      </div>
    ),
    Transparencia: (
      <div> <br /> <br />
      <div className='Aspirante'>
              <h1>Finanzas</h1>
              <div className='div-modeloEducativo'>
                  <div className='div-modeloEducativo-izq col'>
                      <div className='button-container'>
                          <a href="https://www.utleon.edu.mx/public_html/plantilla_html/index.php" className="custom-button button-primary" target='_blank'>Actividades Culturales Campus Central</a>
                          <a href="https://www.utleon.edu.mx/resource/img/imagenes/utl_datos/PROGRAMA%20ANUAL%20POA%202022%20CORREGIDO.pdf" className="custom-button button-primary" target='_blank'>Actividades Culturales Campus II</a>
                          <a href="https://www.utleon.edu.mx/resource/img/imagenes/utl_datos/POA%202022.pdf" className="custom-button button-primary" target='_blank'>Actividades Deportivas Campus Central y Campus II</a>
                      </div>
                  </div>
              </div>
          </div> <br /> <br />
          <div className='Aspirante'>
              <h1>Contraloría Social</h1>
              <div className='div-modeloEducativo'>
                  <div className='div-modeloEducativo-izq col-7'>
                  <select className="form-select" aria-label="Default select example">
                      <option selected>Documentos Finales CS PIFI 2012</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                  </select>
                  <select className="form-select" aria-label="Default select example">
                      <option selected>Normas</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                  </select>
                  <select className="form-select" aria-label="Default select example">
                      <option selected>Documentos PIFI 2012</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                  </select>
                  <select className="form-select" aria-label="Default select example">
                      <option selected>PROMEP</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                  </select>
                  <select className="form-select" aria-label="Default select example">
                      <option selected>Programa Presupuestario U079</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                  </select>
                  </div>
                  <div className='div-modeloEducativo-der col-5'>
                      <img src={imgContraloria} alt="" />
                  </div>
              </div>
          </div> <br /> <br />
          <div className='Aspirante'>
              <h1><a href="https://transparencia.guanajuato.gob.mx/transparencia/informacion_publica_pordependencia.php?dependencia=52" target='_blank'>Obligaciones de Transparencia</a></h1>
          </div> <br /> <br />
      </div> 
  ),
  };

  return (
    <div>
      <Navbar modulo={"Somos UTL"} />
      <div className="section-buttons">
        <button
          className="btn "
          onClick={() => handleSectionChange("Conoce")}
        >
          Conoce Utl
        </button>
        <button className="btn" onClick={() => handleSectionChange("Calidad")}>
          Calidad
        </button>
        <button
          className="btn"
          onClick={() => handleSectionChange("Difusion")}
        >
          Difusion
        </button>
        <button
          className="btn"
          onClick={() => handleSectionChange("Transparencia")}
        >
          Transparencia
        </button>
      </div>
      {sections[activeSection]}
      {activeValue !== null && (
        <Modal
          title={valores[activeValue].title}
          content={valores[activeValue].content}
        />
      )}
      {CustomModal}
    </div>
  );
};

export default SomosUtl;
