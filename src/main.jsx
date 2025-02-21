import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Routes/Route.jsx'
import AuthProvider from './Components/Provoider/AuthProvider.jsx/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={Route}/>
    </AuthProvider>
  </React.StrictMode>,
)
