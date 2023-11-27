import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Main = () => {

    // const location = useLocation();

    // const noHF = location.pathname.includes('login') || location.pathname.includes('register')
   
   
    return (
        <div>
            {/* {noHF || <NavBar></NavBar>} */}
            <NavBar></NavBar>
            <Outlet> </Outlet>
            <Footer></Footer>
            {/* {noHF || <Footer></Footer>} */}
        </div>
    );
};

export default Main;