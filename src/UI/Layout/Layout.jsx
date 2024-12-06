import React, { useContext, useState } from "react";
import classes from "./Layout.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DashboardNavbar from "../../Components/Dashboard_nav/DashboardNavbar";
import Footer from "../../Components/Footer/Footer";
import ThemeContext from "../../Components/Dashboard_nav/ThemeContext";

const Layout = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const sidebarToggleHandler = () => {
    setSidebar(!sidebar);
  };
  console.log("Theme Value", theme);

  return (
    <div className={classes.layout}>
      <div className={`${classes.left} ${sidebar ? classes.sidebar_true : ""}`}>
        <Sidebar onSidebarBtn={sidebarToggleHandler} />
      </div>
      <div
        className={`${classes.right} ${theme ? classes.Black : classes.Light}`} // Dynamically apply background styles
      >
        <DashboardNavbar onSideberBtn={setSidebar} />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
