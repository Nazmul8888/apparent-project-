import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/SharedPage/Login/Login';
import AuthProvider from './components/Providers/AuthProvider';
import Apartment from './components/Page/NavBar/Apartment/Apartment';
import SignUp from './components/SharedPage/Login/SignUp/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path:'signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: 'apartment',
        element: <Apartment></Apartment>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
   </AuthProvider>
   
  </React.StrictMode>,
)
