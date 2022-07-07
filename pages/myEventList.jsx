import React, { Component } from 'react'
import Cards from '../components/cards'
import Edit from '../assets/edit.png'
import Delete from '../assets/trash.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { TokenContext } from '../utils/context'
import { useNavigate } from 'react-router-dom'


const MyEventList = (remove, update) => {

    const navigate = useNavigate()
    const { token } = useContext(TokenContext);
    const [event, setEvent] = useState()
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

        let raw = JSON.stringify({
            "name": "Event Laravel And Codeigniter",
            "address": "Kamp Sayuran RT03 RW 07",
            "date": "31-10-2022",
            "price": 15000,
            "quote": 100,
            "description": "Topik Tentang Golang",
            "link": "URL Zoom",
            "status": "Online",
            "categorys_id": 0,
        });

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
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
                    categorys_id: 0,
                }
                result.data.map((item) => {
                    let temp_structure = { ...structure };
                    temp_structure.name = item.title;
                    temp_structure.address = item.address;
                    temp_structure.date = item.date;
                    temp_structure.price = item.price;
                    temp_structure.quote = item.quote;
                    temp_structure.description = item.description;
                    temp_structure.link = item.link;
                    temp_structure.status = item.status;
                    temp_structure.categorys_id = item.categorys_id;
                    temp.push(temp_structure);
                })
                setEvent(temp)
            })
            .catch(error => console.log('error', error))
            .finally(() => setIsLoading(false));
    }

    const handleDelete = (id) => {
        let myHeaders = new Headers();
        myHeaders.append(`Authorization`, `Bearer ${token}`);

        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://altaproject.online/events/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                alert(result.message)
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    navigate(`/detail/${id}/Not Found`)
                } else {
                    alert(error)
                }
            })
            .finally(() => setLoading(false));
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
                <layout>
                    <div>
                        <h1>My Event List</h1>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>
                                {event.map((item, index) => (
                                    <div className='col-2 border-4 border-gray-100 border-b-gray-400 rounded-xl'>
                                        <image src={props.item.image} alt={props.item.name} />
                                        <h5 classname='font-semibold'>{props.item.title}</h5>
                                        <p>{props.item.date}</p>
                                        <div>
                                            <Edit
                                                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                                                className='edit-icon'
                                            />
                                        </div>
                                        <div>
                                            <Delete
                                                onClick={() => removeTodo(todo.id)}
                                                className='delete-icon'
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </layout>
            )
        }
    }

}

export default MyEventList;
