import SectionTitle from "../../components/SectionTitle/SectionTitle";


const FeaturedItem = () => {
    return (
        <section
        className="bg-fixed"
        style={{ backgroundImage: `url(${'https://i.ibb.co/YbSQCyw/jason-goodman-Oalh2-Moj-Uuk-unsplash.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
              <SectionTitle
                subheading={'---Check it out---'}
                heading={'Our Best Service'}
            > </SectionTitle>

            <div className="md:flex justify-center items-center gap-4 p-16   ">
                <div>
                    <img 
                    className="rounded-lg"
                    src={'https://i.ibb.co/YbSQCyw/jason-goodman-Oalh2-Moj-Uuk-unsplash.jpg'} alt="" />
                </div>

                <div className="text-white">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.

                    </p>

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary bg-transparent hover:bg-black text-[#BB8506] border-b-4 border-[#BB8506]">See Details</button>
                      </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedItem;