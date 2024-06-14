import React, { useState } from 'react'
import classes from './DashboardNavbar.module.css'
import { IoMdMenu } from "react-icons/io";
import search from "../../Assets/search.svg"
import menu from "../../Assets/menu.svg"
import Notification from "../../Assets/Notification.svg"
import flag from "../../Assets/flag.svg"
import setting from "../../Assets/setting.svg"
import user from "../../Assets/user.svg"

const DashboardNavbar = (props) => {
  const [notification, setNotification] = useState(false)

  const sidebarHandler = () => {
    props.onSideberBtn(true)
  }
  return (
    <>
      <header className={classes.navbar}>
        <div className={classes.mob}>
          <img src={menu} style={{fontSize:"25px", color:"#667085"}} onClick={props.onSideberBtn} />
          <img src={search} style={{fontSize:"25px", color:"#667085"}} onClick={props.onSideberBtn} />
        </div>
        <div className={classes.nav_body}>
        <div className={classes.inn_bdy}>
        <img src={flag} alt="" />
          <div onClick={() => setNotification(!notification)} className={classes.nav_btn}>
            <img src={Notification} alt="Notifications" />
          </div>
          <img src={setting} alt="" />
         <div className='d-flex align-items-center gap-3'>
         <img src={user} alt="" style={{borderRadius:"50%"}}  />
      <div>
      <p className={classes.p2} style={{fontSize:"12px"}}>Admin</p>   <p className={classes.p2}>Carolyn Perkins</p>
      </div>
         </div>
        </div>
          <button onClick={sidebarHandler} className={classes.sidebar_open_btn}>
            <IoMdMenu style={{fontSize:"25px", color:"#667085"}} />
          </button>
        </div>
      </header>
    </>
  )
}

export default DashboardNavbar
