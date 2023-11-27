import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Order from "../Pages/OrderPage/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/UserPage/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AdminPage/AllUsers";
import AddItems from "../Pages/Dashboard/AdminPage/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/AdminPage/ManageItems";
import UpdateItem from "../Pages/Dashboard/AdminPage/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminPage/AdminHome";
import UserHome from "../Pages/Dashboard/UserPage/UserHome";
import HrHome from "../Pages/Dashboard/HRpage/HrHome";
import HrRoute from "./HrRoute";
import EmployeeRoute from "./EmployeeRoute";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
           
            {
                path:'/order',
                element:<Order></Order>
            },
            {
                path:'order/:category',
                element:<Order></Order>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'secret',
                element:<PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
           

            // HR Routes


            {
                path:'hrhome',
                element:<HrRoute><HrHome></HrHome></HrRoute>,
            },
            
          
            // admin routes

            
            {
                path:'adminhome',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>,
            },
            {
                path:'allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path:'additem',
                element:<AdminRoute><AddItems></AddItems></AdminRoute>,
            },
            {
                path:'manageitem',
                element:<AdminRoute><ManageItems></ManageItems></AdminRoute>,
            },
            {
                path:'updateitem/:id',
                element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },

             //user routes
             {
                path:'userhome',
                element:<EmployeeRoute><UserHome></UserHome></EmployeeRoute>,
            },
            {
                path:'cart',
                element:<Cart></Cart>,
            },
            {
                path:'payment',
                element:<Payment></Payment>,
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>,
            },



        ]
    },

]);