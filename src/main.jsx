import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router.jsx'
// import AuthProvider from './components/provider/Authprovider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
    position="top-center"
    autoClose={2000}
    closeOnClick={true}
    pauseOnFocusLoss={false}
    ></ToastContainer>
    {/* <AuthProvider> */}
    <RouterProvider router={Router} />
    {/* </AuthProvider> */}
  </StrictMode>,
)
