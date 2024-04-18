import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import './estilos/estilachos.css'
import { ComponenteAppi } from './componentes/ComponenteAppi.jsx'
import { Login } from './componentes/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
)
//<ComponenteAppi />
//<Login/>