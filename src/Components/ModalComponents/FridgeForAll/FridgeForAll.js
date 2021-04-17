import React from "react";
// import { Img } from '../../../Images/FFA.png';

const FridgeForAllModal = (props) => {
  return (
    <div className={"modal-wrapper"}>
        <div className={"modal-backdrop"}/>
      <div className={"modal-box"}></div>
        {props.children}
    </div>
  );
};

export default FridgeForAllModal;
