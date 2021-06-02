import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "280px", //280
    height: "150px",
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "#a6d6d6",
    margin: "0 5px",
    "@media screen and (max-width: 768px)": {
      width: "200px",
    },
  },
  cardWrapper: {
    width: "50%",
  },
  imgContainer: {
    width: "100%",
    height: "120px",
    backgroundColor: "#a6d6d6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerDark: {
    width: "100%",
    backgroundColor: "#025955",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  headerLight: {
    width: "100%",
    backgroundColor: "#4ca1a3   ",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  outerCircleRight: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#025955",
    position: "absolute",
    top: "-8px",
    // left: "18px",
    right: "3%",
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width: 375px)": {
      width: "35px",
      height: "35px",
    },
  },
  outerCircleLeft: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#025955",
    position: "absolute",
    top: "-8px",
    left: "5%",
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width: 375px)": {
      width: "35px",
      height: "35px",
    },
  },
  innerCircle: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    backgroundColor: "#FFF",
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width: 375px)": {
      width: "30px",
      height: "30px",
    },
  },
  number: {
    color: "#025955",
    margin: "0",
  },
  descriptionLeft: {
    width: "100%",
    fontSize: "0.5rem",
    padding: "1em",
    marginLeft: "25%",
    marginBottom: "0",
    color: "#fff",
    fontWeight: "bold",
    "@media screen and (max-width: 375px)": {
      fontSize: "0.4rem",
    },
  },
  descriptionRight: {
    width: "100%",
    textAlign: "right",
    fontSize: "0.5rem",
    marginRight: "25%",
    padding: "1em",
    marginBottom: "0",
    color: "#fff",
    fontWeight: "bold",

    "@media screen and (max-width: 375px)": {
      fontSize: "0.4rem",
    },
  },
  img: {
    width: "70%",
    height: "100%",
    marginLeft: "3%",
  },
});
function Card(props) {
  const classes = useStyles();
  return (
    <div className={classes.cardWrapper}>
      <div className={props.color ? classes.headerLight : classes.headerDark}>
        <div
          className={
            props.direction ? classes.outerCircleRight : classes.outerCircleLeft
          }
        >
          <div className={classes.innerCircle}>
            <h3 className={classes.number}>{props.num}</h3>
          </div>
        </div>
        <p
          className={
            props.desc ? classes.descriptionRight : classes.descriptionLeft
          }
        >
          {props.description}
        </p>
      </div>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={props.src} alt="img" />
      </div>
    </div>
  );
}

export default Card;
