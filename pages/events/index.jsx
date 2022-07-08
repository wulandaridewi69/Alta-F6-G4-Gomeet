import React, { Component } from 'react'
// import Cards from '../../../components/cards'
// import Edit from '../../assets/edit.png'
// import Delete from '../../assets/trash.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { TokenContext } from '../../utils/context'
import Layout from '../../components/Layout'
import Link from 'next/link'


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
        fetchData()
    }, [])

    const fetchData = () => {
        let myHeaders = new Headers();
        myHeaders.append(`Authorization`, `Bearer ${token}`);
        myHeaders.append(`Content-Type`, `application/json`);


        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // body: raw,
            redirect: 'follow'
        };

        fetch("https://altaproject.online/user/events", requestOptions)
            .then(response => response.json())
            .then(result => {
                let temp = [];
                const structure = {
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
            .then(response => response.text())
            .then(result => console.log(result))
            .catch((error) => {
                if (error.response.status === 400) {
                    navigate(`/detail/${id}/Not Found`)
                } else {
                    alert(error)
                }
            });
    }

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
                        {/* <Edit
                            onClick={() =>
                                setEdit({ id: todo.id, value: todo.text })
                            }
                            className="edit-icon"
                        /> */}
                    </div>
                    <Link href={'/events/3'} key={3}>
                        <a> detail</a>
                    </Link>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>
                                {event.map((item, index) => (
                                    <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                                        <img src={item.image} alt={item.name} />
                                        <h5 className='font-semibold'>{item.title}</h5>
                                        <p>{item.date}</p>
                                        {/* <div>
                                            <Edit
                                                onClick={() => setEdit({ id:item.id, value: item.title })}
                                                className='edit-icon'
                                            />
                                        </div>
                                        <div>
                                            <Delete
                                                onClick={() => removeTodo(item.id)}
                                                className='delete-icon'
                                            />
                                        </div> */}
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
