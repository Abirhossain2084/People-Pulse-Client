import { useState } from 'react';
import { FaPeopleGroup, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const [isTableView, setIsTableView] = useState(true);

    const toggleView = () => {
        setIsTableView((prev) => !prev);
    };

    const handlemakeHr = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an HR Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };

    const handleDelete = (user) => {
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
                                text: "User has been Fired.",
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }
        });
    };

    console.log(users);
    return (
        <div className='bg-slate-300 p-10 m-20 rounded-lg text-Black'>
            <div className='flex justify-between my-6'>
                <h2 className='text-2xl font-bold'>Total Users: {users.length}</h2>
                <button
                    onClick={toggleView}
                    className='btn btn-sm btn-primary'
                >
                    {isTableView ? 'Switch to Card View' : 'Switch to Table View'}
                </button>
            </div>

            {isTableView ? (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className='text-black bg-slate-500  font-bold text-lg'>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Promotion</th>
                                <th>Fire</th>
                            </tr>
                        </thead>
                        <tbody className='text-black font-bold'>
                            {users.map((user, i) => (
                                <tr key={user.id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image || user.registred_image } alt={user.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h1 className=''>{user.name}</h1>
                                    </td>
                                    <td>{user.email}</td>
                                    <th>
                                        {user.role === 'hr' ? (
                                            <button
                                                className="btn btn-ghost btn-xs bg-green-600"
                                            >
                                                HR
                                            </button>
                                        ) : user.role === 'admin' ? (
                                            <button
                                                className="btn btn-ghost btn-xs bg-blue-400"
                                            >
                                                Admin
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handlemakeHr(user)}
                                                className="btn btn-ghost btn-xs bg-green-600"
                                            >
                                                Make HR
                                            </button>
                                        )}

                                    </th>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className="btn btn-ghost btn-xs bg-red-300"
                                        >
                                            FIRE <FaTrash className='text-lg text-red-600' />
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="card  bg-base-100 shadow-xl image-full">

                            <div className="card-body">

                                <div className="flex items-center gap-3">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.image ||user.registred_image } alt={user.name} />
                                    </div>

                                    <div className="">
                                        <h1 className=''>{user.name}</h1>
                                    </div>
                                </div>

                                <div className="card-actions flex  justify-between items-center mt-4">
                                {user.role === 'hr' ? (
                                            <button
                                                className="btn btn-ghost btn-xs bg-green-600"
                                            >
                                                HR
                                            </button>
                                        ) : user.role === 'admin' ? (
                                            <button
                                                className="btn btn-ghost btn-xs bg-blue-400"
                                            >
                                                Admin
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handlemakeHr(user)}
                                                className="btn btn-ghost btn-xs bg-green-600"
                                            >
                                                Make HR
                                            </button>
                                        )}


                                    <button
                                        onClick={() => handleDelete(user)}
                                        className="btn btn-ghost btn-xs bg-blue-300"
                                    >
                                        FIRE <FaTrash className='text-lg text-red-600' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllUsers;
