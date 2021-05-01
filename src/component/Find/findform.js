import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
  }
}));
export const FindForm = () => {
  const classes = useStyles();
  const [Specialicty, setSpecialicty] = React.useState("");
  const [Hospital, setHospital] = React.useState("");
  const [Doctor, setDoctor] = React.useState("");
  const [Service, setService] = React.useState("");
  const [Sopen, setSOpen] = React.useState(false);
  const [Hopen, setHOpen] = React.useState(false);
  const [Dopen, setDOpen] = React.useState(false);
  const [SEopen, setSEOpen] = React.useState(false);

  const SpecialictyhandleChange = (event) => {
    setSpecialicty(event.target.value);
  };
  const HospitalhandleChange = (event) => {
    setHospital(event.target.value);
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
  return (
    <div>
      <h1 className={classes.title}> Find your need :</h1>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label1">
          Find Specialicty
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select1"
          open={Sopen}
          onClose={ShandleClose}
          onOpen={ShandleOpen}
          value={Specialicty}
          onChange={SpecialictyhandleChange}
        >
          <MenuItem value="" data-id="1">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} data-id="1">
            dentistry
          </MenuItem>
          <MenuItem value={20} data-id="1">
            heart
          </MenuItem>
          <MenuItem value={30} data-id="1">
            Chest
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label2">
          Find Hospital
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
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} data-id="2">
            Hospital1
          </MenuItem>
          <MenuItem value={20} data-id="2">
            Hospital2
          </MenuItem>
          <MenuItem value={30} data-id="2">
            Hospital3
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label2">
          Find Doctor
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label3"
          id="demo-controlled-open-select3"
          open={Dopen}
          onClose={DhandleClose}
          onOpen={DhandleOpen}
          value={Doctor}
          onChange={DoctorhandleChange}
        >
          <MenuItem value="" data-id="3">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} data-id="2">
            Doctor1
          </MenuItem>
          <MenuItem value={20} data-id="2">
            Doctor2
          </MenuItem>
          <MenuItem value={30} data-id="2">
            Doctor3
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label2">
          Find Service
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label4"
          id="demo-controlled-open-select4"
          open={SEopen}
          onClose={SEhandleClose}
          onOpen={SEhandleOpen}
          value={Service}
          onChange={ServicehandleChange}
        >
          <MenuItem value="" data-id="3">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} data-id="2">
            BLOOD
          </MenuItem>
          <MenuItem value={20} data-id="2">
            X-Rays
          </MenuItem>
          <MenuItem value={30} data-id="2">
            incubsulation
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
