import React, { Component } from "react";
import TextField from "@mui/material/TextField";

const Input = (props) => {
  return (
    // <div className="flex flex-col gap-1">
    <>
      <TextField
        id={props.id}
        type={props.type}
        label={props.label}
        variant={props.variant}
        className={props.className}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
};

export default Input;
