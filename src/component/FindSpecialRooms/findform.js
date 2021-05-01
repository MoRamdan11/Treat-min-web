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
import {
  setTextFilterSP,
  setRoomName,
  setHospitalFilter,
  setPriceFilter,
} from "../../Redux/actions/specialRoomsFilter";
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
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#19a25d"
    }
  }
});
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

  const handlePriceChange = (event) => {
    const price = event.target.value;
    if (price === "") {
      props.dispatch(setPriceFilter(0));
    } else {
      const intPrice = parseInt(price);
      props.dispatch(setPriceFilter(intPrice));
    }
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
    <ThemeProvider theme = {theme}>
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
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label2">
        {t('price')}
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label2"
          id="demo-controlled-open-select2"
          open={priceOpen}
          onClose={pricehandleClose}
          onOpen={pricehandleOpen}
          value={props.filters.price}
          onChange={handlePriceChange}
        >
          <MenuItem value="" data-id="2">
            <em> {t('none')}</em>
          </MenuItem>
          <MenuItem value="50" data-id="2">
            50
          </MenuItem>
          <MenuItem value={"100"} data-id="2">
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
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <FormControl
          variant="outlined"
          className={classes.searchStyle}
        >
          <InputLabel htmlFor="outlined-adornment-password">
          {t('searchroom')}
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
            labelWidth={220}
          />
        </FormControl>
      </div>
    </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filterSpecialRooms
  }
}

export default connect(mapStateToProps)(FindForm);