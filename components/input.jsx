import React, { Component } from 'react'
import TextField from '@mui/material/TextField';

const Input = (props) => {

    return (
        <div className='flex flex-col gap-1'>
            {/* <TextField /> */}
            <TextField id="email" type="email" value="abc" label="Email" variant="outlined" onChange={(e) => props.handleEmail(e)} onKeyDown={(e) => props.callSubmit(e)} />
        </div>

    )

}

export default Input;