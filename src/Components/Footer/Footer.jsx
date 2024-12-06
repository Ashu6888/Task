import { useContext } from "react";
import classes from "./Footer.module.css";
import ThemeContext from "../Dashboard_nav/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classes.foot}>
      <div className={classes.inn_foot}>
        <div>
          <p className={classes.para}>
            Copyright © 2023 Elstar All rights reserved.
          </p>
        </div>
        <div className="d-flex ">
          <p className={classes.para}>Term & Conditions</p> <span> | </span>
          <p className={classes.para}>Privacy & Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
