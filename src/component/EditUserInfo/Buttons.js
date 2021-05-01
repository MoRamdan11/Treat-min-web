import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
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
  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;
