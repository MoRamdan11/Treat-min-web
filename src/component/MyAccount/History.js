import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { useTranslation, initReactI18next } from "react-i18next";

const useStyles = makeStyles({
  card: {
    height: 80,
    display: "flex",
  },
  history: {
    backgroundColor: "#FFF",
    width: "80%",
    border: "1px solid #d8e3e7",
  },
  delete: {
    backgroundColor: "#FFF",
    width: "20%",
  },
  service: { padding: "0.5em", margin: "0.25em 0 0 1.25em", color: "#19A25D" },
  time: { margin: "0 0 0 2em", color: "#91c788" },
  DeleteBtn: {
    minWidth: "auto",
    border: "1px solid #d8e3e7",
    outline: "none",
    height: "100%",
    width: "100%",
    cursor: "pointer",
    color: "#c64756",
  },
});

function History({ service, time, date }) {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.card}>
      <div className={classes.history}>
        <h3 className={classes.service}>{service}</h3>
        <p className={classes.time}>
          {time} - {date}
        </p>
      </div>
      <div className={classes.delete}>
        <Button title={t('change')} square className={classes.DeleteBtn}>
          <DeleteOutlineOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}

export default History;
