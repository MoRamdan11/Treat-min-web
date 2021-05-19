import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles, withStyles ,createMuiTheme} from "@material-ui/core/styles";
import Globals from "../navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset,ThemeProvider } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: Globals.direction,
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "100px auto 30px auto",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  image: { width: 140, height: 140 },
}));

export default function BadgeAvatar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
      >
        <Avatar
          className={classes.image}
          alt="Remy Sharp"
          src={require("../../images/gerges.jpg").default}
        />
      </StyledBadge>
    </div>
    </StylesProvider>
    </ThemeProvider>
  );
}
