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



            <div className="  w-64 min-h-screen bg-gradient-to-r from-indigo-500  to-[#4F6F52] ... text-white glass shadow-black shadow-xl ">

                <div>
                    <img
                        className="h-56"
                        src={'https://i.ibb.co/48W0S6j/P-modern-abstract-logo-design-P-logo-P-letter-logo-template-removebg-preview.png'} alt="" />
                    <h2 className="text-center mb-10 text-2xl font-bold">Dashboard</h2>
                    <div className="divider "></div>
                </div>


                <ul className="menu menu-dropdown-show p-4">
                    {isAdmin ? (
                        // ::::: Admin site ::::::::
                        <>
                            <li className="flex p-2 ">

                                <NavLink to='/dashboard/adminhome'> <FaHouse className="text-2xl" />Admin Home</NavLink>
                            </li>

                            <li className="flex  p-2">

                                <NavLink to='/dashboard/allusers'> <FaUser className="text-2xl" />All Users</NavLink>
                            </li>
                        </>
                    ) : isHr ? (
                        // ::::::: HR site ::::::::
                        <>
                            <li className="flex gap-2 p-2 ">

                                <NavLink to='/dashboard/hrhome'>
                                    <FaHouse className="text-2xl" />
                                    HR Home</NavLink>
                            </li>
                            <li className="flex p-2">

                                <NavLink to='/dashboard/employee-list'>  <FaUser className="text-2xl" /> Employee List</NavLink>
                            </li>
                            <li className="flex p-2">

                                <NavLink to='/dashboard/employee-progress'>
                                    <FaSquarePollVertical className="text-2xl" />
                                    Employee Progress</NavLink>
                            </li>
                        </>
                    ) : (
                        // ::::::: employee site ::::::::
                        <>
                            <li className="flex p-2">
                                
                                <NavLink to='/dashboard/userhome'><FaHouse className="text-2xl" />Employee Home</NavLink>
                            </li>
                            <li className="flex p-2">
                                
                                <NavLink to='/dashboard/paymentHistory'> <FaCalendar className="text-2xl" />Payment History</NavLink>
                            </li>
                            <li className="flex p-2">
                                <FaSheetPlastic className="text-2xl" />
                                <NavLink to='/dashboard/worksheet'> <FaSheetPlastic className="text-2xl" />Work Sheet</NavLink>
                            </li>
                        </>
                    )}

                    {/* shared links */}
                    <div className="divider "></div>

                    <li className="flex p-2">
                       
                        <NavLink to='/'> <FaHouse className="text-2xl" /> Home</NavLink>
                    </li>
                    <li className="flex p-2">
                     
                        <NavLink to='/contact'>   <FaInbox className="text-2xl" /> Contact</NavLink>
                    </li>
                </ul>



            </div>

            {/* dashboard content  */}
            <div className="flex-1 bg-gradient-to-r from-[#6B240C]  to-[#994D1C] ... glass p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
