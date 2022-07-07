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
      />
    </>
  );
};

<<<<<<< HEAD
    return (
        <div className='flex flex-col gap-1'>
            <TextField className={props.className} id={props.id} type={props.type} value={props.value} label={props.label} variant={props.outline} onChange={(e) => props.handleEmail(e)}/>
        </div>

    )

}

export default Input;
=======
export default Input;
>>>>>>> 98f2af7f283bc59401ec3689f533cb1fa486e8e4
