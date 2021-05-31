import React, { useState, Suspense } from "react";
import DrCard from "../component/DrCards";

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
)
const FindClincal = (props) => {
  return (
    <>
      <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
          <DrCard />
        </React.StrictMode>,
      </Suspense>
    </>
  );
};
export default FindClincal;
