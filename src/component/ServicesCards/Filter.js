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
import Globals from "../navbar/global"
import {
  setTextFilterSE,
  setServicesFilterSE,
  setHospitalFilterSE,
  setPriceFilterSE,
  setSortFilterSE,
  setCitySE,
  setRegionSE
} from "../../Redux/actions/filterServices";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
//GetVisible services Entities, hospitals, cities and regions
import getVisibleServicesEntities from "../../Redux/selectors/servicesEntities";
import getVisibleHospitals from "../../Redux/selectors/hospitals";
import getVisibleCities from "../../Redux/selectors/cities";
import getVisibleRegions from "../../Redux/selectors/regions";
import cookies from 'js-cookie';
import { matchClincsEn, matchClincsAr, matchAddressEn, matchAddressAr, matchAreaEn, matchAreaAr, matchCityEn, matchCityAr } from "../DrCards/Cincs";
// Configure JSS
import { ServicesEN, ServicesAR } from "./service"
const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'eg',
  },
]
const currentLanguageCode = cookies.get('i18next') || 'en'
const currentLanguage = languages.find((l) => l.code === currentLanguageCode)

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 120,
    display: "25%",
    alignContent: "center",
    borderRadius: "10px",
    backgroundColor:"white",
    borderRadius: "10px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
 
  searchStyle: {
    borderRadius: "50px",
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
    Service: "",
    Hospital: "",
    price: 0,
    Sort: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'Service': {
        props.dispatch(setServicesFilterSE(value));
        break;
      }
      case 'Hospital': {
        props.dispatch(setHospitalFilterSE(value));
        break;
      }
      case 'price': {
        if (value === '') {
          props.dispatch(setPriceFilterSE(0));
        } else {
          const intPrice = parseInt(value, 10);
          props.dispatch(setPriceFilterSE(intPrice));
        }
        break;
      }
      case 'City': {
        props.dispatch(setCitySE(value));
        break;
      }
      case 'Area': {
        props.dispatch(setRegionSE(value));
        break;
      }
      case 'Sort': {
        props.dispatch(setSortFilterSE(value));
        break;
      }
      default:
        break;
    }
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    props.dispatch(setTextFilterSE(searchValue));
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
              {props.hospitals.map((hospital) => {
                return (
                  <option key={hospital.id} value={hospital.name}>
                    {(currentLanguage.dir ? `${matchClincsAr[hospital.name]} ` : `${matchClincsEn[hospital.name]}`) || hospital.name}
                  </option>
                );
              })}
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
              <option aria-label={t('none')} value="" />
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
            <InputLabel htmlFor="outlined-age-native-simple" variant="filled">{t('city')}</InputLabel>
            <Select
              native
              onChange={handleChange}
              value={props.filters.city}
              inputProps={{
                name: "City",
                id: "outlined-age-native-simple"
              }}
            >
              <option aria-label={t('none')} value="" />
              {
                props.cities.map((city) => {
                  return (
                    <option key={city.id} value={city.name} data-id="2">
                      {(currentLanguage.dir ? `${matchCityAr[city.name]} ` : `${matchCityEn[city.name]}`) || city.name}
                    </option>
                  );
                })
              }
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" variant="filled">{t('area')}</InputLabel>
            <Select
              native
              onChange={handleChange}
              value={props.filters.region}
              inputProps={{
                name: "Area",
                id: "outlined-age-native-simple"
              }}
            >
              <option aria-label={t('none')} value="" />
              {props.regions.map((region) => {
                return (
                  <option key={region.id} value={region.name} data-id="2">
                    {(currentLanguage.dir ? `${matchAreaAr[region.name]} ` : `${matchAreaEn[region.name]}`) || region.name}
                  </option>
                );
              })}
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
                <input type="text" class="form-control" placeholder={t('searchservice')} onChange={handleSearchChange} />
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
    filters: state.filterServices,
    entities: getVisibleServicesEntities(state.servicesEntities),
    hospitals: getVisibleHospitals(state.hospitals),
    cities: getVisibleCities(state.cities),
    regions: getVisibleRegions(state.regions),
  }
}

export default connect(mapStateToProps)(Filter);