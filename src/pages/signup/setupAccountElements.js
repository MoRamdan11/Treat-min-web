import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link as LinkR } from "react-router-dom";

export const GridContainer = styled(Grid)`
  width: 100%;
  margin: 0px;
  background-color: #235274;
  width: 100%;
  margin: 0;
`;

export const SignUpImg = styled.img`
  width: 600px;
  height: 600px;
  @media screen and (min-width: 1080px) {
    margin: auto 100px auto 100px;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const GridForm = styled(Grid)`
  text-align: center;
  @media screen and (min-width: 1000px) {
    margin-top: 30px;
  }
`;

export const SignUpForm = styled.form`
  width: 350px;
  /*height: 500px;*/
  border: 1px solid #f9f9f9;
  border-radius: 20px;
  text-align: center;
  background-color: #f9f9f9;
  margin: 0 auto 0 auto;
  margin-bottom: 30px;
  padding: 10px 20px 0 20px;
  @media screen and (min-width: 1024px){
    position: relative;
    left: 40px;
    top: 20px;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
  @media screen and (max-width: 1000px) {
    margin: 20% auto 10% auto;
  }
  @media screen and (width: 1024px){
    width: 300px;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #19a25d;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;


/*kkkkkkkkkkkkkkkkkk */

export const TextField2 = styled(TextField)`
  width: 250px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FormControl2 = styled(FormControl)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 250px;
`;

export const BirthFiled = styled(TextField)`
  width: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const GenderLabel = styled(FormLabel)`
  color: black;
  font-weight: bold;
`;

export const FormControlLabel2 = styled(FormControlLabel)`
  position: relative;
  left: 20px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #19a25d;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;

export const NavBtnLink2 = styled(LinkR)`
  border-radius: 50px;
  background: #c64756;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: auto 10px auto 10px;
  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;