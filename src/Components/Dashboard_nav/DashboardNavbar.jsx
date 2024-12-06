import React, { useState, useContext } from "react";
import classes from "./DashboardNavbar.module.css";
import { IoMdMenu } from "react-icons/io";
import search from "../../Assets/search.svg";
import menu from "../../Assets/menu.svg";
import ThemeContext from "./ThemeContext";

const DashboardNavbar = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme);

  const sidebarHandler = () => {
    props.onSideberBtn(true);
  };

  return (
    <header className={classes.navbar}>
      <div className={classes.mob}>
        <img
          src={menu}
          style={{ fontSize: "25px", color: "#667085" }}
          onClick={props.onSideberBtn}
        />
        <img
          src={search}
          style={{ fontSize: "25px", color: "#667085" }}
          onClick={props.onSideberBtn}
        />
      </div>

      <button onClick={() => setTheme(!theme)}>
        {theme ? "Light" : "Dark"}
      </button>

      <div className={classes.nav_body}>
        <button onClick={sidebarHandler} className={classes.sidebar_open_btn}>
          <IoMdMenu style={{ fontSize: "25px", color: "#667085" }} />
        </button>
      </div>
    </header>
  );
};

export default DashboardNavbar;
