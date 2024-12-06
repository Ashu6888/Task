import { useContext } from "react";
import classes from "./CardComp.module.css";
import icon1 from "../../Assets/icon1.svg";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import ThemeContext from "../Dashboard_nav/ThemeContext";

const CardComp = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${classes.container} ${props.cls} ${
        theme ? classes.Black : classes.Light
      }`}
    >
      <div className={`${classes.img_div} ${props.cls2}`}>
        <img src={props.img} />
      </div>
      <div className={classes.new_div}>
        <p>
          {props.p}{" "}
          <span className={`${theme ? classes.Black : classes.Light}`}>
            {" "}
            {props.span}
          </span>
        </p>
        <h3>
          {!props.down ? (
            <div className={classes.up}>
              <FaArrowTrendUp />
            </div>
          ) : (
            <div className={classes.down}>
              <FaArrowTrendDown />
            </div>
          )}{" "}
          {!props.down ? (
            <span className={classes.span}>{props.h1}</span>
          ) : (
            <span className={classes.span1}>{props.h1}</span>
          )}{" "}
          this month
        </h3>
      </div>
    </div>
  );
};

export default CardComp;
