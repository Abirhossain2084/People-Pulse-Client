
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <Carousel>

            <div className="h-[700px]">
                <img src={'https://i.ibb.co/2vxdLV9/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg'} />
                <p className="legend">Legend 1</p>
            </div>
            <div className="h-[700px]" >
                <img

                    src={'https://i.ibb.co/XxjxH2g/tim-mossholder-GOMhu-Cj-O9w-unsplash.jpg'} />
                <p className="legend">Legend 1</p>
            </div>
            <div className="h-[800px]">
                <img src={'https://i.ibb.co/Sxnnchm/pexels-fauxels-3184292.jpg'} />
                <p className="legend">Legend 1</p>
            </div>
            <div className="h-[700px]">
                <img src={'https://i.ibb.co/xhJ0ZF1/pexels-rdne-stock-project-7580812.jpg'} />
                <p className="legend">Legend 1</p>
            </div>




        </Carousel>
    );
};

export default Banner;