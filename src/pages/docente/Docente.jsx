import React, {useState} from 'react'
import Navbar from '../../components/navbar'
import imgUniversidad from "/src/assets/img/universidad.png"
import imgTurismo from "/src/assets/img/carrerasTSU/Turismo.jpg"
import imgComercioTuristico from "/src/assets/img/carrerasING/DesarrolloTurístico.jpg"
import imgProgramaInstitucional from "/src/assets/img/ProgramaInstitucional.jpg"
import imgMercadotecnia from "/src/assets/img/carrerasTSU/DesarrolloDeNegociosAreaMercadotecnia.jpg"
import imgConstancia from "/src/assets/img/constancia.jpg"
import imgGobierno from "/src/assets/img/Gobierno.jpeg"
import imgJunta from "/src/assets/img/Junta.jpeg"
import imgComputadora from "/src/assets/img/computadora.jpg"
import imgReingreso from "/src/assets/img/Reingreso.jpg"
import imgSalud from "/src/assets/img/Salud.jpg"
import imgJunta2 from "/src/assets/img/Junta2.jpg"
import imgComite from "/src/assets/img/Comite.jpg"
import imgModeloEducativo2 from "/src/assets/img/ModeloEducativo2.jpg"
import imgSeguridad from "/src/assets/img/Seguridad.jpg"

