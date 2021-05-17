import React from "react";
import {ImgWrap,Img} from "./NotFoundElement"
import error from "./404.PNG"
const NotFound =()=>{
  return (
    <>
    <Img src={error} alt="404 ERROR"/>
    </>
  );
}