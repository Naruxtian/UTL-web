/* eslint-disable react/prop-types */
import SideNav, { NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/utlLogoWhite.png'
import { AiFillHome, AiOutlineUserAdd } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sideMenu.css'

const SideMenu = () => {

    const navigate = useNavigate();

  return (
    <SideNav className="sideMenu"
    onSelect={(selected) => {
      console.log(selected)
      navigate(`/${selected}`)
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="Inicio" >

        <img src={logo} alt="logo" className='menuLogo'/>

        <NavItem eventKey="">
                <NavIcon>
                    <AiFillHome className='ic'/>
                </NavIcon>
                <NavText>
                    Inicio
                </NavText>
        </NavItem>
        
        <NavItem eventKey="aspirante">
            <NavIcon>
                <AiOutlineUserAdd className='ic'/>
            </NavIcon>
            <NavText>
                Soy aspirante
            </NavText>

            {/* <NavItem eventKey="aspirante/conoceLaUtl">
                <NavText>
                  <Link to="/Aspirante" className='MenuItm'>Conoce la UTL</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="aspirante/ofertaEducativa">
            <NavText>
                  <Link to="/Aspirante" className='MenuItm'>Oferta educativa</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="aspirante/IngresarEstudiar">
                <NavText>
                    <Link to="/Aspirante" className='MenuItm'>Ingresa a la UTL</Link>
                </NavText>
            </NavItem> */}
        </NavItem>

        <NavItem eventKey="estudiante">
            <NavIcon>
            <PiStudentFill className='ic'/>
            </NavIcon>
            <NavText>
                Soy estudiante
            </NavText>
        
            {/* <NavItem eventKey="estudiante/a">
                <NavText>
                    <Link to="/somosUtl" className='MenuItm'>Tramites Escolares</Link>
                </NavText>

            </NavItem>
            
        </NavItem>

        <NavItem eventKey="somosUtl">
            <NavIcon>
            <PiStudentFill className='ic'/>
            </NavIcon>
            <NavText>
                Somos UTL
            </NavText>
        
            <NavItem eventKey="somosUtl/conoceLaUtl">
                <NavText>
                    <Link to="/SomosUtl" className='MenuItm'>Conoce Utl</Link>
                </NavText>

            </NavItem>

            <NavItem eventKey="somosUtl/a">
                <NavText>
                    <Link to="/somosUtl" className='MenuItm'>Calidad</Link>
                </NavText>

            </NavItem>

            <NavItem eventKey="somosUtl/a">
                <NavText>
                    <Link to="/somosUtl" className='MenuItm'>Tramites Escolares</Link>
                </NavText>
                <NavText>
                    <Link to="/Estudiante" className='MenuItm'>Servicios Integrales Para El Alumnado</Link>
                </NavText>
                <NavText>
                    <Link to="/Estudiante" className='MenuItm'>Órganos Colegiados</Link>
                </NavText>
                <NavText>
                    <Link to="/Estudiante" className='MenuItm'>Normativa Estudiantil</Link>
                </NavText>
                <NavText>
                    <Link to="/Estudiante" className='MenuItm'>Quejas y Denuncias</Link>
                </NavText>

            </NavItem>

            <NavItem eventKey="estudiante/a">
                <NavText>
                    <Link to="/Estudiante" className='MenuItm'>Servicios Integrales Para El Alumnado</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="estudiante/a">
                <NavText>
                    <Link to="/Estudiante" className='MenuItm'>Órganos Colegiados</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="estudiante/a">
                <NavText>
                    <Link to="/Estudiante" className='MenuItm'>Normativa Estudiantil</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="estudiante/a">
                <NavText>
                    <Link to="/Estudiante" className='MenuItm'>Quejas y Denuncias</Link>
                </NavText>

            </NavItem> */}
            
        </NavItem>

        <NavItem eventKey="docente">
            <NavIcon>
            <SiGoogleclassroom className='ic'/>
            </NavIcon>
            <NavText>
                Soy docente
            </NavText>
        
            {/* <NavItem eventKey="docente/a">
                <NavText>
                    <Link to="/Docente" className='MenuItm'>Recursos Para La Gestión Docente</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="docente/a">
                <NavText>
                    <Link to="/Docente" className='MenuItm'>Desarrollo Académico y Docente</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="docente/a">
                <NavText>
                    <Link to="/Docente" className='MenuItm'>Investigacion UTL</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="docente/a">
                <NavText>
                    <Link to="/Docente" className='MenuItm'>Salud Integral</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="docente/a">
                <NavText>
                    <Link to="/Docente" className='MenuItm'>Órganos Colegiados</Link>
                </NavText>
            </NavItem> */}
            
        </NavItem>

        <NavItem eventKey="administrativo">
            <NavIcon>
            <FaUserTie className='ic'/>
            </NavIcon>
            <NavText>
                Soy administrativo/a
            </NavText>
        
            {/* <NavItem eventKey="administrativo/a">
                <NavText>
                    <Link to="/Administrativo" className='MenuItm'>Recursos Para La Gestión Administrativa</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="administrativo/a">
                <NavText>
                    <Link to="/Administrativo" className='MenuItm'>Desarrollo Humano y Organizacional</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="administrativo/a">
                <NavText>
                    <Link to="/Administrativo" className='MenuItm'>Órganos Colegiados</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="administrativo/a">
                <NavText>
                    <Link to="/Administrativo" className='MenuItm'>Transparencia</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="administrativo/a">
                <NavText>
                    <Link to="/Administrativo" className='MenuItm'>Salud Integral</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="administrativo/a">
                <NavText>
                    <Link to="/Administrativo" className='MenuItm'>Seguridad Institucional</Link>
                </NavText>
            </NavItem> */}
            
        </NavItem>

        <NavItem eventKey="empresario">
            <NavIcon>
            <MdWork className='ic'/>
            </NavIcon>
            <NavText>
                Soy empresario/a
            </NavText>
        
            {/* <NavItem eventKey="empresario/a">
                <NavText>
                    <Link to="/Empresario" className='MenuItm'>Conoce la UTL</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="empresario/a">
                <NavText>
                    <Link to="/Empresario" className='MenuItm'>Desarrollo Humano y Organizacional</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="empresario/a">
                <NavText>
                    <Link to="/Empresario" className='MenuItm'>Programas Educativos</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="empresario/a">
                <NavText>
                    <Link to="/Empresario" className='MenuItm'>Vinculacion</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="empresario/a">
                <NavText>
                    <Link to="/Empresario" className='MenuItm'>Servicios</Link>
                </NavText>
            </NavItem> */}
            
        </NavItem>

        <NavItem eventKey="egresado">
            <NavIcon>
            <PiStudentFill className='ic'/>
            </NavIcon>
            <NavText>
                Soy egresado/a
            </NavText>
        
            {/* <NavItem eventKey="egresado/a">
                <NavText>
                    <Link to="/Egresado" className='MenuItm'>Bolsa de Trabajo</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="egresado/a">
                <NavText>
                    <Link to="/Egresado" className='MenuItm'>Emprendimiento</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="egresado/a">
                <NavText>
                    <Link to="/Egresado" className='MenuItm'>Educacion</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="egresado/a">
                <NavText>
                    <Link to="/Egresado" className='MenuItm'>Quieres Laborar en UTL?</Link>
                </NavText>
            </NavItem> */}
            
        </NavItem>

    </SideNav.Nav>
  </SideNav>
  )
}

export default SideMenu