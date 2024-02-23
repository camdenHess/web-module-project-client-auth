import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Login from './components/login'
import Friends from './components/friendslist'

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
      </ul>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='friends' element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
