import React, {useState, useEffect} from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import FindClincal from "./pages/FindClical";
import NotFound from "./component/NotFound/index";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/setupAccount";
import FindSpecialRooms from "./pages/FindSpecialRooms";
import ForgetPassword from "./pages/forgetpassword/forgetPassword";
import VerificationCode from "./pages/forgetpassword/verificationCode";
import ResetPassword from "./pages/forgetpassword/resetPassword";
import VerifiyCode from "./pages/signup/verifiyCode";
import Account from "./component/MyAccount/Account";
import FindServices from "./pages/FindServices";
import Team from "./pages/team/team";
import Footer from "./component/navbar/Footer/Footer";
import Grid from "@material-ui/core/Grid";
import Emergncy  from "./component/Emergency/Emergncy";
import Location from "./pages/Location";
import EditUserInfo from "./component/EditUserInfo/EditUserInfo";
//reducer
import configureStore from "./Redux/store/configureStore";
import getVisibleClinics from "./Redux/selectors/clinics";
import {setSpeciality} from "./Redux/actions/filterClinics";
import AddDataToRedux from "./component/DrCards/data";
import AddSpecialRoomsToRedux from "./component/SpecialRoomsCards/data";
import AddServicesToRedux from "./component/ServicesCards/data";
import SignUp1 from "./pages/signup/firstSignUp";
import SetupAccount from "./pages/signup/setupAccount";
import Navbar from "./component/navbar/index";
import Sidebar from "./component/SideBar";
import ResetAcoountPassword from "./component/EditUserInfo/resetPassword";
import axios from "axios";
import {addClinic} from "./Redux/actions/clinics";
import { fetchClinic } from "./Redux/actions/filterClinics";
import { connect } from "react-redux";
import Auth from "./Auth/auth";
function App(props) {
  const [doctors, setDoctors] = useState([]);
  var doctors2 = [];
  const [isOpen, serIsOpen] = useState(false);
  const toggle = () => {
    serIsOpen(!isOpen);
  };
  /*useEffect(() => {
     function getClinics(i){
      const data =  axios.get(`/api/clinics/${i}/details/`).then(respons => {
        doctors2.push(...respons.data.details);
      }).catch((error) => {
        console.log(error);
      });
    }
    for(var i = 1; i < 29; i++){
      getClinics(i);
      console.log('doctor', doctors2);
      setDoctors((prevVal) => {
        console.log('prevDoc', prevVal);
        return [...prevVal, ...doctors2]
      })
      doctors2 = [];
    }
    //setDoctors(doctors2);
    doctors.map((doctor) => { props.dispatch(addClinic(doctor)); });
  }, [])
  /*useEffect(() => {
    doctors2.map((doctor) => {
      props.dispatch(addClinic(doctor));
    })
  }, [doctors2])*/
  return (
    <Router>
      <Route>
        <AddSpecialRoomsToRedux />
        <AddServicesToRedux />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/FindClinical" component={FindClincal} />
          <Route path="/SignUp" component={SignUp1} />
          <Route path="/SetupAccount" component={SetupAccount} />
          <Route path="/login" component={Login} />
          <Route path="/forgetPassword" component={ForgetPassword} />
          <Route path="/verificationCode" component={VerificationCode} />
          <Route path="/verifiyCode" component={VerifiyCode} />
          <Route path="/resetPassword" component={ResetPassword} />
          <Route path="/FindSpecialRooms" component={FindSpecialRooms} />
          <Route path="/FindServices" component={FindServices} />
          <Route path="/team" component={Team} />
          <Route path="/MyAccount" component={Account} />
          <Route path="/Emergncy" component={Emergncy} />
          <Route path="/Emergency2" component={Location} />
          <Route path="/EditUserInfo" component={EditUserInfo} />
          <Route path="/ChangePassword" component={ResetAcoountPassword} />
        </Switch>
        <Footer />
      </Route>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    filters: state.filterClinics
  };
}
export default connect(mapStateToProps)(App);