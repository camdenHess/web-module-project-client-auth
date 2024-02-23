import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

let id = 0

const createId = () => {
    id++
    return id
}

const initialFriendInfo = {
    id: '',
    name: '',
    age: '',
    email: '',
}

function Add() {
    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" />
    }

    const [friendInfo, setFriendInfo] = useState(initialFriendInfo)

    const onChange = evt => {
        setFriendInfo({...friendInfo, [evt.target.name]: evt.target.value})
    }

    const onSubmit = evt => {
        evt.preventDefault()
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', {...friendInfo, id: createId()}, {headers: {authorization: token}})
            .then(res => {
                setFriendInfo(initialFriendInfo)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>ADD FRIEND</h1>
            <form onSubmit={onSubmit}>
                <div>Friend Name:</div>
                <div>
                    <input 
                        type='text'
                        name='name'
                        value={friendInfo.name}
                        onChange={onChange}
                    />
                </div>
                <div>Age:</div>
                <div>
                    <input 
                        type='number'
                        name='age'
                        value={friendInfo.age}
                        onChange={onChange}
                    />
                </div>
                <div>Email:</div>
                <div>
                    <input
                        type='email'
                        name='email'
                        value={friendInfo.email}
                        onChange={onChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Add