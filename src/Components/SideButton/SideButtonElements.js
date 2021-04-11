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
  background: rgb(180, 236, 214);
  font-size: 2.25rem;
  border-radius: 15px;
  box-shadow: 0px 0px 3px 4px #ccc;
  color: rgb(0 0 0 / 45%);

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
  border-radius: 15px;
  box-shadow: 0px 0px 3px 4px #ccc;
  color: rgb(0 0 0 / 45%);
  z-index: 15;
`;
