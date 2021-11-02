import { PageHeader } from 'antd'
import React from 'react'
import './Menu.scss'
import {NavLink} from "react-router-dom";
  
const Menu = () => {
    return (
        <>
        <PageHeader
          className="site-page-header"          
          title="App Control de Equipos"       
          ghost={true}                      
      />  
        <nav className='nav-menu' >
           <NavLink to='/ingresar-equipos'>Ingreso</NavLink>       
           <NavLink to='/consultas'>Consultas</NavLink>       
        </nav>
        </>
    )
}

export default Menu
