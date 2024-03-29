// import React from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// STYLES
import './index.css'
// CMPONENTS
import Layout from './components/Layout'
import Index from '../pages/Index'
// CONTEXT
import { PeliculasProvider } from "../src/context/PeliculasProvider";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PeliculasProvider>
      <RouterProvider router={router} />
    </PeliculasProvider>
  </React.StrictMode>
)
