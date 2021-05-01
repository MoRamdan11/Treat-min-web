import React, { useState } from "react";
import InfoSection from "../component/InfoSection";
import { homeobjone, homeobjtwo } from "../component/InfoSection/data";
import NavTabs from "../component/booking/NavTab";
import Hero from "../component/InfoSection/hero"
import Aboutus from "../component/InfoSection/aboutus"
import { HeadsetRounded } from "@material-ui/icons";

const Home = () => {
  return (
    <>
    <Hero/>
    <NavTabs />
    <Aboutus />
    </>
  );
};
export default Home;
