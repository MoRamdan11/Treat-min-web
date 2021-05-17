import React, { useState } from "react";
import DrCard from "../component/DrCards";
import { connect } from "react-redux";
import { addClinic } from "../Redux/actions/clinics";

const FindClincal = (props) => {
  return (
    <>
      <DrCard />
    </>
  );
};
export default connect()(FindClincal);
