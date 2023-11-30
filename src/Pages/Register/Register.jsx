import { useContext } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

import SocialLogin from '../../components/SocialLogin/SocialLogin';





const Register = () => {

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


    const { createUser, updateuserprofile } = useContext(AuthContext);

    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    // const role = useWatch({ name: 'role' }); // Use the useWatch function to watch the 'role' field
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {

        console.log(data);

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }

        });
        console.log(res.data.data.display_url);

        createUser(data.email, data.password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                updateuserprofile(data.name, data.photourl)
                    .then(() => {
                        console.log('profile info updated');

                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            password: data.password,
                            image: data.photoURL,
                            registred_image: res.data.data.display_url,
                            role: data.role,
                            bank_acc: data.bank_account_no,
                            salary: data.salary,
                            designation: data.designation,
                            isVerfied:false,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('adeddeddddd');
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Created",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })




                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
    }






    return (

        <div className="hero min-h-screen  py-32  "
        style={{ backgroundImage: 'url("https://i.ibb.co/nQ3ZT4S/alex-kotliarskyi-QBp-ZGq-EMs-Kg-unsplash.jpg")', backgroundSize: 'cover' }}
        >
            <Helmet>
                <title>Register</title>
            </Helmet>

            <div className="hero-content flex border bg-gradient-to-r from-indigo-500  to-[#4F6F52] shadow-lg rounded-lg ">



                <div className="   shadow-2xl bg-gradient-to-r from-indigo-500  to-[#4F6F52] " style={{ width: '800px' }}>
                    <h1 className='text-[#B0926A] text-center text-4xl font-bold '>Register here</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">






                        <div className='flex gap-5 '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name")} placeholder="Name" className="input input-bordered" required />
                            </div>
                        </div>




                        <div className='flex gap-5'>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&-*])(?=.*[0-9])(?=.*[a-z])./


                                    })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span>This field is required</span>}
                                {errors.password?.type === 'minLength' && <span>Up to 6 Characters</span>}
                                {errors.password?.type === 'maxLength' && <span>Less Then 20 cahracters</span>}
                                {errors.password?.type === 'pattern' && <span>Password must contain with one special character,one num and one small and capital letter</span>}

                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bank Account No</span>
                                </label>
                                <input type="text" name="bank_account_no" {...register("bank_account_no")} placeholder="Bank Account No" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className='flex gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Salary</span>
                                </label>
                                <input type="text" name="salary" {...register("salary")} placeholder="Salary" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Designation</span>
                                </label>
                                <input type="text" name="designation" {...register("designation")} placeholder="Designation" className="input input-bordered" required />
                            </div>
                        </div>






                        {/* Dropdown for User's Role */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select name="role" {...register("role")} className="select select-bordered" required>
                                <option value="" disabled>Select a role</option>
                                <option value="employee">Employee</option>
                                <option value="hr">HR</option>
                                {/* <option value="admin">Admin</option> */}
                            </select>
                        </div>


                        <div className="form-control w-full my-6 border-2">
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </div>






                        <div className="form-control mt-6 grid justify-center gap-2">

                            <input className="btn bg-[#B0926A]" type="submit" value='Register' />
                            <SocialLogin></SocialLogin>
                        </div>


                    </form>


                    <p className='text-center text-[#B0926A] my-1 font-bold'>New Here?   <Link className='text-[#E1C78F]' to='/login'>Login Now</Link> </p>
                </div>


            </div>
        </div>
    );
};

export default Register;