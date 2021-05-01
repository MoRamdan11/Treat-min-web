import React, { useState } from "react";
import Sidebar from "../component/SideBar";
import Navbar from "../component/navbar";
import Footer from "../component/navbar/Footer/Footer";
import InfoSection from "../component/InfoSection";
import { EMgobjone, } from "../component/InfoSection/data";
const Emergency =() =>{
  return (
    <>
    <InfoSection {...EMgobjone} />
    </>
  );
}; 
export default Emergency