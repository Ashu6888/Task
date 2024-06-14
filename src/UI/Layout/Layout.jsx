import React, { useState } from 'react'
import classes from './Layout.module.css'

import NavbarTop from "../../Components/Navbar/NavbarTop"
import Sidebar from '../../Components/Sidebar/Sidebar'
import DashboardNavbar from '../../Components/Dashboard_nav/DashboardNavbar'



const Layout = (props) => {

  const [sidebar, setSidebar] = useState(false)

    const sidebarToggleHandler = () =>{
        sidebar===true?setSidebar(false):setSidebar(true)
    }


  return (
    <div className={classes.layout}>
        <div className={`${classes.left} ${sidebar===true? classes.sidebar_true:''}`}>
            <Sidebar onSidebarBtn={sidebarToggleHandler} />
        </div>
        <div className={classes.right}>
            <DashboardNavbar onSideberBtn={setSidebar} />
            {props.children}
        </div>
    </div>
  )
}

export default Layout
