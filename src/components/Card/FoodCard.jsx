import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useWorksheet from "../../Hooks/useWorksheet";





const FoodCard = ({ item }) => {

  const {_id, name, recipe, image, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure =useAxiosSecure();

  const[,refetch] = useWorksheet();

  const handleAddCart = () => {

    if (user && user.email) {

      // console.log(user.email, food);

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      }

      axiosSecure.post('/carts',cartItem)
      .then(res =>{
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "items Added to cart",
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      })



    }


    else {
      Swal.fire({
        title: "Please log in first!",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }


  }

  return (


    <div className="">
      <div

        className="card h-[500px]  bg-base-100 shadow-xl ">
        <figure>
          <img
            className="h-64 w-full"
            src={image} alt="Shoes" />

        </figure>
        <p className="absolute right-4 top-4 bg-black text-white p-2 rounded-md">$ {price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions justify-center">
            <button
              onClick={ handleAddCart}
              className="btn btn-primary bg-transparent hover:bg-black text-[#BB8506] border-b-4 border-[#BB8506]">Add to cart</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FoodCard;