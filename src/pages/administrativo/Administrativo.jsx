import React, {useState} from 'react'
import Navbar from '../../components/navbar'
import imgUniversidad from "/src/assets/img/universidad.png"
import imgJunta from "/src/assets/img/Junta.jpeg"
import imgJunta2 from "/src/assets/img/Junta2.jpg"
import imgComite from "/src/assets/img/Comite.jpg"
import imgContraloria from "/src/assets/img/Contraloria.png"
import imgSalud from "/src/assets/img/Salud.jpg"
import imgSeguridad from "/src/assets/img/Seguridad.jpg"

const Administrativo = () => {
  const [activeSection, setActiveSection] = useState("Recursos");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const sections = {
    Recursos: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>
            <a href="https://sito.utleon.edu.mx/" target="_blank">
              SITO
            </a>
          </h1>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>
            <a href="http://sgi.utleon.edu.mx/" target="_blank">
              SGI
            </a>
          </h1>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>
            <a
              href="https://www.utleon.edu.mx/resource/img/CALENDARIO%20LE%C3%93N.jpg"
              target="_blank"
            >
              Calendario Escolar
            </a>
          </h1>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Difusión e Imagen Institucional</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                El departamento de Imagen Institucional es el encargado del
                diseño gráfico de conceptos, productos y campañas de difusión
                internas y externas que sean congruentes y apoyen al
                posicionamiento de la institución.
              </p>
              <p>
                Una de sus principales funciones es verificar el correcto uso
                del logotipo institucional, por lo cual, ponemos a su
                disposición el Manual de Identidad Corporativa para que se
                apegue a sus lineamientos.
              </p>
              <p>
                Antes de producir cualquier material que incluya el logotipo
                institucional, deberá solicitar su validación con el
                Departamento de Imagen a la ext. 213 o al correo{" "}
                <b>argomez@utleon.edu.mx</b>.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src={imgUniversidad} alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>
            <a href="http://zammad.utleon.edu.mx/#login" target="_blank">
              Mesa de Ayuda DSI
            </a>
          </h1>
        </div>{" "}
        <br /> <br />
      </div>
    ),
    Desarrollo: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>
            <a
              href="https://sito.utleon.edu.mx/jsp/reclutamiento/muestra_convocatoria_general.jsp"
              target="_blank"
            >
              Reclutamiento y Selección
            </a>
          </h1>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Capacitación</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col">
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre del evento de capacitación</th>
                    <th>Objetivo del Evento</th>
                    <th>Orientación del evento</th>
                    <th>Tipo Programa</th>
                    <th>Justificación</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>ABC de la accesibilidad web</th>
                    <th>
                      Identifica la estructura básica de la accesibilidad web,
                      partiendo de la necesidad de elaborar un diseño universal
                      que permita a las personas con discapacidad el acceso a la
                      información en condiciones de igualdad y sin
                      discriminación.
                    </th>
                    <th
                      rowSpan={4}
                      style={{ verticalAlign: "middle", textAlign: "center" }}
                    >
                      Desarrollo de habilidades
                    </th>
                    <th
                      rowSpan={4}
                      style={{ verticalAlign: "middle", textAlign: "center" }}
                    >
                      Interno
                    </th>
                    <th
                      rowSpan={4}
                      style={{ verticalAlign: "middle", textAlign: "center" }}
                    >
                      Acreditar a las personas servidoras públicas en temas que
                      impactan en su desarrollo profesional y personal
                    </th>
                    <th
                      rowSpan={4}
                      style={{ verticalAlign: "middle", textAlign: "center" }}
                    >
                      Febrero - Noviembre 2022
                    </th>
                  </tr>
                  <tr>
                    <th>Administración de proyectos</th>
                    <th>
                      Conoce e identifica cada una de las etapas de la
                      metodología PMI® para aplicar las mejores prácticas
                      internacionales en la administración eficiente de
                      proyectos.
                    </th>
                  </tr>
                  <tr>
                    <th>Claves para la atención pública sin discriminación</th>
                    <th>
                      Identifica estrategias que permiten a las servidoras
                      públicas y a los servidores públicos encaminar su actuar
                      hacia un trato libre de discriminación en el contexto
                      mexicano.
                    </th>
                  </tr>
                  <tr>
                    <th>Cómo gestionar tu tiempo de forma fácil y sencilla</th>
                    <th>
                      Desarrolla habilidades para la dirección y administración
                      del tiempo aplicando técnicas y herramientas para su
                      gestión con el objetivo de cumplir las metas establecidas
                      y mejorar la eficiencia en el trabajo.
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Entrega-Recepción</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                Lo que todo servidor público debe realizar al separarse de su
                empleo, cargo o comisión.
              </p>
              <p>
                <a href="" target="_blank">
                  INSTRUCTIVO PARA GENERAR EL ACTA DE ENTREGA RECEPCIÓN
                </a>
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src={imgJunta} alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Resultados de Medición </h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7"></div>
            <div className="div-modeloEducativo-der col-5">
              <img src={imgJunta} alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
      </div>
    ),
    Organos: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Comité Ética y Prevención de Conflictos de Interés</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                El objetivo del Comité de Ética y Prevención del conflicto de
                Interés, tendrá por objeto promover y difundir la observancia de
                valores éticos y la prevención del conflicto de interés, en las
                actividades que realiza la comunidad universitaria.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src={imgJunta2} alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Comité de Igualdad Laboral y No Discriminación</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-der col">
              <img src={imgComite} alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>
            Sub Comité de Atención a Presuntos Casos de Violencia, Acoso y
            Hostigamiento Sexual
          </h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col">
              <h2>Antecedentes</h2>
              <p>
                <b>En el ámbito laboral:</b>
              </p>
              <p>2016 a la fecha</p>
              <ul>
                <li>
                  Derivado de la NOM 025, se instala el 25 de agosto de 2017el
                  Comité de Atención a la Violencia, Hostigamiento y Acoso
                  laboral. Una acción que se distingue es contar con el
                  Ombudsperson externo y que apoya los casos una vez activado el
                  protocolo.
                </li>
                <li>
                  Se cuenta con el Manual de PAVH para el ámbito administrativo.
                </li>
              </ul>
              <p>
                <b>En el ámbito académico:</b>
              </p>
              <p>
                2008 a la fecha Se cuenta con el Reglamento de la Comisión de
                Honor y Justicia, a través del cual se generan las medidas
                disciplinarias entre estudiantes, facultando a las Direcciones
                Académicas para las acciones correspondientes.
              </p>
              <p>
                2019 a la fecha Creación de la figura de Citizen Manager para la
                coordinación colegiada de atención a presuntos casos.
              </p>
              <p>
                Se comienza la elaboración de un Protocolo de Atención
                específico para los casos de Violencia, Hostigamiento y Acoso
                entre estudiantado.
              </p>
            </div>
          </div>
        </div>{" "}
        <br /> <br />
      </div>
    ),
    Transparencia: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Finanzas</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col">
              <div className="button-container">
                <a
                  href="https://www.utleon.edu.mx/public_html/plantilla_html/index.php"
                  className="custom-button button-primary"
                  target="_blank"
                >
                  Actividades Culturales Campus Central
                </a>
                <a
                  href="https://www.utleon.edu.mx/resource/img/imagenes/utl_datos/PROGRAMA%20ANUAL%20POA%202022%20CORREGIDO.pdf"
                  className="custom-button button-primary"
                  target="_blank"
                >
                  Actividades Culturales Campus II
                </a>
                <a
                  href="https://www.utleon.edu.mx/resource/img/imagenes/utl_datos/POA%202022.pdf"
                  className="custom-button button-primary"
                  target="_blank"
                >
                  Actividades Deportivas Campus Central y Campus II
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Contraloría Social</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Documentos Finales CS PIFI 2012</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Normas</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Documentos PIFI 2012</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>PROMEP</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Programa Presupuestario U079</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src={imgContraloria} alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>
            <a
              href="https://transparencia.guanajuato.gob.mx/transparencia/informacion_publica_pordependencia.php?dependencia=52"
              target="_blank"
            >
              Obligaciones de Transparencia
            </a>
          </h1>
        </div>{" "}
        <br /> <br />
      </div>
    ),
    Salud: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Salud Integral </h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <p>
                En el área de Salud integral se te brinda los servicios médicos
                de urgencias y canalizaciones.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src={imgSalud} alt="" />
            </div>
          </div>
        </div>{" "}
        <br /> <br />
      </div>
    ),
    Seguridad: (
      <div>
        {" "}
        <br /> <br />
        <div className="Aspirante">
          <h1>Seguridad Institucional</h1>
          <div className="div-modeloEducativo">
            <div className="div-modeloEducativo-izq col-7">
              <h2>Protocolos de Seguridad</h2>
              <p>
                Dentro de las siguientes líneas estratégicas: “Simplificación y
                mejora continua de procesos”, “consolidación de la
                infraestructura de la Universidad” y “desarrollo de la
                responsabilidad social universitaria”, es que tiene origen la
                inquietud por fortalecer la cultura de seguridad y la cultura de
                la protección civil para fomentar la prevención ante
                contingencias y/o desastres naturales que pueden causar un daño
                a la comunidad universitaria.
              </p>
              <p>
                Pero no es sino hasta la creación del Espacio Común de Educación
                Superior Tecnológica (ECEST) en el 2009, que se comienzan a
                realizar una serie de trabajos orientados a impulsar el
                mejoramiento general de los servicios educativos que brindan las
                instituciones de educación superior (IES) de los subsistemas de
                Institutos Tecnológicos, Universidades Politécnicas y
                Universidades Tecnológicas. En particular y, dentro de este
                marco, en 2010 se conformó la Comisión de Cultura, Prevención y
                Seguridad con objeto de atender la demanda de espacios
                educativos seguros y en los que se viva una cultura de
                prevención y seguridad. No obstante esto no sólo se consolida en
                el ECEST, sino también en gran medida en lo que la certificación
                en ISO 14001:2004 nos marca como un requisito indispensable no
                nada más para salvaguardar la vida de los miembros de la
                comunidad universitaria, sino también para saber qué hacer en
                caso de una emergencia ambiental.
              </p>
            </div>
            <div className="div-modeloEducativo-der col-5">
              <img src={imgSeguridad} alt="" />
            </div>
          </div>
          <h3>
            <a
              href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolo-de-emergencia/img_protocolo_de_emergencia.jpg"
              target="_blank"
            >
              Protocolo de Emergencia
            </a>
          </h3>{" "}
          <br />
        </div>{" "}
        <br /> <br />
      </div>
    ),
  };

  return (
    <div>
      <Navbar modulo={"administrativo"} />
      <div className="section-buttons">
        <button
          className="btn "
          onClick={() => handleSectionChange("Recursos")}
        >
          Recursos Para La Gestión Administrativa
        </button>
        <button
          className="btn"
          onClick={() => handleSectionChange("Desarrollo")}
        >
          Desarrollo Humano y Organizacional
        </button>
        <button className="btn" onClick={() => handleSectionChange("Organos")}>
          Órganos Colegiados
        </button>
        <button
          className="btn"
          onClick={() => handleSectionChange("Transparencia")}
        >
          Transparencia
        </button>
        <button className="btn" onClick={() => handleSectionChange("Salud")}>
          Salud Integral
        </button>
        <button
          className="btn"
          onClick={() => handleSectionChange("Seguridad")}
        >
          Seguridad Institucional
        </button>
      </div>
      {sections[activeSection]}
    </div>
  );
};

export default Administrativo;
