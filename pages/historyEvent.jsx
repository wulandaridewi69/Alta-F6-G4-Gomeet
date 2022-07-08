import React from 'react';
import Image from 'next/image';
import Photo from "../assets/poster.png";
import Layout from '../components/Layout';
import { FaCheckCircle } from 'react-icons/fa';

function historyEvent() {
    return (
        <Layout>
            <div className='w-full lg:mx-0 md:mx-10 mx-5'>
                <h1 className='text-4xl text-white font-bold flex justify-center my-10'>History</h1>
                <div>
                    <hr className='h-1 bg-black/5' />
                </div>
                <h1 className='text-xl text-white font-bold lg:ml-28 md:ml-0 ml-0 flex lg:justify-start md:justify-center justify-center my-7'>CODING EVENT</h1>

                <div className='flex lg:flex-row md:flex-col flex-col lg:justify-around md:justify-center justify-center items-center mb-14'>

                    <div>
                        <Image src={Photo} />
                    </div>

                    <div className='flex flex-col text-white space-y-4'>
                        <div>
                            <h1 className='font-bold text-lg'>Status</h1>
                            <h2>Offline</h2>
                        </div>
                        <div>
                            <h1 className='font-bold text-lg'>Date and Location</h1>
                            <h2>Hotel Santika Premiere Semarang, 15 - 09 - 2022
                                at 8 PM</h2>
                        </div>
                        <div>
                            <h1 className='font-bold text-lg'>Harga</h1>
                            <h2>Rp. 100.000</h2>
                        </div>
                        <div>
                            <h1 className='font-bold text-lg'>Qty</h1>
                            <h2>1</h2>
                        </div>
                    </div>

                    <div className='text-4xl text-green-400 flex justify-center items-center'>
                        <FaCheckCircle />
                    </div>
                </div>
                <div>
                    <hr className='h-1 bg-black/5' />
                </div>
                <h1 className='text-xl text-white font-bold lg:ml-28 md:ml-0 ml-0 flex lg:justify-start md:justify-center justify-center my-7'>CODING EVENT</h1>

                <div className='flex lg:flex-row md:flex-col flex-col lg:justify-around md:justify-center justify-center items-center mb-14'>

                    <div>
                        <Image src={Photo} />
                    </div>

                    <div className='flex flex-col text-white space-y-4'>
                        <div>
                            <h1 className='font-bold text-lg'>Status</h1>
                            <h2>Offline</h2>
                        </div>
                        <div>
                            <h1 className='font-bold text-lg'>Date and Location</h1>
                            <h2>Hotel Santika Premiere Semarang, 15 - 09 - 2022
                                at 8 PM</h2>
                        </div>
                        <div>
                            <h1 className='font-bold text-lg'>Harga</h1>
                            <h2>Rp. 100.000</h2>
                        </div>
                        <div>
                            <h1 className='font-bold text-lg'>Qty</h1>
                            <h2>1</h2>
                        </div>
                    </div>

                    <div className='text-4xl text-green-400 flex justify-center items-center'>
                        <FaCheckCircle />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default historyEvent