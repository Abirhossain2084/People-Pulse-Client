
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Services = () => {
    return (
        <>
      <section>
        <SectionTitle 
        subheading={'---Find your service---'}
          heading={'Our Services '}
        > </SectionTitle>
        
      <Swiper
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='' src={'https://i.ibb.co/t8wV9hD/priscilla-du-preez-Njirpln-Vra8-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-gray-300 text-center -mt-20'>Recruitment and Staffing</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/0CSjmNV/agefis-qh-mar1-Tzo8-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-gray-300 text-center -mt-20'>Human Resources (HR) Administration</p>

          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/FJ6h2Sq/jason-goodman-m2-TU2gfq-Se-E-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-gray-300 text-center -mt-20'>Employee Training and Development</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/1TybFBS/charlesdeluvio-r-RWi-VQz-Lm7k-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-gray-300 text-center -mt-20'>Performance Managemen</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/5c29FDg/marissa-grootes-N9u-Or-BICcj-Y-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-gray-300 text-center -mt-20'>Workforce Planning</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/FJ6h2Sq/jason-goodman-m2-TU2gfq-Se-E-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-gray-300 text-center -mt-20'>Employee Engagement</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/0CSjmNV/agefis-qh-mar1-Tzo8-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-gray-300 text-center -mt-20'>HR Technology Solutions</p>
          </SwiperSlide>
          
        </Swiper>
      </section>
      </>
    );
};

export default Services;