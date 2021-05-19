import React, { useState } from "react";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { NativeSelect } from "@material-ui/core";
import { createMuiTheme, makeStyles, withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { connect } from "react-redux";
import { useTranslation, initReactI18next } from "react-i18next";
import {
  setTextFilterSP,
  setRoomName,
  setHospitalFilter,
  setPriceFilter,
  setSortBySP
} from "../../Redux/actions/specialRoomsFilter";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Globals from "../navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const useStyles = makeStyles((theme) => ({
  formControl: {
    backgroundColor: "primary",
    margin: theme.spacing(4),
    minWidth: 120,
    display: "25%",
    alignContent: "center",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputLabel: {
    color: "#235274",
  },
  searchStyle: {
    borderRadius: "20px",
    marginTop: "20px",
    width: "500px"
  }
}));

const theme = createMuiTheme({
    direction: Globals.direction,
  palette: {
    primary: {
      main: "#19a25d"
    }
  }
});
function Filter(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Room: "",
    Hospital: "",
    price: 0,
    Sort: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'Room': {
        props.dispatch(setRoomName(value));
        break;
      }
      case 'Hospital': {
        props.dispatch(setHospitalFilter(value));
        break;
      }
      case 'Max Price': {
        if (value === '') {
          props.dispatch(setPriceFilter(0));
        } else {
          const intVal = parseInt(value, 10);
          props.dispatch(setPriceFilter(intVal));
        }
        break;
      }
      case 'Sort': {
        props.dispatch(setSortBySP(value));
        break;
      }
      default: break;
    }
    setState({
      ...state,
      [name]: value
    });
  };
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    props.dispatch(setTextFilterSP(searchValue));
  }
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
      <div style={{ textAlign: "center" }}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            htmlFor="outlined-age-native-simple"
            className={classes.inputLabel}
          >
          {t('room')}
        </InputLabel>
          <Select
            native
            value={props.filters.room}
            onChange={handleChange}
            inputProps={{
              name: "Room",
              id: "outlined-age-native-simple",
            }}
          >
          <option aria-label={t('none')} value="" />
          <option value={"Labor"}>{t('labor')}</option>
          <option value={"Intensive treatment"}>
          {t('intensive')}
        </option>
          <option value={"Covid"}>{t('covidr')}</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            htmlFor="outlined-age-native-simple"
            className={classes.inputLabel}
          >
          {t('hospital')}
        </InputLabel>
          <Select
            native
            value={props.filters.hospital}
            onChange={handleChange}
            inputProps={{
              name: "Hospital",
              id: "outlined-age-native-simple",
            }}
          >
          <option aria-label={t('none')} value="" />
          <option value={"Daar El fouad"}>{t('daar')}</option>
          <option value={"elmidan"}>{t('midan')}</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            htmlFor="outlined-age-native-simple"
            className={classes.inputLabel}
          >
          {t('price')}
        </InputLabel>
          <Select
            native
            value={props.filters.price}
            onChange={handleChange}
            inputProps={{
              name: "Max Price",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label={t('price')} value="" />
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="250">250</option>
            <option value="300">300</option>
            <option value="350">350</option>
            <option value="400">400</option>
            <option value="450">450</option>
            <option value="500">500</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            htmlFor="outlined-age-native-simple"
            className={classes.inputLabel}
          >
          {t('sort')}
        </InputLabel>
          <Select
            native
            value={props.filters.sortBy}
            onChange={handleChange}
            inputProps={{
              name: "Sort",
              id: "outlined-age-native-simple",
            }}
          >
          <option aria-label={t('none')} value="" />
          <option value={"A to Z"}>{t('atoz')}</option>
          <option value={"Z to A"}>{t('ztoa')}</option>
          <option value={"Lowest Price"}>{t('lowestprice')}</option>
          <option value={"Highest Price"}>{t('highestprice')}</option>
          </Select>
        </FormControl>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <FormControl
            variant="outlined"
            className={classes.searchStyle}
          >
          <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder={t('searchroom')} onChange={handleSearchChange}/>
        </div>
          </FormControl>
        </div>
      </div>
      </StylesProvider>
    </ThemeProvider>
  );
}
const mapStateToProps = (state) => {
  return {
    filters: state.filterSpecialRooms
  };
}
export default connect(mapStateToProps)(Filter);