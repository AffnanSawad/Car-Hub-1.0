import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import CarDetails from './Components/CarDetails/CarDetails';
import Booking_List from './Components/Booking_list/Booking_List';
import Statistics from './Components/Statistics/Statistics';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// import Add_To_My_Cart from './Components/AddToMy_Cartt.jsx/Add_To_My_Cart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,


    children: [

  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  },
  {
    path: '/details/:id',

    loader: ()=> fetch(`./data.json`),
    element: <PrivateRoute> <CarDetails></CarDetails> </PrivateRoute>
  },
  {
    path: '/booking',

    loader: ()=> fetch('/data.json'),
    element:<PrivateRoute>   <Booking_List></Booking_List> </PrivateRoute>
  },
  {
    path: '/stat',

 
    element: <PrivateRoute>  <Statistics></Statistics> </PrivateRoute>
  },
  {
    path: '/login',

 
    element: <LogIn></LogIn>
  },
  {
    path: '/signup',

 
    element: <SignUp></SignUp>
  }

  

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
 <AuthProvider>
 
 <RouterProvider router={router} />

 </AuthProvider>


  </React.StrictMode>,
)
