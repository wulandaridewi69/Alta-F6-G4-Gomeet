import Button from '../../../components/button'
import { TokenContext } from '../../../context'
import Layout from '../../../components/Layout'
import React, { useState, useContext, useEffect } from 'react'
import { useRef } from 'react';
import { useRouter } from 'next/router';

const DetailEvent = () => {

    const { token } = useContext(TokenContext)

    const router = useRouter()

    const ref = useRef(null);
    const [event, setEvent] = useState({})
    const [wrongInput, setWrongInput] = useState('')
    const [loading, setLoading] = useState(true)
    const [qty, setQty] = useState(1)

    useEffect(() => {
        const { id } = router.query;
        fetchDetailEvent(id)
        console.log('ini hasil dari', router);
    }, [])

    const fetchDetailEvent = (id) => {
        let myHeaders = new Headers();
        myHeaders.append(`Authorization`, `Bearer ${token}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://altaproject.online/events/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setEvent(result.data)
            })
            .catch((error) => {
                if (error.status === 400) {
                    navigate(`/detail/${id}/Not Found`)
                }
            })
            .finally(() => setLoading(false));
    }

    const updateQty = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setQty(e.target.value)
            setWrongInput("")
        }
    }

    const handleJoin = () => {
        setLoading(true)
        // method post
    }

    const addReceipt = () => {
        if (token === '0') {
            alert('Please login to join event')
        } else if (qty > parseInt(event.stock) || qty < 1) {
            setWrongInput('Incorrect input Please check again')
            ref.current.focus()
        } else {
            handleJoin()
            setWrongInput('')
        }
    }

    const updateReceipt = (e) => {
        if (token === '0') {
            navigate('/login')
        }
        console.log("update receipt")
        navigate('/receipt')
    }

    if (loading) {
        return (
            // <Lottie loop autoplay animationData={Loading} />;
            <div className='h-screen w-screen flex justify-center items-center'>
                <div className='h-36 w-36 rounded-full bg-teal-600 animate-bounce'></div>
            </div>
        )
    } else {
        return (
            <Layout>
                <div>
                    <h1>Detail Event</h1>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <image src={event.image === '' ? 'https://storage.googleapis.com//event-gomeet.png' : ''} />
                            <map />
                        </div>
                        <div className='col-6'>
                            <h4>{event.title}</h4>
                            <br />
                            <h5>Description</h5>
                            <br />
                            <h5>Status</h5>
                            <p>{event.status}</p>
                            <br />
                            <h5>Category</h5>
                            <p>{event.category}</p>
                            <br />
                            <h5>Date</h5>
                            <p>{event.date}</p>
                            <br />
                            <h5>Price</h5>
                            <p>{event.price}</p>
                            <br />
                            <h5>Quota</h5>
                            <p>{event.quota}</p>
                        </div>
                    </div>
                </div>
            </Layout >

        )
    }


}
export default DetailEvent;