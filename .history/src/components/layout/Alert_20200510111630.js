import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

export const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alert !== null && (
      <div className={`alert alert-${alertContext.type}`}>
        <i className="fas fa-info-circle"> </i> {alertContext.msg}{" "}
      </div>
    )
  );
};

export default Alert;
