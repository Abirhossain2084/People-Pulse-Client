import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { MdOutlineRateReview } from "react-icons/md";

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://people-pulse-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subheading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            > </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide

                        key={review.id}
                    >

                        <div className="flex flex-col space-y-4 justify-center items-center p-20">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <div className="">
                                <MdOutlineRateReview className="text-6xl" /> {/* Adjust the size as needed */}
                            </div>
                            <p className="text-center">{review.review}</p>

                            <p className="text-center font-bold text-2xl mt-4 text-[#BB8506]">{review.title}</p>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>


        </section>
    );
};

export default Testimonial;