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
import Dashboard from './components/Layout/Dashboard';
import Agreement from './components/SharedPage/Login/Dashboard/Agreement/Agreement';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import AllUsers from './components/Dashboard/AllUsers/AllUsers';
import ManageMembers from './components/SharedPage/Login/Dashboard/ManageMembers';
import AdminRoute from './components/Hooks/AdminRoute';

const queryClient = new QueryClient()
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
  // normal user side
  {
    path:'dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'agreement',
        element: <Agreement></Agreement>
      },
      // admin side
      {
        path:'manageMembers',
        element: <AdminRoute><ManageMembers></ManageMembers></AdminRoute>
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>

      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
   </AuthProvider>
   
  </React.StrictMode>,
)
