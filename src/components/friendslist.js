import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function Friends() {
    const [friends, setFriends] = useState([])

    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" />
    }

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>FRIENDS LIST</h1>
            {friends.length
                ? friends.map(friend => (
                    <div key={friend.id}>- {friend.name} - {friend.email}</div>
                ))
                : 'Fetching Friends...'
            }
        </div>
    )
}

export default Friends