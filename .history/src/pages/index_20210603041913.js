import React, { useEffect, useState } from "react";
import InfoSection from "../component/InfoSection";
import { homeobjone, homeobjtwo } from "../component/InfoSection/data";
import NavTabs from "../component/booking/NavTab";
import Hero from "../component/InfoSection/hero"
import Aboutus from "../component/InfoSection/aboutus"
import { HeadsetRounded } from "@material-ui/icons";
import AddDataToRedux from "../component/DrCards/data";
import { resetFilterClinics } from "../Redux/actions/filterClinics";
import { resetServicesFilter } from "../Redux/actions/filterServices";
import { connect } from "react-redux";
const Home = (props) => {
  useEffect(() => {
    props.dispatch(resetFilterClinics());
    props.dispatch(resetServicesFilter());
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
    <Hero/>
    <NavTabs />
    <Aboutus />
    </>
  );
};
export default connect()(Home);
