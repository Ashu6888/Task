import React from 'react'
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={classes.foot}>
        <div className={classes.inn_foot}>
        <div>
            <p className={classes.para}>Copyright © 2023 Elstar All rights reserved.</p>
        </div>
        <div className='d-flex '>
            <p className={classes.para} >Term & Conditions</p> <span>|</span>
            <p className={classes.para}>Privacy & Policy</p>
        </div>
        </div>
    </div>
  )
}

export default Footer