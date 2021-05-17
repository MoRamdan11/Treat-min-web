import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? "#19A25D" : "#235274")};
  padding: ${({ small }) => (small ? "12px 30px" : "14px 48px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  color: #fff;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#19A25D")};
    color: #235274;
  }
  @media screen and (max-width: 48px) {
  }
`;
