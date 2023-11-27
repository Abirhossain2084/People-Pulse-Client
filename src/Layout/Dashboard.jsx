import {  FaCalendar, FaCartShopping,  FaHouse, FaInbox, FaList,  FaTableList, FaUser, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import useHr from "../Hooks/useHr";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isHr] = useHr();

    console.log('isAdmin:', isAdmin);
    console.log('isHr:', isHr);

    return (
        <div className="flex">
            {/* sidebar of dashboard */}
            <div className="w-64 min-h-screen bg-yellow-600">
                <ul>
                    {isAdmin ? (
                        // ::::: Admin site ::::::::
                        <>
                            <li className="flex gap-2 p-2">
                                <FaHouse className="text-2xl" />
                                <NavLink to='/dashboard/adminhome'>Admin Home</NavLink>
                            </li>
                            <li className="flex gap-2 p-2">
                                <FaUtensils className="text-2xl" />
                                <NavLink to='/dashboard/additem'>Add Items</NavLink>
                            </li>
                            <li className="flex gap-2 p-2">
                                <FaTableList className="text-2xl" />
                                <NavLink to='/dashboard/manageitem'>Manage Items </NavLink>
                            </li>
                            <li className="flex gap-2 p-2">
                                <FaUser className="text-2xl" />
                                <NavLink to='/dashboard/allusers'>All Users</NavLink>
                            </li>
                        </>
                    ) : isHr ? (
                        // ::::::: HR site ::::::::
                        <>
                            <li className="flex gap-2 p-2">
                                <FaHouse className="text-2xl" />
                                <NavLink to='/dashboard/hrhome'>HR Home</NavLink>
                            </li>
                        </>
                    ) : (
                        // ::::::: employee site ::::::::
                        <>
                            <li className="flex gap-2 p-2">
                                <FaHouse className="text-2xl" />
                                <NavLink to='/dashboard/userhome'>User Home</NavLink>
                            </li>
                            <li className="flex gap-2 p-2">
                                <FaCalendar className="text-2xl" />
                                <NavLink to='/dashboard/paymentHistory'>Payment History</NavLink>
                            </li>
                            <li className="flex gap-2 p-2">
                                <FaCartShopping className="text-2xl" />
                                <NavLink to='/dashboard/cart'>My Cart : <span className="">{cart.length}</span></NavLink>
                            </li>
                        </>
                    )}

                    {/* shared links */}
                    <div className="divider "></div>
                    <li className="flex gap-2 p-2">
                        <FaHouse className="text-2xl" />
                        <NavLink to='/'> Home</NavLink>
                    </li>
                    <li className="flex gap-2 p-2">
                        <FaList className="text-2xl" />
                        <NavLink to='/menu'> Menus</NavLink>
                    </li>
                    <li className="flex gap-2 p-2">
                        <FaInbox className="text-2xl" />
                        <NavLink to='/contact'> Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content  */}
            <div className="flex-1 bg-slate-400 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
