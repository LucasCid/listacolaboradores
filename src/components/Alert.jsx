/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const Alert = ({ mensaje }) => {
  return (
    <div>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Alert;
