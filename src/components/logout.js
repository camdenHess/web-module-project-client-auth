import React from 'react'
import axios from 'axios'
import { useNavigate, Navigate } from 'react-router-dom'

function Logout() {
    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" />
    }

    const navigate = useNavigate()

    const logoutUser = () => {
        const token = localStorage.getItem('token')

        axios.post('http://localhost:9000/api/logout', {}, {headers: {authorization: token}})
            .then(() => {
                localStorage.removeItem('token')
                navigate('/login')
        })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div>Are you sure you want to logout?</div>
            <button onClick={logoutUser}>Yes, I want to logout</button>
            <button onClick={() => navigate('/friends')}>No, return to friendslist</button>
        </div>
    )
}

export default Logout