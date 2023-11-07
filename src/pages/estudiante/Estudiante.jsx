import React, {useState} from 'react'
import Navbar from '../../components/navbar'

const Estudiante = () => {

    const [activeSection, setActiveSection] = useState('Tramites');
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');

    const handleOpenModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setModalOpen(true);
    };
    
    const closeModal = () => {
        setActiveValue(null);
    };      

    const handleSectionChange = (section) => {
        setActiveSection(section);
      };

    const CustomModal = (
    <div className={`modal ${isModalOpen ? 'show d-block' : ''}`} style={{ zIndex: 1050 }} onClick={() => setModalOpen(false)}>
        <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: '90%' }} nClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>
            <button type="button" className="close btn btn-danger" onClick={() => setModalOpen(false)}>
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

    const sections = {
        Tramites: (
            <div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Solicitud de Constancias</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>El proceso y emisión del documento de constancia de estudios se realizará por medio electrónico y de manera digital, debido al periodo de contingencia actual.
                            Se emite con los datos de la persona de la Institución que validada la información, así como, un código de identificación en el documento para cualquier cotejo o validación posterior, en caso de ser requerido por quién recibe el documento.
                            En caso de requerir una constancia de estudios, bajo las especificaciones expuestas, deberás realizar el siguiente proceso.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/constancia.jpg" alt="" />
                        </div>
                    </div>
                    <div><div ><iframe title="CONSTANCIA 21-03-2023" frameborder="0" width="1000px" height="675px" src="https://view.genial.ly/62461312c1dd840018544a09" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Reposición de Credencial</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>Si extraviaste tu credencial de alumno, es tu responsabilidad reponerla lo antes posible.</p>
                            <p>Recuerda que la credencial de alumno es necesaria para acceder a los laboratorios y otros servicios que brinda la universidad.</p>
                            <p>
                                <ul>
                                    <li>Realiza el pago de reposición de credencial, ingresando a tu cuenta de SITO en <b>1-Reinscripción y Referencias de Pago - 3-Otras Referencias - Otros Pagos - Reposición de credencial.</b></li>
                                    <li>Acude a Servicios Estudiantiles a solicitar la elaboración de tu credencial</li>
                                    <li>Recolecta las firmas y sellos de los diferentes departamentos en la Universidad en un formato proporcionado por Servicios Estudiantiles.</li>
                                    <li>Entrega el formato en Servicios Estudiantiles.</li>
                                    <li>En Servicios Estudiantiles te indicaran la fecha de entrega de tu nueva credencial.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/Credencial.jpeg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Tramite de IMSS</h1>
                    <div><div><iframe title="PROCESO IMSS" frameborder="0" width="800px" height="1600px" src="https://view.genial.ly/6413445c7a622500178c62ff" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Becas</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p><b>La Universidad Tecnológica de León, </b> cuenta con un sistema de Becas Internas y Externas con el objetivo de brindar apoyo para que el alumnado pueda continuar con su preparación académica y aminorar los factores económicos.</p>
                            <p>¡Que las cuestiones financieras no sean una limitante para que puedas continuar con tus estudios!</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/becas.jpg" alt="" />
                        </div>
                    </div>
                    <div><div><iframe title="Sitio Becas_EA6" frameborder="0" width="800px" height="1600px" src="https://view.genial.ly/6409ef9f15155d00126a8ace" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Pago de Examen de Regularización</h1>
                    <h3>Proceso de recuperación</h3>
                    <div><div><iframe title="PROCESO DE RECUPERACION EA2023" frameborder="0" width="1000px" height="675px" src="https://view.genial.ly/643ed4dab5cfa80011a47fde" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div> <br />
                    <h3>Proceso de extraordinario</h3>
                    <div><div ><iframe title="EXTRAORDINARIO MA2023" frameborder="0" width="1000px" height="675px"  src="https://view.genial.ly/63d402439b77f10012b53c9f" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Reinscripción</h1>
                    <div><div ><iframe title="REINSCRIPCIÖN CUATRIMESTRAL MA2023" frameborder="0" width="1000px" height="675px"  src="https://view.genial.ly/6436e1e9c114300013d65010" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Reingreso</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                        <button class="custom-button" onClick={() => handleOpenModal("Reincorporación por baja",<div><div><iframe title="REINGRESO EA2024" frameborder="0" width="700px" height="675px"  src="https://view.genial.ly/63ced312f376d3001a8e6881" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>)}>
                            <span class="button-text">Reincorporación por baja</span>
                            <span class="button-icon">➯</span>
                        </button>
                        <button class="custom-button" onClick={() => handleOpenModal("Cambio de otra UT", <div><div ><iframe title="CAMBIO DE UT - SD2023" frameborder="0" width="700px" height="675px"  src="https://view.genial.ly/63d3f32cd1cebc0018e7d6c6" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>)}>
                            <span class="button-text">Cambio de otra universidad tecnológica</span>
                            <span class="button-icon">➯</span>
                        </button>
                        <button class="custom-button" onClick={() => handleOpenModal("Interesados en otras IES", <div><div><iframe title="CAMBIO DE IE - SD2023" frameborder="0" width="800px" height="675px"  src="https://view.genial.ly/63d3f3104330010018e13c96" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>)}>
                            <span class="button-text">Interesados de otra institución educativa</span>
                            <span class="button-icon">➯</span>
                        </button>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/Reingreso.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Trámite de Baja</h1>
                    <h3>Proceso de baja definitiva</h3>
                    <div><div><iframe frameborder="0" width="800px" height="1600px" src="https://view.genial.ly/622f974c6078c7001917d0d6" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div> <br />
                    <h3>Proceso de baja temporal</h3>
                    <div><div><iframe title="PROCESO DE BAJA TEMPORAL" frameborder="0" width="800px" height="1600px"  src="https://view.genial.ly/650dc46ab85e1100112ac216" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Titulación</h1>
                    <h3>Titulación TSU</h3>
                    <div ><div><iframe title="Proceso Titulación TSU_MA2023" frameborder="0" width="800px" height="1600px"  src="https://view.genial.ly/62c60264e4b7e300196900ff" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div> <br />
                    <h3>Titulación ING/LIC</h3>
                    <div><div><iframe title="Proceso de Titulación ING m-a 2023" frameborder="0" width="800px" height="675px" src="https://view.genial.ly/640f49b43f071d0018ac6550" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>
                </div> <br /> <br />
            </div>
        ),
        Servicios:(
            <div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Actividades Culturales y Deportivas</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>Contribuir al desarrollo integral del estudiantado universitario fomentando valores, actitudes, habilidades y conocimientos a través de actividades culturales.
                            Dentro de las actividades culturales y deportivas desarrollamos las habilidades, destrezas, actitudes y valores de nuestro alumnado de manera integral.
                            Mostramos a la comunidad mediante exposiciones y presentaciones nuestras cualidades adquiridas en los talleres culturales.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/CulturaYDeporte.jpg" alt="" />
                        </div>
                    </div>
                    <div>
                    <div id="carouselExampleIndicators" class="carousel slide">
                            <h2>Actividades Deportivas</h2>
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="/src/assets/img/carousel-1.jpeg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="/src/assets/img/Reingreso.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="/src/assets/img/becas.jpg" class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div id="carouselExampleIndicators2" class="carousel slide">
                            <h2>Actividades culturales</h2>
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="/src/assets/img/carousel-1.jpeg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="/src/assets/img/Reingreso.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="/src/assets/img/becas.jpg" class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className='button-container'>
                            <a href="https://www.utleon.edu.mx/resource/img/imagenes/cultura%20central.jpg" className="custom-button button-primary" target='_blank'>Actividades Culturales Campus Central</a>
                            <a href="https://www.utleon.edu.mx/resource/img/imagenes/cultura%20cacmpus%20II.jpg" className="custom-button button-secondary" target='_blank'>Actividades Culturales Campus II</a>
                            <a href="https://www.utleon.edu.mx/resource/img/imagenes/deporte%20central.jpg" className="custom-button button-primary" target='_blank'>Actividades Deportivas Campus Central y Campus II</a>
                        </div>
                        <div>
                            <div className="div-historia">
                                <div className='div-historia-izq col-5'>
                                    <img src="/src/assets/img/Escolta.jpeg" alt="Imagen" className="image" />
                                </div>
                                <div className='div-historia-der col-7'>
                                    <h1>Contáctanos</h1>
                                    <div class="card">
                                        <h2>Lic. Teresa Negrete Rayas</h2>
                                        <b><p>Edificio C</p></b>
                                        <b><p>Lunes a viernes de 8:00 a 16:00 hrs</p></b>
                                        <b><p>Email: mnegrete@utleon.edu.mx</p></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Programa Institucional de Tutorías PIT</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>En la Universidad Tecnológica de León existe un Programa Institucional de Tutorías, y la acción tutorial se define como un acompañamiento y apoyo que el personal docente con funciones de tutoreo brinda a los estudiantes con el objetivo de alentar su permanencia y aprovechamiento escolar. Nuestro programa de tutoría fortalece la formación humana del estudiantado, mediante la atención personalizada a la problemática que cada estudiante enfrenta, facilitando su adaptación a la comunidad universitaria y el logro de los objetivos académicos.</p>
                            <p>Los principales alcances de la acción tutorial son: Detección, orientación, canalización y seguimiento</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/ProgramaInstitucional.jpg" alt="" />
                        </div>
                    </div>
                    <img src="/src/assets/img/Pasos.png" alt="" /> <br /> <br />
                    <h3>Puedes consultar la asignación del tutor o tutora de tu grupo, a través de <a href="https://sito.utleon.edu.mx/" target='_blank'>SITO</a></h3>
                    <div class="card">
                        <h2>Responsable Institucional de Tutorías:</h2>
                        <p>Mtra. Reyna Gabriela Martínez García</p>
                        <p>Ext. 302</p>
                        <p>Edificio CVD planta alta</p>
                        <p>rmartinezg@utleon.edu.mx</p>
                        <p><b>Horario de atención: </b>de lunes a viernes de 11:00 a 15:00 horas</p>
                    </div>
                    <h3><a href="https://www.utleon.edu.mx/resource/documentos/Organigrama%20Psic.%20SD22.pdf" target='_blank'>Organigrama</a></h3> <br />
                    <img src="/src/assets/img/Coordinaciones.png" alt="" />
                    <img src="/src/assets/img/Coordinaciones2.png" alt="" />
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Servicio de Atención Psicopedagógica SAP</h1> <br />
                    <div class="container">
                        <div class="card-s">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                            </svg>
                            <h2>Difundir información preventiva</h2>
                            <p>que aliente en los participantes la búsqueda de soluciones a problemáticas específicas.</p>
                        </div>

                        <div class="card-s">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                            </svg>
                            <h2>Brindar intervenciones psicológicas breves</h2>
                            <p>que faciliten el afrontamiento de riesgos leves.</p>
                        </div>

                        <div class="card-s">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                            </svg>    
                            <h2>Derivar formalmente y dar seguimiento</h2>
                            <p>a los casos de riesgo moderado o grave que requieran atención de instituciones especializadas.</p>
                        </div>

                        <div class="card-s">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                            </svg>
                            <h2>Aportar información a las áreas académicas</h2>
                            <p>y de servicio que permitan la mejora continua de sus procesos.</p>
                        </div>
                    </div> <br />
                        <p>Algunos motivos por los que se brinda orientación son: desorientación vocacional y escolar, posibles riesgos de deserción escolar, dificultades en el estado de ánimo, trastornos emocionales y de conducta, problemas familiares, personales y/o escolares, proyecto de vida, etc.</p>
                        <p>El servicio es de alcance orientativo e intervención en crisis ya que por los alcances y objetivos institucionales en caso de que el estudiante requiera tratamiento psicológico, médico o nutricional se canalizará a instancias externas adecuadas.</p>
                        <h3>Puedes solicitar orientación individual a través del módulo SAP en <a href="https://sito.utleon.edu.mx/" target='_blank'>SITO</a>o con tu tutor/a.</h3>
                        <p>Horario de orientación individual de lunes a viernes de 8:00 a 15:00 horas. y 16:00 a 20:00 horas; sábados de 9:00 a 13:00 horas</p>
                        <div class="card">
                            <h2>Jefatura de Departamento Psicopedagógico</h2>
                            <p>Mtra. Reyna Gabriela Martínez García</p>
                            <p>Ext. 302</p>
                            <p>Edificio CVD planta alta</p>
                            <p>rmartinezg@utleon.edu.mx</p>
                        </div> <br /> <br />
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Emprendimiento Incubación de proyectos </h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>Planea, desarrolla y estructura tu modelo de negocio para asegurar el éxito de tu emprendimiento.</p>
                            <p>El Centro Incubador de Empresas (CIEM) de la UTL es la entidad encargada de fomentar una cultura de emprendimiento e innovación para la creación de nuevas empresas a través de la incubación de negocios, ideas y proyectos, generados entre la comunidad universitaria y la sociedad en general.</p>
                            <p>Somos una Incubadora reconocida e integrada a la Red de Incubadoras del Subsistema de Universidades Tecnológicas (RISUT) y que forma parte de la Red Estatal de Incubadoras de Guanajuato.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/ProgramaInstitucional.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Centro de Información </h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>Es el área donde la comunidad académica encontrarán los recursos de información en diferentes formatos (libros, revistas, cd, dvd etc.)que apoyan los planes de estudio de cada programa educativo.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/becas.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1><a href="http://sac.utleon.edu.mx/" target='_blank'>Centro de Idiomas</a></h1>
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Salud Integral  </h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>En el área de Salud integral se te brinda los servicios médicos de urgencias y canalizaciones.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/CulturaYDeporte.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Laboratorios Especializados</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>Tecnologías de la información</p>
                            <p>Económico Administrativa</p>
                            <p>Electromecánica Industrial</p>
                            <p>Sustentabilidad para el desarrollo</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/carrerasTSU/Plásticos.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1><a href="https://www.utleon.edu.mx/public_html/servicios-universitarios/servicios-informaticos/altas-de-internet/Servicios-Politicas-DSI-2022.pdf" target='_blank'>Altas de Internet</a></h1>
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Centros de Cómputo</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>El centro de cómputo es un servicio para el alumnado, profesorado y personal administrativo que necesite computadora como herramienta de ayuda. Se programa horario de clase para el alumnado, el cual se tiene que respetar y si requieren más tiempo en el CC se puede programar en otra hora y día. Se tienen 9 laboratorios con 24 equipos cada uno y 1 laboratorios con 23 equipos. Se puede programar el uso del CC a personas externas a la institución siempre y cuando los horarios de clases lo permitan.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/carrerasTSU/DesarrolloDeSoftwareMultiplataforma.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Aula Virtual</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h3>Objetivo:</h3>
                            <p>Brindar asesoría para producir recursos y servicios educativos digitales, a través de estrategias tecnológicas, que contribuyen al aprendizaje y mejora continua para la práctica docente en las diferentes modalidades que se imparten en la comunidad educativa.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/carrerasING/RedesInteligentesYCiberseguridad.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Estadias</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>Es la práctica profesional que realizas como estudiante de TSU o Ingeniería, donde aplicas todos tus conocimientos adquiridos durante tu formación académica, con la elaboración de un proyecto que satisfaga las necesidades de la Empresa. Este proyecto se desarrolla y culmina en un periodo de 13 semanas.</p>
                            <p>En la Estadía:</p>
                            <ul>
                                <li>Como estudiante eres guiado por un/a Asesor/a Académico/a (docente de tiempo completo y experto en el área) y un/a Asesor/a Organizacional (persona designada por la organización para tu seguimiento).</li>
                                <li>La organización debe de proporcionarte el espacio, material y equipo necesario para el desarrollo de tu proyecto.</li>
                                <li>Debes contar con algún tipo de Seguridad Social y mantenerlo vigente durante el periodo de Estadía.</li>
                            </ul>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/carrerasING/CapitalHumano.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Estadías Especiales e Internacionalización</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p><b>Forma parte de una experiencia única en la República Mexicana o en el Extranjero.</b></p>
                            <p>La estadía especial, es la práctica profesional que realiza un TSU o Ingeniero durante 13 semanas fuera del estado de Guanajuato, que te permite:</p>
                            <ul>
                                <li>Desarrollar la visión global que necesitas para enfrentar los desafíos locales e internacionales</li>
                                <li>Entender las distintas culturas y resolver problemas actuando en un entorno ajeno</li>
                                <li>Adquirir conciencia de otros puntos de vista y formas de pensar acerca del mundo</li>
                                <li>Mejorar la fluidez en otro idioma y su uso en la práctica</li>
                                <li>Aumentar tu seguridad, responsabilidad personal y autonomía</li>
                                <li>Optimizar sus oportunidades profesionales.</li>
                            </ul>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/ProgramaInstitucional.jpg" alt="" />
                        </div>
                    </div>
                    <p>¡Revisa nuestras convocatorias, complementa tu formación y actualiza tus conocimientos en otro país!</p>
                    <a href="https://www.utleon.edu.mx/public_html/alumno/movilidad/estadias-especiales/docs/Guia%20para%20el%20Estudiante%20Movilidad.pdf" target='_blank'>Consulta nuestra guia de movilidad donde te daremos algunos tips que debes considerar antes y durante tu viaje.</a>
                    <p>Los Programas de Movilidad son gestionados por el Departamento de Internacionalización adscrito a la Secretaría de Vinculación, en conjunto con las áreas académicas involucradas y son financiados por el alumnado o con el apoyo de becas federales y estatales.</p>
                    <p>Vivir una experiencia internacional te permite ver la vida y el mundo de otra manera; mejorar tu competencia lingüística y obtener oportunidades de empleo. A su vez, te acercas a otra cultura, lo que logra un enriquecimiento social, una capacitación especializada y una experiencia de mucho valor para tu currículo de vida.</p>
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Investigación Estudiantil</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h3>Jóvenes Investigadores e Investigadoras</h3>
                            <p>El Programa de Jóvenes Investigadoras e Investigadores impulsa el desarrollo de las competencias científicas como son: plantear un problema de investigación, saber revisar el estado del arte, analizar los datos y saber como estructurar un documento científico; diseñar un prototipo (en las carreras tecnológicas).</p>
                            <p>Se realiza a través de las siguientes actividades:</p>
                            <ul>
                                <li>Colaboración en investigación con docentes UTL: colaboras en un proyecto, tienes un asesor (a) que te guía durante todo el desarrollo del proyecto.</li>
                                <li>Estancias de investigación (virtuales y/o presenciales) locales, nacionales e internacionales. Las estancias de investigación se realizan durante varias semanas, en las cuales trabajarás en conjunto con un investigador(a) experto(a) en el tema, bajo su supervisión, realizaras un proyecto de investigación, realizarás revisión del marco teórico, validación de los instrumentos de intervención para la investigación, diseñarás o crearás un prototipo, realizarás experimentos, etc.</li>
                                <li>Encuentro de Jóvenes Investigadores e Investigadoras: Se realiza de forma anual con la finalidad de mostrar los resultados de tus proyectos de investigación, innovación, estadías, emprendedores, e integradores.</li>
                            </ul>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/Reingreso.jpg" alt="" />
                        </div>
                    </div>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h3>Programa Delfín</h3>
                            <p>El Programa Delfín, se creó en 1995 con el objetivo fortalecer la cultura de colaboración entre las Instituciones de Educación Superior y Centros de Investigación integrantes del Programa, a través de la movilidad de profesores-investigadores, estudiantes y de la divulgación de productos científicos y tecnológicos.</p>
                            <p>La UTL forma parte de las más de 250 universidades de alcance nacional e internacional que integran este proyecto.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/Reingreso.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
            </div>
        ),
        Organo: (
            <div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Comisión de Salud UTL</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-5'>
                            <h3>Objetivo</h3>
                            <p>El objetivo de la comisión es el siguiente: "Ser un ente estratégico y ejecutivo que defina las lineas de seguridad sanitaria así como las acciones tácticas y operativas para la prevención del COVID-19 en la Universidad Tecnológica de León".</p>
                        </div>
                        <div className='div-modeloEducativo-der col-7'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/HKdD75EAEas" title="Vídeo Introductorio Comisión de Salud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Cultura de Paz</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h3>Objetivo</h3>
                            <p>Generar acciones a favor de la cultura de paz en la Comunidad UTL y en la sociedad. En 1998, la UNESCO define a la Cultura de Paz como un esfuerzo de todos y todas, que busca modificar mentalidades y actitudes con el propósito de promover la paz; lo que significa transformar y prevenir los conflictos que puedan generar violencia, y así restaurar la paz.</p>
                            <h3>Integración del Comité:</h3>
                            <p>El Comité está representado por la Comunidad UTL, participando Alta Dirección, estudiantes Agentes de Paz, Docentes y personal administrativo. Preside la Dra. Yoloxóchitl Bustamante Diez. Enc. de la Rectoría UTL Secretaria Técnica Olga Rebeca Ledesma García. Directora de Desarrollo Académico y Docente También se cuenta con un Comité en la Unidad Académica Sureste.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/constancia.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
            </div>
        ),
        Normativa: (
            <div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Normativa Estudiantil </h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>La Normativa Estudiantil UTL brinda una serie de reglas claras que permiten una interrelación aromoniosa entre los integrantes de la comunidad académica (estudiantes, docentes)</p>
                            <p>Es importante conocer las obligaciones, beneficios y sanciones que permitan garantizar el aprovechamiento escolar y una educación de calidad.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/ProgramaInstitucional.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
            </div>
        ),
        Quejas: (
            <div> <br /> <br />
            <div className='Aspirante'>
                    <h1>Buzón de Quejas y Denuncias</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h3>Estimado estudiante, en caso de presentar alguna situación te invitamos a presentar tu queja o denuncia, deberás:</h3>
                            <ul>
                                <li>Escribir tus datos completos, en caso de así considerarlo (No obligatorio).</li>
                                <li>Colocar tu correo electrónico para poder dar seguimiento puntual.</li>
                                <li>Plantear la queja señalando, tiempo, modo y lugar.</li>
                                <li>El contenido no debe ser con lenguaje impropio.</li>
                            </ul>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/constancia.jpg" alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
            </div>
        )
    }


  return (
    <div>
        <Navbar modulo={"estudiante"} />
        <div className='section-buttons'>
            <button className='btn ' onClick={() => handleSectionChange('Tramites')}>Trámites Escolares</button>
            <button className='btn' onClick={() => handleSectionChange('Servicios')}>Servicios Integrales Para El Alumnado</button>
            <button className='btn' onClick={() => handleSectionChange('Organo')}>Órganos Colegiados</button>
            <button className='btn' onClick={() => handleSectionChange('Normativa')}>Normativa Estudiantil</button>
            <button className='btn' onClick={() => handleSectionChange('Quejas')}>Quejas y Denuncias</button>
        </div>
        {sections[activeSection]}
        {CustomModal}
    </div>
  )
}

export default Estudiante