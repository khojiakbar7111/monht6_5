import React from "react";
import "./modal.css";

export const Modal = ({ children, isOpen, close }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div style={{paddingTop:"80px",}} className="modal">
      <div className="modal_content">
        <br />
        <button onClick={() => close(false)} className="btn1">X</button>
        {children}
      </div>
    </div>
  );
};
