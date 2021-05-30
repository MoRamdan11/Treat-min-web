import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";

export const GridContainer = styled(Grid)`
 overflow: hidden;
 max-width:100%;
  margin-top: -50px;
  margin-bottom: 0px;
  min-height: 100%;
  bottom: 0;
  border-bottom: none;
  margin: 0px;
  /*background-color: #222831;*/
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  padding: 10px 30px 50px 30px;
  color: white;
  @media screen and (max-width: 480px) {
    width: 480px;
  }
`;

export const GridLogo = styled(Grid)`
  text-align: center;
  margin-top: 20px;
`;

export const GridCompany = styled(Grid)`
  text-align: center;
`;

export const FooterLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  display: block;
  &:hover {
    color: #00917c;
  }
`;

export const EmergencyLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
  display: block;
  &:hover {
    color: #ff2e63;
  }
`;
export const GridServices = styled(Grid)`
  text-align: center;
`;

export const GridUsefulLinks = styled(Grid)`
  text-align: center;
`;

export const GridContactUs = styled(Grid)`
  text-align: center;
`;

export const GridRight = styled(Grid)``;

export const H3 = styled.h3`
  color: #00917c;
  @media screen and (min-width: 1000px) {
    color: white;
  }
`;
