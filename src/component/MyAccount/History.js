import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { useTranslation, initReactI18next } from "react-i18next";
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

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
  rating:{
    textAlign:"center",
    paddingTop:"10px",
    color:"#19A25D"
  }
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
      <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography  className={classes.rating} component="legend">Rating</Typography>
      <Rating
        name="customized-empty"
        defaultValue={2}
        precision={0.5}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
      </Box>
      </div>
    </div>
  );
}

export default History;
