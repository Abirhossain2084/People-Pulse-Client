import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaInfo } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const EmployeList = () => {
    const axiosSecure = useAxiosSecure();
    const [isPayModalOpen, setIsPayModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    // load user data using tanstack
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleVerified = (user) => {
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

    const handlePay = (user) => {
        setSelectedUser(user);
        setIsPayModalOpen(true);
    };



    const payEmployee = () => {
        // Handle the payment logic here, e.g., send a request to the server

        // Close the pay modal after successful payment
        setIsPayModalOpen(false);

        // Show a success message
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Payment successful for ${selectedUser.name}`,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div className='bg-slate-300 p-10 m-20 rounded-lg text-Black'>
            <div className='flex justify-evenly my-6'>
                <h2 className='text-2xl font-bold'>Total Employee: {users.length}</h2>
            </div>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead className='text-black bg-slate-500  font-bold text-lg'>
                        <tr>
                            <th>#</th>
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
                        {users.map((user, i) => (
                            <tr key={user.id}>
                                <th>{(i = i + 1)}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} alt={`${user.name}'s avatar`} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1 className=' '>{user.name}</h1>
                                </td>
                                <td>{user.email}</td>
                                <th>
                                    {user.role === 'employee' && user.isVerified === false ? (
                                        <button
                                            onClick={() => handleVerified(user)}
                                            className="btn btn-xs bg-red-200"
                                        >
                                            X
                                        </button>
                                    ) : (
                                        <button className="btn btn-xs bg-green-200 w-16 ">
                                            Verified
                                        </button>
                                    )}
                                </th>
                                <th>{user.bank_acc}</th>
                                <td>${user.salary}</td>
                                <th>
                                    <button
                                        onClick={() => handlePay(user)}
                                        className="btn btn-ghost btn-xs bg-green-600"
                                    >
                                        PAY
                                    </button>
                                </th>
                                <th>
                                    <Link to={`/dashboard/employee-details/users/${user._id}`}>
                                        <button
                                            className="btn btn-ghost btn-xs bg-yellow-600">
                                            <FaInfo className='text-lg text-red-600' />
                                        </button>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for Paying */}
            {isPayModalOpen && (
                <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 w-96">
                        <h2 className="text-xl font-bold mb-4">Pay {selectedUser?.name}</h2>
                        <p>Salary: ${selectedUser?.salary}</p>
                        <div className="mb-3">
                            <label htmlFor="month" className="form-label">Month:</label>
                            <input type="number" className="form-control" id="month" value={month} onChange={(e) => setMonth(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="year" className="form-label">Year:</label>
                            <input type="number" className="form-control" id="year" value={year} onChange={(e) => setYear(e.target.value)} required />
                        </div>
                        <button
                            onClick={payEmployee}
                            className="bg-green-500 text-white p-2 rounded"
                        >
                            Pay
                        </button>
                        <button
                            onClick={() => setIsPayModalOpen(false)}
                            className="bg-red-500 text-white p-2 rounded ml-4"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeList;
