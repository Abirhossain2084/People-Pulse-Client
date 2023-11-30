
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <Carousel>

            <div className="h-[700px]">
                <img src={'https://i.ibb.co/2vxdLV9/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg'} />
                
            </div>
            <div className="h-[700px]" >
                <img

                    src={'https://i.ibb.co/XxjxH2g/tim-mossholder-GOMhu-Cj-O9w-unsplash.jpg'} />
                
            </div>
            <div className="h-[700px]">
                <img src={'https://i.ibb.co/nQ3ZT4S/alex-kotliarskyi-QBp-ZGq-EMs-Kg-unsplash.jpg'} />
              
            </div>
            <div className="h-[700px]">
                <img src={'https://i.ibb.co/xhJ0ZF1/pexels-rdne-stock-project-7580812.jpg'} />
                
            </div>




        </Carousel>
    );
};

export default Banner;