import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import EditSection from "../component/EditUserInfo/EditSection";
import { setSideBar } from "../Redux/actions/filterClinics";
function EditUserInfo() {
  useEffect(() => {
    props.dispatch(setSideBar(false));
  }, [])
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <EditSection />
    </>
  );
}

export default connect()(EditUserInfo);
