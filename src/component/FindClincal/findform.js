import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import {
  setSpeciality,
  setDrName,
  setHospitalName,
  setPrice,
  setGender,
  setSortBy,
  setTextFilter
} from "../../Redux/actions/filterClinics";
const useStyles = makeStyles((theme) => ({
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
    "@media screen and (max-width: 500px)":{
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
  const [Sopen, setSOpen] = React.useState(false);
  const [Hopen, setHOpen] = React.useState(false);
  const [Dopen, setDOpen] = React.useState(false);
  const [SEopen, setSEOpen] = React.useState(false);
  const [Popen, setPOpen] = React.useState(false);//price Open

  const SpecialictyhandleChange = (event) => {
    const speciality = event.target.value
    setStateSpecialicty(speciality);
    props.dispatch(setSpeciality(speciality));
  };
  const HospitalhandleChange = (event) => {
    const hospital = event.target.value;
    setStateHospital(hospital);
    props.dispatch(setHospitalName(hospital))
  };
  const DoctorhandleChange = (event) => {
    setDoctor(event.target.value);
  };
  const ServicehandleChange = (event) => {
    setService(event.target.value);
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
      <MenuItem value={'Cardiology'} data-id="1">
      {t('cardiology')}
      </MenuItem>
      <MenuItem value={'Chest and Respiratory'} data-id="1">
      {t('chest')}
      </MenuItem>
      <MenuItem value={'Dentistry'} data-id="1">
      {t('dentistry')}
      </MenuItem>
      <MenuItem value={'Hepatology'} data-id="1">
      {t('hepatology')}
      </MenuItem>
      <MenuItem value={'Internal Medicine'} data-id="1">
      {t('internal')}
      </MenuItem>
      <MenuItem value={'Neurosurgery'} data-id="1">
      {t('neurosurgery')}
      </MenuItem>
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
      <MenuItem value={'Daar El fouad'} data-id="2">
      {t('daar')}
      </MenuItem>
      <MenuItem value={'elmidan'}data-id="2">
      {t('midan')}
      </MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label1">
        {t('price')}
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select1"
          open={Popen}
          onClose={PhandleClose}
          onOpen={PhandleOpen}
          value={props.filters.price}
          onChange={priceHandleChange}

        >
          <MenuItem value="" data-id="1">
            <em>{t('none')}</em>
          </MenuItem>
          <MenuItem value="50" data-id="1">50</MenuItem>
          <MenuItem value="100" data-id="1">100</MenuItem>
          <MenuItem value="150" data-id="1">150</MenuItem>
          <MenuItem value="200" data-id="1">200</MenuItem>
          <MenuItem value="250" data-id="1">250</MenuItem>
          <MenuItem value="300" data-id="1">300</MenuItem>
          <MenuItem value="350" data-id="1">350</MenuItem>
          <MenuItem value="400" data-id="1">400</MenuItem>
          <MenuItem value="450" data-id="1">450</MenuItem>
          <MenuItem value="500" data-id="1">500</MenuItem>
        </Select>
      </FormControl>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <FormControl
          variant="outlined"
          className={classes.searchStyle}
        >
          <InputLabel htmlFor="outlined-adornment-password">
          {t('search')}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={handleSearchChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  disabled = {true}
                >
                  <SearchIcon color="primary" />
                </IconButton>
              </InputAdornment>
            }
            labelWidth={280}
          />
        </FormControl>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filterClinics
  };
}
export default connect(mapStateToProps)(FindForm);