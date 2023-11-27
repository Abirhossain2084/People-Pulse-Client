import { Helmet } from "react-helmet-async";
import About from "./About";
import Banner from "./Banner";


import FeaturedItem from "./FeaturedItem";
import Services from "./Services";

import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="my-20 container mx-auto">
        <Services></Services>
        <About></About>


        <FeaturedItem></FeaturedItem>
        <Testimonial></Testimonial>
      </div>

    </div>
  );
};

export default Home;