import React, { useState } from "react";
import EditSection from "../component/EditUserInfo/EditSection";

function EditUserInfo() {
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <EditSection />
    </>
  );
}

export default EditUserInfo;
