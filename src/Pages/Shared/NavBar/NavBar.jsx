import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

import useAdmin from "../../../Hooks/useAdmin";
import useHr from "../../../Hooks/useHr";
import useEmployee from "../../../Hooks/useEmployee";
const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
   
    const [isAdmin] = useAdmin();
    const [isHr]=useHr();
    const [isEmployee]=useEmployee();

    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const NavItems = <>

        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/contactus'><li><a>Contact Us</a></li></Link>

        {
            user ? <Link to='/register'><li><a>Log in/Register</a></li></Link>
                :
                <Link to='/register'><li><a>Register</a></li></Link>

        }



        {
            user && isAdmin && <Link to='/dashboard/adminhome'><li><a>Dashboard</a></li></Link>
        }
        {
            user && isHr && <Link to='/dashboard/hrhome'><li><a>Dashboard</a></li></Link>
        }
        {
            user && isEmployee && <Link to='/dashboard/userhome'><li><a>Dashboard</a></li></Link>
        }


    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-[#3A4D39] bg-opacity-50 font-bold   text-[#FAE7C9]">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm bg-[#3A4D39] dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {
                                NavItems
                            }
                        </ul>
                    </div>
                    <div className="">
                        <img
                            className="h-24 w-full"
                            src="https://i.ibb.co/48W0S6j/P-modern-abstract-logo-design-P-logo-P-letter-logo-template-removebg-preview.png" alt="" />
                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {
                            NavItems
                        }
                    </ul>
                </div>

                <div className="navbar-end gap-2">


                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">

                                {
                                    user?  <img alt="Tailwind CSS Navbar component" src={user.photoURL } /> 
                                   :
                                      user?  <img alt="Tailwind CSS Navbar component" src={user.registred_image } /> 
                                   :
                                    <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/KGXB6pT/download.png" />

                                }
                               
                            </div>
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-[#3A4D39] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            
                            <li><a>Profile</a></li>
                            
                            {
                                user ?


                                    <>
                                        <button onClick={handleLogOut} className="btn btn-ghost bg-[#B0926A]">
                                            <Link to='/login'><li><a>Log out</a></li></Link>
                                        </button>
                                    </>
                                    :
                                    <> 
                                    <button className="btn btn-ghost bg-purple-400 ">
                                            <Link to='/login'><li><a>Log in</a></li></Link>
                                        </button>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;