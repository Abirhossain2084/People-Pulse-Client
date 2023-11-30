import { useContext, useEffect, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';



const Login = () => {

    // const captchaRef = useRef(null);
    // const [disable, setDisable] = useState(true);

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })

    }

    // const handleValidate = (e) => {
    //     const userCaptchaValue = e.target.value;
    //     console.log(userCaptchaValue);

    //     if (validateCaptcha(userCaptchaValue)) {
    //         setDisable(false)

    //     }
    //     else {
    //         setDisable(true)

    //     }

    // }

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])


    return (
        <div className="hero min-h-screen py-20 "
        style={{ backgroundImage: 'url("https://i.ibb.co/nQ3ZT4S/alex-kotliarskyi-QBp-ZGq-EMs-Kg-unsplash.jpg")', backgroundSize: 'cover' }}
        >
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex border bg-gradient-to-r from-indigo-500  to-[#4F6F52]  shadow-2xl rounded-lg ">

                <div className="text-center md:w-1/2 lg:text-left">
                <h1 className='text-4xl text-center my-2 text-white font-bold'>Log in Here</h1>
                    <img src={'https://i.ibb.co/48W0S6j/P-modern-abstract-logo-design-P-logo-P-letter-logo-template-removebg-preview.png'} alt="" />
                    
                </div>

                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-gradient-to-r from-indigo-500  to-[#4F6F52] shadow-2xl">

                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>

                        {/* <div className="form-control space-y-1">
                            <label className="label bg-slate-200 rounded-md  ">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidate} type="text" name="captcha" placeholder="Type the capthca code" className="input input-bordered" required />
                            <div>
                                <button className='btn btn-outline '>Validate</button>
                            </div>
                        </div> */}

                        <div className="form-control mt-6 grid justify-center gap-2">

                            <input
                            
                            // disabled={disable}
                             className="btn  bg-[#B0926A]" type="submit" value='Login' />
                        <SocialLogin></SocialLogin>
                        </div>

                      
                    </form>

                    <p className='text-center my-1 font-bold'>New Here?   <Link className='text-[#E1C78F]' to='/register'>Register here</Link> </p>


                </div>


            </div>
        </div>
    );
};

export default Login;