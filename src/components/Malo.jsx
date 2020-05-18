import React, { Component } from "react";

import './styles/PageError.css';

function Malo(props) {
  return <div className="PageError">{props.error.message}</div>;
}
export default Malo;