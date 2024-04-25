import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Router} from "react-router-dom"
import { Login } from './componentes/Login'
import { ComponenteAppi } from './componentes/ComponenteAppi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='componenteApp' element={<ComponenteAppi/>}/>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
