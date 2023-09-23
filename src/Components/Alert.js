import React from "react";

const Alert = (props) => {
  return (
    <div style={{height:'30px'}}>
    {props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
      <strong>{props.alert.message}</strong>
    </div>}
    </div>
  );
};

export default Alert;
