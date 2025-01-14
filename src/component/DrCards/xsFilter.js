import React from "react";
import { createMuiTheme, makeStyles, withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import { useTranslation, initReactI18next } from "react-i18next";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Globals from '../navbar/global'
import {
  setTextFilter,
  setSpeciality,
  setDrName,
  setHospitalName,
  setPrice,
  setSortBy,
  setRegionDR,
  setCityDR
} from "../../Redux/actions/filterClinics";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
//GetVisible Clinics Entities, hospitals, cities and regions
import getVisibleEntities from "../../Redux/selectors/entities";
import getVisibleHospitals from "../../Redux/selectors/hospitals";
import getVisibleCities from "../../Redux/selectors/cities";
import getVisibleRegions from "../../Redux/selectors/regions";
import cookies from 'js-cookie';
import {matchClincsEn,matchClincsAr, matchAddressEn, matchAddressAr,matchAreaEn,matchAreaAr,matchCityEn, matchCityAr} from "./Cincs"
import {clinicsEN,clinicsAR} from "./clinicsnames";
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  button:{
   color :"#19a25d",
   fontWeight:"bold",
   cursor:"pointer"
  },
  searchStyle: {
    borderRadius: "20px",
    marginTop: "20px",
    width: "100%",
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
const DialogSelect = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    Specialisty: "",
    DoctorName: "",
    Hospital: "",
    price: 0,
    Gender: "",
    Sort: ""
  });
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
      case 'City': {
        props.dispatch(setCityDR(value));
        break;
      }
      case 'Area': {
        props.dispatch(setRegionDR(value));
        break;
      }
      case 'price': {
        if (value === "") {
          props.dispatch(setPrice(0));
        } else {
          const intPrice = parseInt(value, 10);
          props.dispatch(setPrice(intPrice));
        }
        break;
      }
      /*case 'Gender': {
        props.dispatch(setGender(value));
        break;
      }*/
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    props.dispatch(setTextFilter(searchValue));
  }
  const { t } = useTranslation();
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
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <div>
          <Button  className={classes.button} onClick={handleClickOpen}>{t('filter')}</Button>
          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>{t('fillform')}</DialogTitle>
            <DialogContent>
              <form className={classes.container}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">
                    {t('specialist')}
                  </InputLabel>
                  <Select
                    native
                    value={props.filters.speciality}
                    onChange={handleChange}
                    inputProps={{
                      name: "Specialisty",
                      id: "filled-age-native-simple"
                    }}
                  >
                    <option aria-label={t('none')} value="" />
                    {props.entities.map((entity, index) => {
                      return (<option key={entity.id} value={entity.name}>{(currentLanguage.dir?`${clinicsAR[entity.name]} ` :`${clinicsEN[entity.name]}`) || entity.name}</option>)
                    })}
                  </Select>
                </FormControl>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">
                    {t('hospital')}
                  </InputLabel>
                  <Select
                    native
                    value={props.filters.hospital}
                    onChange={handleChange}
                    inputProps={{
                      name: "Hospital",
                      id: "filled-age-native-simple"
                    }}
                  >
                    <option aria-label={t('none')} value="" />
                    {props.hospitals.map((hospital) => {
                      return (
                        <option value={hospital.name} data-id="2">
                        {(currentLanguage.dir?`${matchClincsAr[hospital.name]} ` :`${matchClincsEn[hospital.name]}`) || hospital.name} 
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">{t('price')}</InputLabel>
                  <Select
                    native
                    value={props.filters.price}
                    onChange={handleChange}
                    inputProps={{
                      name: "price",
                      id: "filled-age-native-simple"
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
                {/*<FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">{t('gender')}</InputLabel>
                  <Select
                    native
                    value={props.filters.gender}
                    onChange={handleChange}
                    inputProps={{
                      name: "Gender",
                      id: "filled-age-native-simple"
                    }}
                  >
                    <option aria-label={t('none')} value="" />
                    <option value={"male"}>{t('male')}</option>
                    <option value={"female"}>{t('female')}</option>
                  </Select>
                </FormControl>*/}
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">{t('city')}</InputLabel>
                  <Select
                    native
                    onChange={handleChange}
                    inputProps={{
                      name: "City",
                      id: "outlined-age-native-simple"
                    }}
                  >
                    <option aria-label={t('none')} value="" />
                    {props.cities.map((city) => {
                      return (
                        <option value={city.name} data-id="2">
                        {(currentLanguage.dir?`${matchCityAr[city.name]} ` :`${matchCityEn[city.name]}`) || city.name} 
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">{t('area')}</InputLabel>
                  <Select
                    native
                    onChange={handleChange}
                    inputProps={{
                      name: "Area",
                      id: "outlined-age-native-simple"
                    }}
                  >
                    <option aria-label={t('none')} value="" />
                    {props.regions.map((region) => {
                      return (
                        <option value={region.name} data-id="2">
                        {(currentLanguage.dir?`${matchAreaAr[region.name]} ` :`${matchAreaEn[region.name]}`) || region.name} 
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">{t('sort')}</InputLabel>
                  <Select
                    native
                    value={props.filters.sortBy}
                    onChange={handleChange}
                    inputProps={{
                      name: "Sort",
                      id: "filled-age-native-simple"
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={"A to Z"}>{t('atoz')}</option>
                    <option value={"Z to A"}>{t('ztoa')} </option>
                    <option value={"Lowest Price"}>{t('lowestprice')}</option>
                    <option value={"Highest Price"}>{t('highestprice')}</option>
                  </Select>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                {t('cancel')}
              </Button>
              <Button onClick={handleClose} color="primary">
                {t('ok')}
              </Button>
            </DialogActions>
          </Dialog>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <FormControl
              variant="outlined"
              className={classes.searchStyle}
            >
              <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder={t('search')} onChange={handleSearchChange} />
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
    hospitals: getVisibleHospitals(state.hospitals),
    cities: getVisibleCities(state.cities),
    regions: getVisibleRegions(state.regions),
    filters: state.filterClinics,
    entities: getVisibleEntities(state.entities)
  };
}

export default connect(mapStateToProps)(DialogSelect);