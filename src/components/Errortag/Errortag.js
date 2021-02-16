import React from "react";
import "./Errortag.css";
const ErrortagComponent = (props) => {
  const { message } = props;
  return <span className="errorMessage">{message}</span>;
};

export const Errortag = ErrortagComponent;
