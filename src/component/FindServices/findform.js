import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {InputLabel, MenuItem,FormControl,Select,TextField} from "@material-ui/core";
import { connect } from "react-redux";
import { useTranslation, initReactI18next } from "react-i18next";
import {
  setTextFilterSE,
  setServicesFilterSE,
  setHospitalFilterSE,
  setPriceFilterSE,
} from "../../Redux/actions/filterServices";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
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
    borderRadius: "20px",
    marginTop: "20px",
    width: "500px",
    "@media screen and (max-width: 500px)":{
      width: "100%"
    }
  }
  
}));
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

  const pricehandleChange = (event) => {
    const price = event.target.value;
    props.dispatch(setPriceFilterSE(price));
  }
  return (
    <div>
      <h1 className={classes.title}> {t('find_service')}</h1>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label2">
        {t('service')}
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label4"
          id="demo-controlled-open-select4"
          open={SEopen}
          onClose={SEhandleClose}
          onOpen={SEhandleOpen}
          value={props.filters.service}
          onChange={ServicehandleChange}
        >
        <MenuItem value="" data-id="3">
        <em>{t('none')}</em>
      </MenuItem>
      <MenuItem value={10} data-id="2">
      {t('blood')}
      </MenuItem>
      <MenuItem value={20} data-id="2">
      {t('ray')}
      </MenuItem>
      <MenuItem value={30} data-id="2">
      {t('incubsulation')}
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
      <MenuItem value={10} data-id="2">
      {t('daar')}
      </MenuItem>
      <MenuItem value={20} data-id="2">
      {t('midan')}
      </MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label2">
        {t('price')}
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label4"
          id="demo-controlled-open-select4"
          open={priceOpen}
          onClose={handlePriceClose}
          onOpen={handlePriceOpen}
          value={props.filters.price}
          onChange={pricehandleChange}
        >
          <MenuItem value="" data-id="3">
            <em>{t('none')}</em>
          </MenuItem>
          <MenuItem value="50" data-id="2">
            50
          </MenuItem>
          <MenuItem value="100" data-id="2">
            100
          </MenuItem>
          <MenuItem value="150" data-id="2">
            150
          </MenuItem>
          <MenuItem value="200" data-id="2">
            200
          </MenuItem>
          <MenuItem value="250" data-id="2">
            250
          </MenuItem>
          <MenuItem value="300" data-id="2">
            300
          </MenuItem>
          <MenuItem value="350" data-id="2">
            350
          </MenuItem>
          <MenuItem value="400" data-id="2">
            400
          </MenuItem>
          <MenuItem value="450" data-id="2">
            450
          </MenuItem>
          <MenuItem value="500" data-id="2">
            500
          </MenuItem>
        </Select>
      </FormControl>
      <div style={{ marginBottom: "10px" }}>
          <FormControl
            variant="outlined"
            className={classes.searchStyle}
          >
            <InputLabel htmlFor="outlined-adornment-password">
            {t('searchservice')}
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
                    disabled={true}
                  >
                    <SearchIcon color="primary" />
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={230}
            />
          </FormControl>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    filters: state.filterServices
  }
}

export default connect(mapStateToProps)(FindForm);