

const MenuItem = ({ item }) => {

    const { name, recipe, image, price } = item;
    return (


     
            <div className="flex gap-4 items-center">
                <img 
                style={{borderRadius: '0 200px 200px 200px'}}
                className=" h-16" src={image} alt="" />

                <div>
                    <h1 className="text-lg font-bold">{name}-------</h1>
                    <h1>{recipe}</h1>
                </div>
                <p>${price}</p>

               
            </div>

           
    );
};

export default MenuItem;