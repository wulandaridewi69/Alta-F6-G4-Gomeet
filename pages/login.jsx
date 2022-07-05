import { useState, useEffect } from 'react';
import Link from 'next/link';
import CustomButton from '../components/CustomButton';
import Input from '../components/Input';

function Login() {


    return (
        <div className='w-full h-screen overflow-auto flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-sky-600'>
            <div className='bg-white/30 w-1/2 h-full flex flex-col items-center justify-evenly'>
                <h1 className='font-bold lg:text-5xl md:text-4xl text-4xl text-white'>GOMEET</h1>
                <div className='text-white text-4xl font-bold'>Login</div>
                <div className='space-y-4'>
                    <Input
                        id='email'
                        type='email'
                        value='abc'
                        label='Email'
                        variant='outlined'
                        onChange={(e) => handleEmail(e)}
                        onKeyDown={(e) => callSubmit(e)}
                    />
                    <div className='flex justify-center'>
                        <Link href={'/'} >
                            <CustomButton
                                id="btn-login"
                                label="Login"
                                value=""
                            />
                        </Link>
                    </div>
                    <h1 className='flex justify-center'>or</h1>
                    <a href="#" className='underline flex justify-center'>Create Account</a>
                </div>
            </div>
        </div>
    )
}

export default Login;