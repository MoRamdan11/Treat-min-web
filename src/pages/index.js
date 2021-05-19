import React, { useState } from "react";
import InfoSection from "../component/InfoSection";
import { homeobjone, homeobjtwo } from "../component/InfoSection/data";
import NavTabs from "../component/booking/NavTab";
import Hero from "../component/InfoSection/hero"
import Aboutus from "../component/InfoSection/aboutus"
import { HeadsetRounded } from "@material-ui/icons";
import AddDataToRedux from "../component/DrCards/data";
import Auth from "../Auth/auth";
const Home = () => {
  return (
    <>
    <Auth />
    <Hero/>
    <NavTabs />
    <Aboutus />
    <AddDataToRedux />
    </>
  );
};
export default Home;
