import React, { useState } from 'react';
import { ComponenteAppi } from './ComponenteAppi';
import {Link, Routes, Route} from "react-router-dom"

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    
  };

  return (
    <>
    <div className='div_log'>
      <h2>Iniciar sesión</h2><br/>
      <form className='form_log'>
        <div>
          <label htmlFor="username">Nombre de usuario:</label><br/>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br/>
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label><br/>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
          <button type="button" onClick={handleLogin}>Iniciar sesión</button>
       
      </form>
    </div>

    </>
  )
}