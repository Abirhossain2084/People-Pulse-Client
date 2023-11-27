import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const {googleSignin} =useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogle =()=>{

        googleSignin()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                image: result.user?.photoURL
                
            }
            
            axiosPublic.post('/users', userInfo)
                .then(res => {
                    console.log(res.data);
                       
                       
                        navigate('/');
                })
        })

    }

    return (
        <div>
            <button
            onClick={handleGoogle}
            className="btn text-orange-600">
                <FaGoogle></FaGoogle>
                Login With Google
            </button>
        </div>
    );
};

export default SocialLogin;