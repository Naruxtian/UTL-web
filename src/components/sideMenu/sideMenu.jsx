/* eslint-disable react/prop-types */
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sideMenu.css'

const SideMenu = () => {

  return (
    <SideNav className="sideMenu"
    onSelect={(selected) => {
      console.log(selected)
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">

        <img src={logo} alt="logo" className='menuLogo'/>

        <NavItem eventKey="Inicio">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                <Link to="/"> Inicio</Link>
            </NavText>
        </NavItem>

        <NavItem eventKey="aspirante">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Soy aspirante
            </NavText>

            <NavItem eventKey="aspirante/conoceLaUtl">
                <NavText>
                  <Link to="/Aspirante">Conoce la UTL</Link>
                </NavText>
            </NavItem>

            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem>
        </NavItem>

        <NavItem eventKey="estudiante">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Soy estudiante
            </NavText>
        
            <NavItem eventKey="estudiante/a">
                <NavText>
                    A
                </NavText>

            </NavItem>
            
        </NavItem>



    </SideNav.Nav>
  </SideNav>
  )
}

export default SideMenu