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
                </div>
            </div>
        ),
    }


  return (
    <div>
        <Navbar />
        <div className='section-buttons'>
            <button className='btn ' onClick={() => handleSectionChange('Tramites')}>Trámites Escolares</button>
            <button className='btn' onClick={() => handleSectionChange('OfertaEducativa')}>Oferta Educativa</button>
            <button className='btn' onClick={() => handleSectionChange('Admisiones')}>Admisiones</button>
        </div>
        {sections[activeSection]}
        {CustomModal}
    </div>
  )
}

export default Estudiante