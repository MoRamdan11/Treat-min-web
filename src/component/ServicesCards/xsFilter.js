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
import { useTranslation, initReactI18next } from "react-i18next";
import {
  setTextFilterSE,
  setServicesFilterSE,
  setHospitalFilterSE,
  setPriceFilterSE,
  setSortFilterSE
} from "../../Redux/actions/filterServices";
import { connect } from "react-redux";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  searchStyle: {
    borderRadius: "20px",
    marginTop: "20px",
    width: "100%",
  }
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#19a25d"
    }
  }
});
function DialogSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    Service: "",
    Hospital: "",
    price: 0,
    Sort: ""
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
      case 'Sort': {
        props.dispatch(setSortFilterSE(value));
      }
      default:
        break;
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
    props.dispatch(setTextFilterSE(searchValue));
  }
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button onClick={handleClickOpen}>{t('filter')}</Button>
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
                {t('service')}
              </InputLabel>
                <Select
                  native
                  value={props.filters.service}
                  onChange={handleChange}
                  inputProps={{
                    name: "Service",
                    id: "filled-age-native-simple"
                  }}
                >
                  <option aria-label={t('none')}value="" />
                  <option value={"Blood Test"}>{t('blood')} </option>
                  <option value={"Incabsulation"}>{t('incubsulation')} </option>
                   <option value={"X-Ray"}>{t('ray')} </option>
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
                <option value={"Daar El fouad"}>{t('daar')}</option>
                <option value={"elmidan"}>{t('midan')}</option>
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
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                  <option value={150}>150</option>
                  <option value={200}>200</option>
                  <option value={250}>250</option>
                  <option value={300}>300</option>
                  <option value={350}>350</option>
                  <option value={400}>400</option>
                  <option value={450}>450</option>
                  <option value={500}>500</option>
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
                <option aria-label={t('none')} value="" />
                <option value={"A to Z"}>{t('atoz')}</option>
                <option value={"Z to A"}>{t('ztoa')}</option>
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
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    filters: state.filterServices
  }
}

export default connect(mapStateToProps)(DialogSelect);
