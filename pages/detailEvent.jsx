import React, { Component } from 'react'
import Button from '../components/button'
import { TokenContext } from '../context'
import { useNavigate, useParams } from 'react-router-dom'

const DetailEvent = () => {

    const {token} = useContext(TokenContext)

    return (
        <layout>
            <div>
                <h1>Detail Event</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <image />
                        <map />
                    </div>
                    <div className='col-6'>
                        <div>
                            <h4>{props.title}</h4>
                        </div>
                        <div>
                            <h5>Description</h5>
                            <p>{props.description}</p>
                        </div>
                        <div>
                            <h5>Status</h5>
                            <p>{props.status}</p>
                        </div>
                        <div>
                            <h5>Category</h5>
                            <p>{props.category}</p>
                        </div>
                        <div>
                            <h5>Date</h5>
                            <p>{props.date}</p>
                        </div>
                        <div>
                            <h5>Price</h5>
                            <p>{props.price}</p>
                        </div>
                        <div>
                            <h5>Quota</h5>
                            <p>{props.quota}</p>
                        </div>
                    </div>
                </div>
            </div>
        </layout>

    )

}
export default DetailEvent;