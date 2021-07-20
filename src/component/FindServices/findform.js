import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { InputLabel, MenuItem, FormControl, Select, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { useTranslation, initReactI18next } from "react-i18next";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {
  setTextFilterSE,
  setServicesFilterSE,
  setHospitalFilterSE,
  setPriceFilterSE,
  setCitySE,
  setRegionSE
} from "../../Redux/actions/filterServices";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Globals from "../navbar/global";
import { ThemeProvider } from "styled-components";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
//GetVisible services Entities, hospitals, cities and regions
import getVisibleServicesEntities from "../../Redux/selectors/servicesEntities";
import getVisibleHospitals from "../../Redux/selectors/hospitals";
import getVisibleCities from "../../Redux/selectors/cities";
import getVisibleRegions from "../../Redux/selectors/regions";
import cookies from 'js-cookie';
import {matchClincsEn,matchClincsAr, matchAddressEn, matchAddressAr,matchAreaEn,matchAreaAr,matchCityEn,matchCityAr} from "../DrCards/Cincs"
import { ServicesEN, ServicesAR } from "../ServicesCards/service";

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

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
  direction: Globals.direction,
});

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
    borderRadius: "20px",
    marginTop: "20px",
    width: "500px",
    "@media screen and (max-width: 500px)": {
      width: "100%"
    }
  }

}));
function valuetext(value) {
  return `${value}{t('le')}`;
}
const Prices = [
  {
    value: 100,
    label: '100L.E',
  },
  {
    value: 200,
    
  },
  {
    value: 300,
    label: '300L.E',
  },
  {
    value: 400,
    
  },
  {
    value: 500,
    label: '500L.E',
  },
];
const FindForm = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [Specialicty, setSpecialicty] = React.useState("");
  const [Hospital, setHospital] = React.useState("");
  const [Doctor, setDoctor] = React.useState("");
  const [Service, setService] = React.useState("");
  const [Sopen, setSOpen] = React.useState(false);
  const [Hopen, setHOpen] = React.useState(false);
  const [Dopen, setDOpen] = React.useState(false);
  const [SEopen, setSEOpen] = React.useState(false);
  const [Copen, setCOpen] = React.useState(false);
  const [Aopen, setAOpen] = React.useState(false);
  const [City, setStateCity] = React.useState("");
  const [Area, setStateArea] = React.useState("");
  const [priceOpen, setPriceOpen] = React.useState(false);

  const SpecialictyhandleChange = (event) => {
    setSpecialicty(event.target.value);
  };
  const HospitalhandleChange = (event) => {
    const hospital = event.target.value;
    setHospital(hospital);
    props.dispatch(setHospitalFilterSE(hospital));
  };
  const DoctorhandleChange = (event) => {
    setDoctor(event.target.value);
  };
  const ServicehandleChange = (event) => {
    const service = event.target.value;
    setService(service);
    props.dispatch(setServicesFilterSE(service));
  };
  const CityhandleChange = (event) => {
    const City = event.target.value;
    setStateCity(City);
    props.dispatch(setCitySE(City));
  };
  const AreahandleChange = (event) => {
    const Area = event.target.value;
    setStateArea(Area);
    props.dispatch(setRegionSE(Area));
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
  const handlePriceClose = () => {
    setPriceOpen(false);
  };

  const handlePriceOpen = () => {
    setPriceOpen(true);
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    props.dispatch(setTextFilterSE(searchValue));
  }

  const pricehandleChange = (event, newValue) => {
    const price = newValue;
    props.dispatch(setPriceFilterSE(price));
  }
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <div>
          <h1 className={classes.title}> {t('find_service')}</h1>
          <div style={{ marginBottom: "10px" }}>
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
              value={Hospital}
              onChange={HospitalhandleChange}
            >
              <MenuItem value="" data-id="2">
                <em>{t('none')}</em>
              </MenuItem>
              {props.hospitals.map((hospital) => {
                return (
                  <MenuItem key={hospital.id} value={hospital.name} data-id="2">
                    <em>{(currentLanguage.dir?`${matchClincsAr[hospital.name]} ` :`${matchClincsEn[hospital.name]}`) || hospital.name} </em>
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
              value={City}
              onClose={ChandleClose}
              onOpen={ChandleOpen}
              onChange={CityhandleChange}
            >
              <MenuItem value="" data-id="2">
                <em>{t('none')}</em>
              </MenuItem>
              {props.cities.map((city) => {
                return (
                  <MenuItem key={city.id} value={city.name} data-id="2">
                    <em>{(currentLanguage.dir?`${matchCityAr[city.name]} ` :`${matchCityEn[city.name]}`) || city.name} </em>
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
              onClose={AhandleClose}
              onOpen={AhandleOpen}
              value={Area}
              onChange={AreahandleChange}
            >
              <MenuItem value="" data-id="2">
                <em>{t('none')}</em>
              </MenuItem>
              {props.regions.map((region) => {
                return (
                  <MenuItem key={region.id} value={region.name} data-id="2">
                    <em>{(currentLanguage.dir?`${matchAreaAr[region.name]} ` :`${matchAreaEn[region.name]}`) || region.name} </em>
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
              onChange={pricehandleChange}
            />
          </div>
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filterServices,
    entities: getVisibleServicesEntities(state.servicesEntities),
    hospitals: getVisibleHospitals(state.hospitals),
    cities: getVisibleCities(state.cities),
    regions: getVisibleRegions(state.regions),
  }
}

export default connect(mapStateToProps)(FindForm);