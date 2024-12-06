import { useContext } from "react";
import classes from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoIosCall } from "react-icons/io";
import { FaExclamationCircle } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import logo2 from "../../Assets/logo2.png";
import { LuCalendarDays } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import ThemeContext from "../Dashboard_nav/ThemeContext";

const Sidebar = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${classes.sidebar} ${theme ? classes.Black : classes.Light}`}
    >
      <div className={classes.top}>
        <img src={logo2} className={classes.imgg} alt="DialysisGO" />
        <button
          className={classes.side_bn}
          onClick={() => {
            props.onSidebarBtn(false);
          }}
        >
          <RxCross2 style={{ color: "white" }} />
        </button>
      </div>
      <div
        onClick={() => {
          props.onSidebarBtn(false);
        }}
        className={classes.middle}
      >
        <NavLink className={classes.link} to={"/dashboard"}>
          <div className={classes.inside_divv}>
            <div>
              <FaHome />
              <span>Home</span>
            </div>
            <FaChevronDown style={{ fontSize: "15px" }} />
          </div>
        </NavLink>
        <NavLink className={`${classes.link} link1`} to={"/about"}>
          <div className={classes.inside_divv}>
            <div>
              <FaExclamationCircle />
              <span>About</span>
            </div>
            <FaChevronDown style={{ fontSize: "15px" }} />
          </div>
        </NavLink>
        <NavLink className={classes.link} to={"/contact"}>
          <div className={classes.inside_divv}>
            <div>
              <IoIosCall />
              <span>Contact</span>
            </div>
            <FaChevronDown style={{ fontSize: "15px" }} />
          </div>
        </NavLink>

        <NavLink className={classes.link} to={"/more"}>
          <div className={classes.inside_divv}>
            <div>
              <CiCircleMore />
              <span>More</span>
            </div>
            <FaChevronDown style={{ fontSize: "15px" }} />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
