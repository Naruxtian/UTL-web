/* eslint-disable react/prop-types */
import {Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import './sideMenu.css'

const SideMenu = ({show}) => {

  return (
    <div className={show ? 'sideNav active' : 'sideNav'}>
      <img src={logo} alt='logo' className='log' />
      <Menu>
        
        <SubMenu label="Soy aspirante" className='sbm'>
          <SubMenu label="Pregrado">
            <li><Link to="/Aspirante">Conoce la UTL</Link></li>
          </SubMenu>
        </SubMenu>
      </Menu>


      <ul>
        <li><Link to="/">Inicio</Link></li>
      </ul>
    </div>
  )
}

export default SideMenu