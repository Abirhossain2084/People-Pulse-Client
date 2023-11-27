
import useCart from '../../../../Hooks/useCart';
import { FaTrash } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {


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

                axiosSecure.delete(`/carts/${id}`)
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
                <h2 className='text-2xl font-bold'>Total Items: {cart.length}</h2>
                <h2 className='text-2xl font-bold'>Total Price:$ {totalPrice} </h2>
                <h2>
                    { cart.length? <Link to='/dashboard/payment'>
                    <button  className='btn bg-orange-400 rounded w-16 h-10'>Pay</button>
                    </Link>
                    :
                    <button disabled className='btn bg-orange-400 rounded w-16 h-10'>Pay</button>
                    }
                    
                </h2>

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
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-black font-bold'>
                        {
                            cart.map((item, i) =>
                                <tr key={item.id}>
                                    <th>
                                        {i = i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td>
                                        <h1 className=' '> {item.name}</h1>

                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
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

export default Cart;