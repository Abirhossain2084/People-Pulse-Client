import { FaCalendar, FaHouse, FaInbox, FaSheetPlastic, FaSquarePollVertical, FaTableList, FaUser, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useWorksheet from "../Hooks/useWorksheet";
import useAdmin from "../Hooks/useAdmin";
import useHr from "../Hooks/useHr";

const Dashboard = () => {
    const [worksheet] = useWorksheet();
    const [isAdmin] = useAdmin();
    const [isHr] = useHr();

    console.log('isAdmin:', isAdmin);
    console.log('isHr:', isHr);

    return (
        <div className="flex">
            {/* sidebar of dashboard */}



            <div className="  w-64 min-h-screen bg-[#B0926A] text-black glass shadow-black shadow-xl ">

                <div>
                    <img 
                    className="h-56"
                    src={'https://i.ibb.co/48W0S6j/P-modern-abstract-logo-design-P-logo-P-letter-logo-template-removebg-preview.png'} alt="" />
               <h2 className="text-center mb-10 text-2xl font-bold">Dashboard</h2>
               <div className="divider "></div>
                </div>

                <div>
                    <ul>
                        {isAdmin ? (
                            // ::::: Admin site ::::::::
                            <>
                                <li className="flex gap-2 p-2">
                                    <FaHouse className="text-2xl" />
                                    <NavLink to='/dashboard/adminhome'>Admin Home</NavLink>
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
                                <li className="flex gap-2 p-2">
                                    <FaUser className="text-2xl" />
                                    <NavLink to='/dashboard/employee-list'>Employee List</NavLink>
                                </li>
                                <li className="flex gap-2 p-2">
                                    <FaSquarePollVertical className="text-2xl" />
                                    <NavLink to='/dashboard/employee-progress'>Employee Progress</NavLink>
                                </li>
                            </>
                        ) : (
                            // ::::::: employee site ::::::::
                            <>
                                <li className="flex gap-2 p-2">
                                    <FaHouse className="text-2xl" />
                                    <NavLink to='/dashboard/userhome'>Employee Home</NavLink>
                                </li>
                                <li className="flex gap-2 p-2">
                                    <FaCalendar className="text-2xl" />
                                    <NavLink to='/dashboard/paymentHistory'>Payment History</NavLink>
                                </li>
                                <li className="flex gap-2 p-2">
                                    <FaSheetPlastic className="text-2xl" />
                                    <NavLink to='/dashboard/worksheet'>Work Sheet</NavLink>
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
                            <FaInbox className="text-2xl" />
                            <NavLink to='/contact'> Contact</NavLink>
                        </li>
                    </ul>
                </div>


            </div>

            {/* dashboard content  */}
            <div className="flex-1 bg-[#E1C78F] p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
