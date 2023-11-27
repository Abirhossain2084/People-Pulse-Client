import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaPeopleGroup, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    // load user data using tanstack

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }


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
                <h2 className='text-2xl font-bold'>Total Users: {users.length}</h2>



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
                            <th>Role</th>
                            <th>Action</th>
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
                                        { user.role === 'admin' ? 
                                        'Admin'
                                        : 
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-ghost btn-xs bg-yellow-600">

                                            <FaPeopleGroup className='text-lg text-red-600' />
                                        </button>}
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className="btn btn-ghost btn-xs bg-yellow-600">

                                            <FaTrash className='text-lg text-red-600' />
                                        </button>
                                    </th>
                                </tr>)
                        }





                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;