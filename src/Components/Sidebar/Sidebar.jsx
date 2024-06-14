import React from 'react'
import classes from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { RxCross2} from 'react-icons/rx'
import logo2 from "../../Assets/logo2.png"
import icon1 from "../../Assets/icon1.svg"
import icon2 from "../../Assets/icon2.svg"
import icon3 from "../../Assets/icon3.svg"
import icon4 from "../../Assets/icon4.svg"
import icon5 from "../../Assets/icon5.svg"
import icon6 from "../../Assets/icon6.svg"
import icon7 from "../../Assets/icon7.png"
import icon8 from "../../Assets/icon8.png"
import { LuCalendarDays } from 'react-icons/lu'
import { FaChevronDown } from 'react-icons/fa'

const Sidebar = (props) => {

  return (
    <div className={classes.sidebar} >
      <div className={classes.top}>
        <img src={logo2} className={classes.imgg} alt="DialysisGO" />
        <button className={classes.side_bn} onClick={() => { props.onSidebarBtn(false) }}><RxCross2 style={{color:"white"}}/></button>
      </div>
      <div onClick={() => {props.onSidebarBtn(false)}} className={classes.middle}>
        <p className={classes.para}>APPS</p>
        <NavLink  className={classes.link} to={'/dashboard'}>
       <div className={classes.inside_divv}>
       <div>
       <img src={icon1} alt="" />
       <span>Project</span>
       </div>
       <FaChevronDown style={{fontSize:"15px"}} />
      
       </div>
        </NavLink>
        <NavLink className={`${classes.link} link1`}to={'/crm'}>
        <div className={classes.inside_divv}>
        <div>
        <img src={icon2} alt="" />
          <span >CRM</span>
          </div>
       <FaChevronDown style={{fontSize:"15px"}} />
      
       </div>
        </NavLink>
        <NavLink className={classes.link} to={'/sales'}>
        <div className={classes.inside_divv}>
        <div>
        <img src={icon3} alt="" />
          <span >Sales</span>
          </div>
       <FaChevronDown style={{fontSize:"15px"}} />
      
       </div>
        </NavLink>

        <NavLink className={classes.link} to={'/crypto'}>
            <div className={classes.inside_divv}>
            <div>
        <img src={icon4} alt="" />
          <span >Crypto</span>
          </div>
       <FaChevronDown style={{fontSize:"15px"}}  />
      
       </div>
        </NavLink>
        <NavLink className={classes.link} to={'/knowledge'}>
            <div className={classes.inside_divv}>
            <div>
        <img src={icon5} alt="" />
          <span >Knowledge Base</span>
          </div>
       <FaChevronDown style={{fontSize:"15px"}} />
      
       </div>
        </NavLink>

        <p className={classes.para}>PAGES</p>
        <NavLink className={classes.link} to={'/account'}>
            <div className={classes.inside_divv}>
            <div>
        <img src={icon6} alt="" />
          <span >Account</span>
          </div>
       <FaChevronDown style={{fontSize:"15px"}} />
      
       </div>
        </NavLink>
        <NavLink className={classes.link} to={'/welcome'}>
            <div className={classes.inside_divv}>
            <div>
        <img src={icon7} alt="welcome" />
          <span >Welcome</span>
          </div>
       <FaChevronDown style={{fontSize:"15px"}} />
      
       </div>
        </NavLink>
        <NavLink className={classes.link} to={'/access'}>
            <div className={classes.inside_divv}>
            <div>
        <img src={icon8} alt="" />
          <span >Access Denied</span>
          </div>
       <FaChevronDown />
      
       </div>
        </NavLink>

      </div>
   
    </div>
  )
}

export default Sidebar
