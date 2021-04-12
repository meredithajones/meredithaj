import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideButton = styled(Link)`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 120px;
  right: 0;
  float: right;
  width: 60px;
  height: 120px;
  font-size: 2.25rem;
  color: #008080;
  /* color: #00008B; */
  border-radius: 15px;
  box-shadow: 0px 0px 3px 4px #ccc;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;

export const SideButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  float: right;
  bottom: 120px;
  right: 0;
  width: 60px;
  height: 120px;
  background: rgb(180, 236, 214);
  font-size: 2.25rem;
  color: #00008B;
  color: #008080;
  padding-top: 17px;
  padding-left: 9px;
  padding-bottom: 17px;
  border-radius: 15px;
  box-shadow: 0px 0px 3px 4px #ccc;
  z-index: 15;
`;