const Docente = () => {

    const [activeSection, setActiveSection] = useState('Recursos');

    const handleSectionChange = (section) => {
        setActiveSection(section);
      };

    const sections = {
        Recursos: (
            <div> <br /> <br />
                <div className='Aspirante'>
                    <h1><a href="https://sito.utleon.edu.mx/" target='_blank'>SITO</a></h1>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1><a href="http://sgi.utleon.edu.mx/" target='_blank'>SGI</a></h1>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1><a href="https://www.utleon.edu.mx/resource/img/CALENDARIO%20LE%C3%93N.jpg" target='_blank'>Calendario Escolar</a></h1>
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Difusión e Imagen Institucional</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>El departamento de Imagen Institucional es el encargado del diseño gráfico de conceptos, productos y campañas de difusión internas y externas que sean congruentes y apoyen al posicionamiento de la institución.</p>
                            <p>Una de sus principales funciones es verificar el correcto uso del logotipo institucional, por lo cual, ponemos a su disposición el Manual de Identidad Corporativa para que se apegue a sus lineamientos.</p>
                            <p>Antes de producir cualquier material que incluya el logotipo institucional, deberá solicitar su validación con el Departamento de Imagen a la ext. 213 o al correo <b>argomez@utleon.edu.mx</b>.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgUniversidad} alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1><a href="http://zammad.utleon.edu.mx/#login" target='_blank'>Mesa de Ayuda DSI</a></h1>
                </div> <br /> <br />
            </div>
        ),
        Desarrollo: (
            <div> <br /> <br />
            <div className='Aspirante'>
                <h1>Programa de Inducción para el Profesorado de Nuevo Ingreso</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h3>CURSO DE INDUCCIÓN:</h3>
                            <p>Con la finalidad de proveer al profesorado la información básica para el desarrollo de sus actividades académicas y administrativas, el aprovechamiento de los beneficios y la observación de las responsabilidades que obtiene como profesora o profesor de la Universidad.</p>
                            <p>El curso tiene una duración de 10 horas, autogestivo y debe cubrirse en el primer cuatrimestre de ingreso.</p>
                            <h3>CURSO MICROENSEÑANZA:</h3>
                            <p>Su objetivo es ofrecer al profesorado competencias docentes en la educación que junto a su experiencia y práctica en el uso y manejo de herramientas educativas propias, incremente su efectividad en el proceso enseñanza aprendizaje en el salón de clases.</p>
                            <p>El curso tiene una duración de 20 horas, se imparte de forma presencial de acuerdo a programa de capacitación.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgTurismo} alt="" />
                        </div>
                    </div>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h3>Capacitación Docente</h3>
                            <p>Actualmente el proceso formativo se realiza a través del “Diplomado en Innovación Educativa”, con 192 horas de capacitación, que se imparten cada cuatrimestre, de acuerdo al programa.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgComercioTuristico} alt="" />
                        </div>
                    </div> <br />
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h3>Movilidad Docente</h3>
                            <h2>El programa está dirigido a:</h2>
                            <ul>
                                <li>Profesorado de Tiempo Completo de la UTL que deseen realizar estancias de investigación, cursos, asesoría de tesis o actividades relacionadas con su área de conocimiento en otras Universidades Tecnológicas del país.</li>
                                <li>Profesorado de Tiempo Completo de otras Universidades Tecnológicas que deseen realizar estancias de investigación, cursos, asesoría de tesis o actividades relacionadas con su área de conocimiento en la UTL o sus unidades académicas.</li>
                            </ul>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgProgramaInstitucional} alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                <h1>Atención y Asesoramiento Tecnopedagógico</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>Con la finalidad de fortalecer la práctica pedagógica y la mejora continua, la/el docente cuenta con un espacio de asesoramiento tecnopedagógico para el diseño de recursos didácticos, cursos presenciales y/o en línea, así como el aseguramiento de la implementación del modelo educativo centrado en el aprendizaje y las competencias.</p>
                            <h3>Solicitud de Asesoramiento:</h3>
                            <p>Solicitud individual/grupal: a través del correo electrónico solicitar la entrevista para atender las necesidades identificadas. En caso del grupo, se solicita a través del coordinador o gestor.</p>
                            <p><b>Canalización:</b> Se solicita a través de la gestoría académica.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgMercadotecnia} alt="" />
                        </div>
                    </div>
                </div>  <br /> <br />
                <div className='Aspirante'>
                <h1>Programa Institucional de Tutorías PIT</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>En la Universidad Tecnológica de León existe un Programa Institucional de Tutorías, y la acción tutorial se define como un acompañamiento y apoyo que el personal docente con funciones de tutoreo brinda a los docentes con el objetivo de alentar su permanencia y aprovechamiento escolar. Nuestro programa de tutoría fortalece la formación humana del estudiantado, mediante la atención personalizada a la problemática que cada docente enfrenta, facilitando su adaptación a la comunidad universitaria y el logro de los objetivos académicos.</p>
                            <p>Los principales alcances de la acción tutorial son: Detección, orientación, canalización y seguimiento</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgProgramaInstitucional} alt="" />
                        </div>
                    </div>
                </div>  <br /> <br />
                <div className='Aspirante'>
                <h1>Aula Virtual</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h3>Objetivo:</h3>
                            <p>Brindar asesoría para producir recursos y servicios educativos digitales, a través de estrategias tecnológicas, que contribuyen al aprendizaje y mejora continua para la práctica docente en las diferentes modalidades que se imparten en la comunidad educativa.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgConstancia} alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>DHyO</h1>
                    <h2><a href="https://sito.utleon.edu.mx/jsp/reclutamiento/muestra_convocatoria_general.jsp" target='_blank'>Reclutamiento y Selección</a></h2> <br />
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h3>Compatibilidad Empleo </h3>
                            <p>Es el documento a través del cual se tramita la certificación y/o autorización que los servidores públicos facultados en las dependencias y entidades de la Administración Pública Federal conceden a los trabajadores o profesionales, para desempeñar dos o más empleos, cuyos sueldos u honorarios se cubran con cargo al presupuesto de egresos de la Federación.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgGobierno} alt="" />
                        </div>
                    </div>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h3>Resultados de Medición </h3>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgJunta} alt="" />
                        </div>
                    </div>
                </div>  <br /> <br />
            </div>
        ),
        Investigacion: (
            <div> <br /> <br />
                <div className='Aspirante'>
                    <h1>PRODEP</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>El Programa para el Desarrollo Profesional Docente (PRODEP) es un programa federal de la secretaría de educación pública, el cual busca profesionalizar a los Profesores de Tiempo Completo (PTC) para que alcancen las capacidades de investigación, docencia, desarrollo tecnológico e innovación, con responsabilidad social para que se articulen y consoliden en Cuerpos Académicos y así generar una nueva comunidad universitaria capaz de transformar su entorno.</p>
                            <h4>PERFIL DESEABLE</h4>
                            <p>Se refiere al profesor universitario que posee un nivel de habilitación académica superior al de los programas educativos que imparte, preferentemente cuenta con el doctorado y, además, realiza de forma equilibrada actividades de docencia, generación o aplicación innovadora de conocimientos, tutorías y gestión académica o vinculación</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgComputadora} alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Programa Delfín</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>El Programa Delfín, se creó en 1995 con el objetivo fortalecer la cultura de colaboración entre las Instituciones de Educación Superior y Centros de Investigación integrantes del Programa, a través de la movilidad de profesores-investigadores, estudiantes y de la divulgación de productos científicos y tecnológicos.</p>
                            <p>La UTL forma parte de las más de 250 universidades de alcance nacional e internacional que integran este proyecto.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgReingreso} alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1><a href="http://reaxion.utleon.edu.mx/" target='_blank'>Revista Reaxxión</a></h1>
                </div> <br /> <br />
            </div>
        ),
        Salud: (
            <div> <br /> <br />
            <div className='Aspirante'>
                <h1>Salud Integral  </h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>En el área de Salud integral se te brinda los servicios médicos de urgencias y canalizaciones.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgSalud} alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
            </div>
        ),
        Organos: (
            <div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Comité Ética y Prevención de Conflictos de Interés</h1>
                        <div className='div-modeloEducativo'>
                            <div className='div-modeloEducativo-izq col-7'>
                                <p>El objetivo del Comité de Ética y Prevención del conflicto de Interés, tendrá por objeto promover y difundir la observancia de valores éticos y la prevención del conflicto de interés, en las actividades que realiza la comunidad universitaria.</p>
                            </div>
                            <div className='div-modeloEducativo-der col-5'>
                                <img src={imgJunta2} alt="" />
                            </div>
                        </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Comité de Igualdad Laboral y No Discriminación</h1>
                        <div className='div-modeloEducativo'>
                            <div className='div-modeloEducativo-der col'>
                                <img src={imgComite} alt="" />
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
                            <img src={imgConstancia} alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Comisión de Salud UTL</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <p>El objetivo de la comisión es el siguiente: "Ser un ente estratégico y ejecutivo que defina las lineas de seguridad sanitaria así como las acciones tácticas y operativas para la prevención del COVID-19 en la Universidad Tecnológica de León".</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgModeloEducativo2} alt="" />
                        </div>
                    </div>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Seguridad Institucional</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col-7'>
                            <h2>Protocolos de Seguridad</h2>
                            <p>Dentro de las siguientes líneas estratégicas: “Simplificación y mejora continua de procesos”, “consolidación de la infraestructura de la Universidad” y “desarrollo de la responsabilidad social universitaria”, es que tiene origen la inquietud por fortalecer la cultura de seguridad y la cultura de la protección civil para fomentar la prevención ante contingencias y/o desastres naturales que pueden causar un daño a la comunidad universitaria.</p>
                            <p>Pero no es sino hasta la creación del Espacio Común de Educación Superior Tecnológica (ECEST) en el 2009, que se comienzan a realizar una serie de trabajos orientados a impulsar el mejoramiento general de los servicios educativos que brindan las instituciones de educación superior (IES) de los subsistemas de Institutos Tecnológicos, Universidades Politécnicas y Universidades Tecnológicas. En particular y, dentro de este marco, en 2010 se conformó la Comisión de Cultura, Prevención y Seguridad con objeto de atender la demanda de espacios educativos seguros y en los que se viva una cultura de prevención y seguridad. No obstante esto no sólo se consolida en el ECEST, sino también en gran medida en lo que la certificación en ISO 14001:2004 nos marca como un requisito indispensable no nada más para salvaguardar la vida de los miembros de la comunidad universitaria, sino también para saber qué hacer en caso de una emergencia ambiental.</p>
                        </div>
                        <div className='div-modeloEducativo-der col-5'>
                            <img src={imgSeguridad} alt="" />
                        </div>
                    </div>
                    <h3><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolo-de-emergencia/img_protocolo_de_emergencia.jpg" target='_blank'>Protocolo de Emergencia</a></h3>
                </div> <br /> <br />
                <div className='Aspirante'>
                    <h1>Sub Comité de Atención a Presuntos Casos de Violencia, Acoso y Hostigamiento Sexual</h1>
                    <div className='div-modeloEducativo'>
                        <div className='div-modeloEducativo-izq col'>
                            <h2>Antecedentes</h2>
                            <p><b>En el ámbito laboral:</b></p>
                            <p>2016 a la fecha</p>
                            <ul>
                                <li>Derivado de la NOM 025, se instala el 25 de agosto de 2017el Comité de Atención a la Violencia, Hostigamiento y Acoso laboral. Una acción que se distingue es contar con el Ombudsperson externo y que apoya los casos una vez activado el protocolo.</li>
                                <li>Se cuenta con el Manual de PAVH para el ámbito administrativo.</li>
                            </ul>
                            <p><b>En el ámbito académico:</b></p>
                            <p>2008 a la fecha Se cuenta con el Reglamento de la Comisión de Honor y Justicia, a través del cual se generan las medidas disciplinarias entre estudiantes, facultando a las Direcciones Académicas para las acciones correspondientes.</p>
                            <p>2019 a la fecha Creación de la figura de Citizen Manager para la coordinación colegiada de atención a presuntos casos.</p>
                            <p>Se comienza la elaboración de un Protocolo de Atención específico para los casos de Violencia, Hostigamiento y Acoso entre estudiantado.</p>
                        </div>
                    </div>
                </div> <br /> <br />
            </div>
        )
    }



  return (
    <div>
        <Navbar modulo={"docente"} />
        <div className="section-buttons">
          <button className='btn ' onClick={() => handleSectionChange('Recursos')}>Recursos Para La Gestión Docente</button>
          <button className='btn'><a href="https://www.utleon.edu.mx/resource/documentos/CIV_Solicitud%202%20Politicas%20de%20carga%20acad%C3%A9mica.pdf" target='_blank'>NORMATIVA</a></button>
          <button className='btn' onClick={() => handleSectionChange('Desarrollo')}>Desarrollo Académico y Docente</button>
          <button className='btn' onClick={() => handleSectionChange('Investigacion')}>Investigacion UTL</button>
          <button className='btn' onClick={() => handleSectionChange('Salud')}>Salud Integral</button>
          <button className='btn' onClick={() => handleSectionChange('Organos')}>Órganos Colegiados</button>
        </div>
      {sections[activeSection]}
    </div>
  )
}

export default Docente