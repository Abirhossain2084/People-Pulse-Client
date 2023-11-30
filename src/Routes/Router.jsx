import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";


import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

import Dashboard from "../Layout/Dashboard";

import AllUsers from "../Pages/Dashboard/AdminPage/AllUsers";
import WorkSheet from "../Pages/Dashboard/UserPage/Cart/WorkSheet";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminPage/AdminHome";
import UserHome from "../Pages/Dashboard/UserPage/UserHome";
import HrHome from "../Pages/Dashboard/HRpage/HrHome";
import HrRoute from "./HrRoute";
import EmployeeRoute from "./EmployeeRoute";
import EmployeList from "../Pages/Dashboard/HRpage/EmployeList";

import EmployeeDetails from "../Pages/Dashboard/HRpage/EmployeeDetails";
import EmployeeProgress from "../Pages/Dashboard/HRpage/EmployeeProgress";
import ContactUsPage from "../Pages/Contactus/ContactUsPage ";





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
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'contactus',
                element:<ContactUsPage></ContactUsPage>
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
            {
                path:'employee-list',
                element:<HrRoute><EmployeList></EmployeList></HrRoute>,
            },
            {
                path:'employee-details/users/:id',
                element:<HrRoute><EmployeeDetails></EmployeeDetails></HrRoute>,
            },
            {
                path:'employee-progress',
                element:<HrRoute><EmployeeProgress></EmployeeProgress></HrRoute>,
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
           

             //Employee routes
             {
                path:'userhome',
                element:<EmployeeRoute><UserHome></UserHome></EmployeeRoute>,
            },
             {
                path:'worksheet',
                element:<EmployeeRoute><WorkSheet></WorkSheet></EmployeeRoute>,
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