import React from "react";
import closeIcon from "./../Assets/img/close-icon.png";

const ModalSubmit = () => {
  return (
    <div className="modalContainer">
      <div className="modalContainer__content">
        <p className="modalContainer__content--txt">Employee Created!</p>
        <div className="modalContainer__content--close">
          <img src={closeIcon} alt="Fermer la modal" />
        </div>
      </div>
    </div>
  );
};

export default ModalSubmit;
