import React from "react";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { TextField } from '@material-ui/core';
import { createMuiTheme, makeStyles, withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { connect } from "react-redux";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation, initReactI18next } from "react-i18next";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {
  setTextFilterSP,
  setRoomName,
  setHospitalFilter,
  setPriceFilter,
} from "../../Redux/actions/specialRoomsFilter";
import Globals from "../navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


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
const theme = createMuiTheme({
  direction: Globals.direction,
  palette: {
    primary: {
      main: "#19a25d"
    }
  }
});
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
const FindForm = (props) => {
  const classes = useStyles();
  const [room, setRoom] = React.useState("");
  const [Hospital, setHospital] = React.useState("");
  const [Doctor, setDoctor] = React.useState("");
  const [Service, setService] = React.useState("");
  const [Sopen, setSOpen] = React.useState(false);
  const [Hopen, setHOpen] = React.useState(false);
  const [Dopen, setDOpen] = React.useState(false);
  const [SEopen, setSEOpen] = React.useState(false);
  const [priceOpen, setPriceOpen] = React.useState(false);

  const handleRoomChange = (event) => {
    const room = event.target.value;
    props.dispatch(setRoomName(room));
    setRoom(room);
  };
  const HospitalhandleChange = (event) => {
    const hospital = event.target.value;
    props.dispatch(setHospitalFilter(hospital));
    setHospital(hospital);
  };
  const DoctorhandleChange = (event) => {
    setDoctor(event.target.value);
  };
  const ServicehandleChange = (event) => {
    setService(event.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    const price = newValue;
    props.dispatch(setPriceFilter(price));
  }

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    props.dispatch(setTextFilterSP(searchValue));
  }

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

  const pricehandleClose = () => {
    setPriceOpen(false);
  };

  const pricehandleOpen = () => {
    setPriceOpen(true);
  };
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <div>
          <h1 className={classes.title}> {t('find_room')}</h1>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label1">
              {t('special_room')}
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select1"
              open={Sopen}
              onClose={ShandleClose}
              onOpen={ShandleOpen}
              value={props.filters.room}
              onChange={handleRoomChange}
            >
              <MenuItem value="" data-id="1">
                <em>{t('none')}</em>
              </MenuItem>
              {props.entities.map((entity) => {
                return (
                  <MenuItem value={entity.name} data-id="3">
                    <em>{entity.name}</em>
                  </MenuItem>
                );
              })}
              <MenuItem value={10} data-id="1">
                {t('labor')}
              </MenuItem>
              <MenuItem value={20} data-id="1">
                {t('intensive')}
              </MenuItem>
              <MenuItem value={30} data-id="1">
                {t('covidr')}
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
              onChange={handlePriceChange}
              valueLabelDisplay="on"
            />
          </div>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <FormControl
              variant="outlined"
              className={classes.searchStyle}
            >
              <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder={t('searchroom')} onChange={handleSearchChange} />
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
    filters: state.filterSpecialRooms,
    entities: state.specialRoomsEntities
  }
}

export default connect(mapStateToProps)(FindForm);