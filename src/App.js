import React from 'react';
import './App.css';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Login from './components/login'
import Friends from './components/friendslist'
import Add from './components/addfriend'
import Logout from './components/logout'

function App() {

  return (
    <div>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/friends'>Friends</Link>
        </li>
        <li>
          <Link to='/friends/add'>Add Friends</Link>
        </li>
        <li>
          <Link to='logout'>Logout</Link>
        </li>
      </ul>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='friends' element={<Friends />} />
        <Route path='friends/add' element={<Add />} />
        <Route path='logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
