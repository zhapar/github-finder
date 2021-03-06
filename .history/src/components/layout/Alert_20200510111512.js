import React from "react";
import AlertContext from "../../context/alert/alertContext";

export const Alert = () => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"> </i> {alert.msg}{" "}
      </div>
    )
  );
};

export default Alert;
