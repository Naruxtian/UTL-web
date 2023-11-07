import React, {useState} from 'react'
import Navbar from '../../components/navbar'

const Egresado = () => {

    const [activeSection, setActiveSection] = useState('Bolsa');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const sections = {
        Bolsa:(
            <div> <br /> <br />
            <div className='Aspirante'>
                  <h1>Bolsa de Trabajo</h1>
                      <div className='div-modeloEducativo'>
                          <div className='div-modeloEducativo-izq col-7'>
                              <p>La bolsa de trabajo de egresados/as de la UTL es un espacio para que las empresas, instituciones y organizaciones puedan ofertar sus vacantes y la comunidad de egresados y egresadas de UTL tengan acceso.</p>
                          </div>
                          <div className='div-modeloEducativo-der col-5'>
                              <img src="/src/assets/img/BolsaT.jpg" alt="" />
                          </div>
                    </div>
            </div> <br /> <br />
            </div>
        ),
        Emprendimiento:(
            <div> <br /> <br />
            <div className='Aspirante'>
                  <h1>Emprendimiento Incubación de proyectos </h1>
                      <div className='div-modeloEducativo'>
                          <div className='div-modeloEducativo-izq col'>
                              <h3><b>¿Sueñas con tener tu propia empresa?</b></h3>
                              <h3><b>Acércate a nosotros.</b></h3>
                              <h3><b>¡Te ayudamos a desarrollar tu idea de negocio!</b></h3> <br />
                              <p>Planea, desarrolla y estructura tu modelo de negocio para asegurar el éxito de tu emprendimiento.</p>
                              <p>El Centro Incubador de Empresas (CIEM) de la UTL es la entidad encargada de fomentar una cultura de emprendimiento e innovación para la creación de nuevas empresas a través de la incubación de negocios, ideas y proyectos, generados entre la comunidad universitaria y la sociedad en general.</p>
                              <p>Somos una Incubadora reconocida e integrada a la Red de Incubadoras del Subsistema de Universidades Tecnológicas (RISUT) y que forma parte de la Red Estatal de Incubadoras de Guanajuato.</p>
                          </div>
                    </div>
            </div> <br /> <br />
            </div>
        ),
        Educacion:(
            <div> <br /> <br />
                <div className='Aspirante'>
                  <h1>Educación Continua</h1>
                      <div className='div-modeloEducativo'>
                          <div className='div-modeloEducativo-izq col-7'>
                              <h3><b>Objetivo:</b></h3>
                              <p>Ofrecer servicios de capacitación en diferentes modalidades como cursos, talleres y diplomados, desarrollados en colaboración con docentes de las diferentes direcciones académicas, dirigidos tanto a egresados(as) y demás integrantes de la Universidad, así como al público en general, con el propósito de apoyarles en su actualización profesional.</p>
                          </div>
                          <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/carrerasTSU/administracion.jpg" alt="" />
                          </div>
                    </div>
                </div>  <br /> <br />
            </div>
        ),
        Laborar: (
            <div> <br /> <br />
                <div className='Aspirante'>
                    <div className='div-modeloEducativo'>
                          <div className='div-modeloEducativo-izq col-7'>
                          <h1><a href="https://sito.utleon.edu.mx/jsp/reclutamiento/muestra_convocatoria_general.jsp" target='_blank'>Convocatorias</a></h1> <br />
                    <h1><a href="https://sito.utleon.edu.mx/jsp/solicitud_convocatoria/solicitudes_empleo.jsp" target='_blank'>Solicitud de empleo</a></h1> <br />
                          </div>
                          <div className='div-modeloEducativo-der col-5'>
                            <img src="/src/assets/img/ModeloEducativo2.jpg" alt="" />
                          </div>
                    </div>
                </div> <br /> <br />
            </div>
        )
    }


  return (
    <div>
        <Navbar />
        <div className="section-buttons">
          <button className='btn ' onClick={() => handleSectionChange('Bolsa')}>Bolsa de Trabajo</button>
          <button className='btn ' onClick={() => handleSectionChange('Emprendimiento')}>Emprendimiento</button>
          <button className='btn ' onClick={() => handleSectionChange('Educacion')}>Educacion</button>
          <button className='btn ' onClick={() => handleSectionChange('Laborar')}>¿Quieres Laborar en UTL?</button>
        </div>
      {sections[activeSection]}
    </div>
  )
}

export default Egresado