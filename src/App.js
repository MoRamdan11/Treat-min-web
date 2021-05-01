import React, {useState} from "react";
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
import Emergency from "./pages/Emergency";
import Location from "./pages/Location";
import EditUserInfo from "./component/EditUserInfo/EditUserInfo";
//reducer
import configureStore from "./Redux/store/configureStore";
import {addClinic} from "./Redux/actions/clinics";
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
export default function App() {
  const [isOpen, serIsOpen] = useState(false);
  const toggle = () => {
    serIsOpen(!isOpen);
  };
  return (
    <Router>
      <Route>
        <AddDataToRedux />
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
          <Route path="/Emergency" component={Emergency} />
          <Route path="/Emergency2" component={Location} />
          <Route path="/EditUserInfo" component={EditUserInfo} />
          <Route path="/ChangePassword" component={ResetAcoountPassword} />
        </Switch>
        <Footer />
      </Route>
    </Router>
  );
}
//<Route path="/signUp" component={SignUp} />
/*//start reducer test
  const store = configureStore();
  store.dispatch(addClinic({
    avatar: "AH",
    name: "DR.Ahmed Mohamed ",
    specalist: "Cardiology",
    rating_total: 5,
    hospital: "Daar EL-FOUAD HOspital",
    waiting: "10 minutes",
    price: "300 L.E",
    callus: "16370",
    avaliabledate1: "Today 5:00 pm",
    avaliabledate2: "Tomorrow 4:00 pm",
    avaliabledate3: "Tomorrow 5:00 pm",
  }));
  store.dispatch(addClinic({
    avatar: "RS",
    name: "Dr.Rana Elsaeed",
    specalist: "ocalist",
    rating_total: 5,
    hospital: "Daar EL-FOUAD HOspital ",
    waiting: "10 minutes",
    price: "350 L.E",
    callus: "16370",
    avaliabledate1: "Today 2:00 pm",
    avaliabledate2: "Tomorrow 1:00 pm",
    avaliabledate3: "Tomorrow 3:00 pm",
  }));
  store.dispatch(setSpeciality('ocalist'));
  const state = store.getState();
  const visibleClinics = getVisibleClinics(state.clinics, state.filterClinics);
  console.log(visibleClinics);
  //end reducer test*/