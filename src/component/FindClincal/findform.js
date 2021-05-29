import React from "react";
import "./findform.css";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { TextField } from '@material-ui/core';
import { connect } from "react-redux";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation, initReactI18next } from "react-i18next";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {
  setSpeciality,
  setDrName,
  setHospitalName,
  setPrice,
  setSortBy,
  setTextFilter,
  setRegionDR,
  setCityDR
} from "../../Redux/actions/filterClinics";
import Globals from "../navbar/global"
import { ThemeProvider } from "styled-components";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
//GetVisible Clinics Entities, hospitals, cities and regions
import getVisibleEntities from "../../Redux/selectors/entities";
import getVisibleHospitals from "../../Redux/selectors/hospitals";
import getVisibleCities from "../../Redux/selectors/cities";
import getVisibleRegions from "../../Redux/selectors/regions";
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
function valuetext(value) {
  return `${value}{t('le')}`;
}
const theme = createMuiTheme({
  direction: Globals.direction,
});
const Prices = [
  {
    value: 100,
    label: '100L.E',
  },
  {
    value: 200,
    label: '200L.E',
  },
  {
    value: 300,
    label: '300L.E',
  },
  {
    value: 400,
    label: '400L.E',
  },
  {
    value: 500,
    label: '500L.E',
  },
];
const useStyles = makeStyles((theme) => ({
  rooroot: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  title: {
    flexGrow: 1,
    color: "	#00b300"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  searchStyle: {
    borderRadius: "50px",
    width: "500px",
    "@media screen and (max-width: 500px)": {
      width: "100%"
    }
  }
}));
const FindForm = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [Specialicty, setStateSpecialicty] = React.useState("");
  const [Hospital, setStateHospital] = React.useState("");
  const [Doctor, setDoctor] = React.useState("");
  const [Service, setService] = React.useState("");
  const [City, setStateCity] = React.useState("");
  const [Area, setStateArea] = React.useState("");
  const [Sopen, setSOpen] = React.useState(false);
  const [Hopen, setHOpen] = React.useState(false);
  const [Copen, setCOpen] = React.useState(false);
  const [Aopen, setAOpen] = React.useState(false);
  const [Dopen, setDOpen] = React.useState(false);
  const [SEopen, setSEOpen] = React.useState(false);
  const [Popen, setPOpen] = React.useState(false);//price Open
  const [price, setPrices] = React.useState([20, 37]);

  const handlePriceChange = (event, newValue) => {
    const price = newValue;
    //setPrices(price);
    props.dispatch(setPrice(price));
  };

  const SpecialictyhandleChange = (event) => {
    const speciality = event.target.value;
    setStateSpecialicty(speciality);
    props.dispatch(setSpeciality(speciality));
  };
  const HospitalhandleChange = (event) => {
    const hospital = event.target.value;
    setStateHospital(hospital);
    props.dispatch(setHospitalName(hospital))
  };
  const CityhandleChange = (event) => {
    const City = event.target.value;
    setStateCity(City);
    props.dispatch(setCityDR(City));
  };
  const AreahandleChange = (event) => {
    const Area = event.target.value;
    setStateArea(Area);
    props.dispatch(setRegionDR(Area));
  };


  const ShandleClose = () => {
    setSOpen(false);
  };

  const ShandleOpen = () => {
    setSOpen(true);
  };
  const HhandleClose = () => {
    setHOpen(false);
  };

  const HhandleOpen = () => {
    setHOpen(true);
  };
  const ChandleClose = () => {
    setCOpen(false);
  };

  const ChandleOpen = () => {
    setCOpen(true);
  };
  const AhandleClose = () => {
    setAOpen(false);
  };

  const AhandleOpen = () => {
    setAOpen(true);
  };
  const DhandleClose = () => {
    setDOpen(false);
  };

  const DhandleOpen = () => {
    setDOpen(true);
  };
  const SEhandleClose = () => {
    setSEOpen(false);
  };

  const SEhandleOpen = () => {
    setSEOpen(true);
  };
  const PhandleOpen = () => {
    setPOpen(true);
  };
  const PhandleClose = () => {
    setPOpen(false);
  };
  const priceHandleChange = (event) => {
    const priceVal = event.target.value;
    if (priceVal === "") {
      props.dispatch(setPrice(0));
    } else {
      const intPrice = parseInt(priceVal, 10);
      props.dispatch(setPrice(intPrice));
    }
  }
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    props.dispatch(setTextFilter(searchValue));
  }
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <div>
          <h1 className={classes.title}> {t('find_clincal')}</h1>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label1">
              {t('specialist')}
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select1"
              open={Sopen}
              onClose={ShandleClose}
              onOpen={ShandleOpen}
              value={props.filters.speciality}
              onChange={SpecialictyhandleChange}
            >
              <MenuItem value="" data-id="1">
                <em>{t('none')}</em>
              </MenuItem>
              {props.entities.map((entity) => {
                return (
                  <MenuItem key={entity.id} value={entity.name} data-id="1">
                    <em>{entity.name}</em>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label2">
              {t('hospital')}
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label2"
              id="demo-controlled-open-select2"
              open={Hopen}
              onClose={HhandleClose}
              onOpen={HhandleOpen}
              value={props.filters.hospital}
              onChange={HospitalhandleChange}
            >
              <MenuItem value="" data-id="2">
                <em>{t('none')}</em>
              </MenuItem>
              {props.hospitals.map((hospital) => {
                return (
                  <MenuItem key={hospital.id} value={hospital.name} data-id="2">
                    <em>{hospital.name}</em>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label2">
              {t('city')}
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label2"
              id="demo-controlled-open-select2"
              open={Copen}
              onClose={ChandleClose}
              onOpen={ChandleOpen}
              value={City}
              onChange={CityhandleChange}
            >
              <MenuItem value="" data-id="2">
                <em>{t('none')}</em>
              </MenuItem>
              {props.cities.map((city) => {
                return (
                  <MenuItem key={city.id} value={city.name} data-id="2">
                    <em>{city.name}</em>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label2">
              {t('area')}
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label2"
              id="demo-controlled-open-select2"
              open={Aopen}
              value={Area}
              onClose={AhandleClose}
              onOpen={AhandleOpen}
              onChange={AreahandleChange}
            >
              <MenuItem value="" data-id="2">
                <em>{t('none')}</em>
              </MenuItem>
              {props.regions.map((region) => {
                return (
                  <MenuItem key={region.id} value={region.name} data-id="2">
                    <em>{region.name}</em>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <div className={classes.root}>
            <Typography id="discrete-slider-always" gutterBottom>
              {t('price')}
            </Typography>
            <Slider
              max={500}
              defaultValue={500}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={50}
              marks={Prices}
              valueLabelDisplay="on"
              onChange={handlePriceChange}
            //value = {props.filters.price}
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
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
};

const mapStateToProps = (state) => {
  return {
    hospitals: getVisibleHospitals(state.hospitals),
    cities: getVisibleCities(state.cities),
    regions: getVisibleRegions(state.regions),
    filters: state.filterClinics,
    entities: getVisibleEntities(state.entities)
  };
}
export default connect(mapStateToProps)(FindForm);