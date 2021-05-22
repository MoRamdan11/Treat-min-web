import React, { useState } from "react";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { NativeSelect } from "@material-ui/core";
import { createMuiTheme, makeStyles, withStyles } from "@material-ui/core/styles";
import { InputLabel } from "@material-ui/core";
import { connect } from "react-redux";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Globals from '../navbar/global'
import { useTranslation, initReactI18next } from "react-i18next";
import {
  setSpeciality,
  setDrName,
  setHospitalName,
  setPrice,
  setGender,
  setSortBy,
  setTextFilter
} from "../../Redux/actions/filterClinics";
import { ThemeProvider } from "@material-ui/core";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import getVisibleEntities from "../../Redux/selectors/entities";
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const useStyles = makeStyles((theme) => ({
  formControl: {
    backgroundColor: "primary",
    margin: theme.spacing(4),
    minWidth: 120,
    display: "25%",
    alignContent: "center"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  searchStyle: {
    borderRadius: "20px",
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
const Filter = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Specialisty: "",
    DoctorName: "",
    Hospital: "",
    price: "",
    Gender: "",
    Sort: ""
  });
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    props.dispatch(setTextFilter(searchValue));
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'Specialisty': {
        props.dispatch(setSpeciality(value));
        break;
      }
      case 'Dr Name': {
        props.dispatch(setDrName(value));
        break;
      }
      case 'Hospital': {
        props.dispatch(setHospitalName(value));
        break;
      }
      case 'price': {
        if(value === ""){
          props.dispatch(setPrice(0));
        }else{
          const intPrice = parseInt(value, 10);
          props.dispatch(setPrice(intPrice));
        }
        break;
      }
      case 'Gender': {
        props.dispatch(setGender(value));
        break;
      }
      case 'Sort': {
        props.dispatch(setSortBy(value));
        break;
      }
    }
    setState({
      ...state,
      [name]: value
    });
  };
  const { t } = useTranslation();
  return (
    <ThemeProvider theme = {theme}>
    <StylesProvider jss={jss}>
      <div>
        <div style={{ textAlign: "center" }}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" >
            {t('specialist')}
            </InputLabel>
            <Select
              native
              value={props.filters.speciality}
              onChange={handleChange}
              inputProps={{
                name: "Specialisty",
                id: "outlined-age-native-simple"
              }}
            >
              <option aria-label={t('none')} value="" />
              {props.entities.map((entity, index) => {
                return(<option>{entity.name}</option>)
              })}
              {/*<option aria-label={t('none')} value="" />
              <option value={"Cardiology"}>{t('cardiology')}</option>
              <option value={"Chest and Respiratory"}>{t('chest')}</option>
              <option value={"Dentistry"}>{t('dentistry')}</option>
              <option value={"Hepatology"}>{t('hepatology')}</option>
              <option value={"Internal Medicine"}>{t('internal')}</option>
              <option value={"Neurosurgery"}>{t('neurosurgery')}</option>*/}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" variant="filled">{t('hospital')}</InputLabel>
            <Select
              native
              value={props.filters.hospital}
              onChange={handleChange}
              inputProps={{
                name: "Hospital",
                id: "outlined-age-native-simple"
              }}
            >
              <option aria-label={t('none')} value="" />
              <option value={"Daar El fouad"}>{t('daar')}</option>
              <option value={"elmidan"}>{t('midan')}</option>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" variant="filled">{t('price')}</InputLabel>
            <Select
              native
              value={props.filters.price}
              onChange={handleChange}
              inputProps={{
                name: "price",
                id: "outlined-age-native-simple"
              }}
            >
              <option aria-label={t('none')} value= "" />
              <option value= "50">50</option>
              <option value= "100">100</option>
              <option value= "150">150</option>
              <option value= "200">200</option>
              <option value= "250">250</option>
              <option value= "300">300</option>
              <option value= "350">350</option>
              <option value= "400">400</option>
              <option value= "450">450</option>
              <option value= "500">500</option>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" variant="filled">{t('gender')}</InputLabel>
            <Select
              native
              value={props.filters.gender}
              onChange={handleChange}
              inputProps={{
                name: "Gender",
                id: "outlined-age-native-simple"
              }}
            >
              <option aria-label={t('none')} value="" />
              <option value={"male"}>{t('male')}</option>
              <option value={"female"}>{t('female')}</option>
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" variant="filled">{t('sort')}</InputLabel>
            <Select
              native
              value={props.filters.sortBy}
              onChange={handleChange}
              inputProps={{
                name: "Sort",
                id: "outlined-age-native-simple"
              }}
            >
              <option aria-label={t('none')} value="" />
              <option value={"A to Z"}>{t('atoz')}</option>
              <option value={"Z to A"}>{t('ztoa')}</option>
              <option value={"Lowest Price"}>{t('lowestprice')}</option>
              <option value={"Highest Price"}>{t('highestprice')}</option>
            </Select>
          </FormControl>
        </div>
        <div style={{ textAlign: "center", marginBottom: "10px"}}>
          <FormControl
            variant="outlined"
            className={classes.searchStyle}
          >
          <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder={t('search')} onChange={handleSearchChange}/>
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
    filters: state.filterClinics,
    entities: getVisibleEntities(state.entities)
  };
}
export default connect(mapStateToProps)(Filter);
