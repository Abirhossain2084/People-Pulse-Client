import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCheck, FaCross, FaCrosshairs, FaInfo, FaMoneyBill, FaPaypal, FaPeopleGroup, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const EmployeList = () => {
    const axiosSecure = useAxiosSecure();

    // load user data using tanstack

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }
    })

    const handleVerified = user => {
        axiosSecure.patch(`/users/hr/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now Verified!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    console.log(users);


    const handleDelete = user => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();

                        }
                    })
            }
        });

    }

    return (
        <div className='bg-slate-300 p-10 m-20 rounded-lg text-Black'>

            <div className='flex justify-evenly my-6'>
                <h2 className='text-2xl font-bold'>Total Employee: {users.length}</h2>



            </div>



            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead className='text-black bg-slate-500  font-bold text-lg'  >
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Bank Account</th>
                            <th>Salary</th>
                            <th>Pay</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody className='text-black font-bold'>
                        {
                            users.map((user, i) =>
                                <tr key={user.id}>
                                    <th>
                                        {i = i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td>
                                        <h1 className=' '> {user.name}</h1>

                                    </td>
                                    <td>{user.email}</td>

                                    <th>

                                        {
                                            user.role = 'employee' && user.isVerfied === false ?

                                                (
                                                    <button
                                                        onClick={() => handleVerified(user)}
                                                        className="btn btn-xs bg-red-200">X</button>
                                                )
                                                :
                                                (
                                                    <button className="btn btn-xs bg-green-200 w-16 ">Verified</button>
                                                )

                                        }

                                    </th>



                                    <th>
                                        {/* <button
                                            onClick={() => handleDelete(user)}
                                            className="btn btn-ghost btn-xs bg-yellow-600">

                                            <FaTrash className='text-lg text-red-600' />
                                        </button> */}
                                        <td>{user.bank_acc}</td>

                                    </th>
                                    <td>${user.salary}</td>

                                    <th>
                                        {
                                            user.role === 'employee' || user.isVerified === false ? (
                                                <button className="btn btn-ghost btn-xs bg-yellow-600 disabled">
                                                    PAY
                                                </button>
                                            ) : (
                                                <button className="btn btn-ghost btn-xs bg-green-600">PAY</button>
                                            )
                                        }
                                    </th>


                                    <th>
                                        <Link to={`/dashboard/employee-details/users/${user._id}`}>
                                        <button
                                           
                                           className="btn btn-ghost btn-xs bg-yellow-600">

                                           <FaInfo className='text-lg text-red-600' />
                                       </button>
                                        </Link>
                                       


                                    </th>
                                </tr>)
                        }





                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default EmployeList;