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
        <div className="hero min-h-screen py-20 ">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex border bg-slate-200 shadow-lg rounded-lg ">

                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={loginImg} alt="" />
                </div>

                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">

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
                             className="btn btn-primary" type="submit" value='Login' />
                        <SocialLogin></SocialLogin>
                        </div>

                      
                    </form>

                    <p className='text-center my-1 font-bold'>New Here?   <Link className='text-orange-400' to='/register'>Register here</Link> </p>


                </div>


            </div>
        </div>
    );
};

export default Login;