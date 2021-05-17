import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer=styled.div`
background:#235274;
display:flex;
justify-content:left;
align-items: center;
padding: 0 30px;
height:800px;
position:relative;
z-index:1;

@media screen and (max-width:480px){
  height:300px;}
  @media screen and (max-width:760pxpx){
  height:200px;
}
`
export const HeroBg=styled.div`
position:absolute;
top:0;
bottom : 0;
left:0;
right:0;
width:100%;
height: 100%;
overflow:hidden;
`
export const HeroContent = styled.div`
z-index:3;
max-width: 1200px;
position:absolute;
padding:8px 24px ;
display:flex;
flex-direction:column;
align-items:left;
  @media screen and (max-width:760px){
  height:20%;
   
  }
`
export const HeroH1 = styled.h1`
color:#fff;
font-size:32px;
text-align:left;

@media screen and (max-width:760px) {
  margin-top:0;
  left: 0;
  font-size : 18px;
  margin-right:0;
}
@media screen and (max-width:480px){
  margin-right:50px;
  margin-left:0px;
  margin-top:0px;
  font-size : 14px;
  top:120px;
  left:0px;
  right:0px;
  width:100px;
  float:left;
  
}
`
export const HeroP = styled.p`
margin-top:24px;
color:#fff;
font-size:24px;
text-align:left;
max-width:600px;

@media screen and (max-width:760px){
  font-size : 12px;
  width:120px;
}
`
export const HeroBtnWrapper =styled.div`
margin-top : 32px;
display: flex;
flex-direction:column;
align-items:center;
width:250px;
@media screen and (max-width:480px){
  
}

`
export const ArrowForward=styled(MdArrowForward)`
 margin-left:8px;
 font-size:20px
`
export const ArrowRight =styled(MdKeyboardArrowRight)`
 margin-left:8px;
 font-size:20px
`

