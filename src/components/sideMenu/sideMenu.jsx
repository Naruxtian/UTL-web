/* eslint-disable react/prop-types */
import SideNav, { NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/utlLogoWhite.png'
import { AiFillHome, AiOutlineUserAdd } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sideMenu.css'

const SideMenu = () => {

  return (
    <SideNav className="sideMenu"
    onSelect={(selected) => {
      console.log(selected)
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="Inicio" >

        <img src={logo} alt="logo" className='menuLogo'/>

        <Link to="/" className='MenuItm'>
            <NavItem eventKey="Inicio">
                    <NavIcon>
                        <AiFillHome className='ic'/>
                    </NavIcon>
                    <NavText>
                        Inicio
                    </NavText>
            </NavItem>
        </Link>

        <NavItem eventKey="aspirante">
            <NavIcon>
                <AiOutlineUserAdd className='ic'/>
            </NavIcon>
            <NavText>
                Soy aspirante
            </NavText>

            <NavItem eventKey="aspirante/conoceLaUtl">
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
            </NavItem>
        </NavItem>

        <NavItem eventKey="estudiante">
            <NavIcon>
            <PiStudentFill className='ic'/>
            </NavIcon>
            <NavText>
                Soy estudiante
            </NavText>
        
            <NavItem eventKey="somosUtl/a">
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

            </NavItem>
            
        </NavItem>



    </SideNav.Nav>
  </SideNav>
  )
}

export default SideMenu