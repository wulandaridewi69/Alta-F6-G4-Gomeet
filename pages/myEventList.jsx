import React, { Component } from 'react'
import Cards from '../components/cards'
import Edit from '../assets/edit.png'
import Delete from '../assets/trash.png'

const MyEventList = () => {

    // const navigate = useNavigate()
    const { token } = useContext(TokenContext);
    const [event, setEvent] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => { }

    const handleDelete = (id) => { }

    if (token !== "0") {
        if (loading) {
            return (
                <div className='h-screen w-screen flex justify-center items-center'>
                    <div className='h-36 w-36'>{Loading}</div>
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
