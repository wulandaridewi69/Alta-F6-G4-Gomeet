import React, { Component } from 'react'
import { MdDelete } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { TokenContext } from '../utils/context'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image';


const MyEvent = () => {

    const { token } = useContext(TokenContext);
    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(true)
    const [dataDetails, setDataDetails] = useState({})
    const [dataImage, setDataImage] = useState([])
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    useEffect(() => {
        fetchDataEvent()
    }, [])

    const fetchDataEvent = () => {
        let myHeaders = new Headers();
        myHeaders.append(`Authorization`, `Bearer ${token}`);
        myHeaders.append(`Content-Type`, `application/json`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://altaproject.online/user/events", requestOptions)
            .then(response => response.json())
            .then(result => {
                let temp = [];
                const structure = {
                    image: "",
                    name: "",
                    address: "",
                    date: "",
                    price: 0,
                    quote: 0,
                    description: "",
                    link: "",
                    status: "",
                    id: 0,
                }
                result.data.map((item) => {
                    let temp_structure = { ...structure };
                    temp_structure.image = item.image;
                    temp_structure.name = item.name;
                    temp_structure.address = item.address;
                    temp_structure.date = item.date;
                    temp_structure.price = item.price;
                    temp_structure.quote = item.quote;
                    temp_structure.description = item.description;
                    temp_structure.link = item.link;
                    temp_structure.status = item.status;
                    temp_structure.id = item.id;
                    temp.push(temp_structure);
                })
                setEvent(temp)
            })
            .catch(error => console.log('error', error))
            .finally(() => setLoading(false));
    }

    const handleDelete = (id) => {
        let myHeaders = new Headers();
        myHeaders.append(`Authorization`, `Bearer ${token}`);

        let raw = "";

        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://altaproject.online/events/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                alert("Successfully deleted event");
                fetchDataEvent()
            })
            .catch((error) => {
                alert("Failed to delete event")
            });
    }

    const handleEdit = (e) => {
        if (token === "0") {
            navigate("/updateEvent");
        }
    };

    if (token !== "0") {
        if (loading) {
            return (
                <div className='h-screen w-screen flex justify-center items-center'>
                    <div className='h-36 w-36 animation-bounce'></div>
                </div>
            )
        } else {
            return (
                <Layout>
                    <div>
                        <h1>My Event List</h1>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>
                                {event.map((item, index) => (
                                    <div className='col-2  rounded-xl w-full h-full pb-20'>
                                        <Image src={item.image} alt={item.name} width={300} height={400} />
                                        <div  className='flex gap-5'>
                                            <div className='bg-orange-600 text-white'>
                                                <Link href={`/updateEvent`}>
                                                    <TiEdit
                                                        className='edit-icon'
                                                        onClick={() => handleEdit()}
                                                    />
                                                </Link>
                                            </div>
                                            <div className='bg-rose-700 text-white'>
                                                <MdDelete
                                                    className='delete-icon'
                                                    onClick={() => handleDelete()}
                                                />
                                            </div>
                                        </div>
                                        <h5 className='font-semibold text-white'>{item.name}</h5>
                                        <p className='text-white'>{item.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </Layout>
            )
        }
    }
};

export default MyEvent;
