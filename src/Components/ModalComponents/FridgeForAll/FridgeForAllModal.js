import React from "react";
import { FaTimes } from "react-icons/fa";

export const FridgeForAllModal = (props) => {
  return (
    <div className={"modal-wrapper"}>
      <div className={"modal-header"}></div>
      <p></p>
      <span classname="close-modal-btn">X</span>
      <div classname="modal-body">
        <h4>Modal Header</h4>
        <p>Lorum Ipsom</p>
      </div>
      <div className="modal-footer"></div>
    <div className={"modal-backdrop"}/>
    <div className={"modal-box"}></div>
        {props.children}
    </div>
  );
};

export default FridgeForAllModal;
