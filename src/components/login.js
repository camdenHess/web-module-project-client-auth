import  React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const initialCredentials = {
    username: '',
    password: ''
}

function Login() {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState(initialCredentials)

    const onChange = evt => {
        setCredentials({...credentials, [evt.target.name]: evt.target.value})
    }

    const onSubmit = evt => {
        evt.preventDefault()
        axios.post('http://localhost:9000/api/login', credentials)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                navigate('/friends')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={onSubmit}>
                <div>Username:</div>
                <div>
                    <input 
                        type='text'
                        name='username'
                        value={credentials.username}
                        onChange={onChange}
                    />
                </div>
                <div>Password:</div>
                <div>
                    <input
                        type='password'
                        name='password'
                        value={credentials.password}
                        onChange={onChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login