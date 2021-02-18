import React from "react";

const Alert = (props) => {
  const { formErrors } = props;

  return (
    <div>
      <p style={{ color: "red" }}>{formErrors}</p>
    </div>
  );
};

export default Alert;
