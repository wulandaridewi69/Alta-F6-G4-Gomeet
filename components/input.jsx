import React, { Component } from 'react'
import TextField from '@mui/material/TextField';

const Input = (props) => {

    return (
        <div className='flex flex-col gap-1'>
            {/* <TextField /> */}
            <TextField
                id={props.id}
                type={props.type}
                value={props.value}
                label={props.label}
                onChange={props.onChange}
            />
        </div>

    )

}

export default Input;