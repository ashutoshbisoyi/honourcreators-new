import React from 'react';
import TestimonialCards from '../../TestimonialCard';
import TestimonialData from '../../../data/testimonialdata';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import useWindowDimensions from '../../useWindowDimensions';
const Testimonial = () => {
  const { height, width } = useWindowDimensions();

  SwiperCore.use([Autoplay]);

  return (
    <>
      <section className='container row gy-4 mx-auto testimonial d-flex justify-content-center'>
        <h3 className='text-center'>
          What Our <span>Coustomers</span> Says
        </h3>
        <hr className='mb-2' />
        <Swiper
          spaceBetween={50}
          slidesPerView={width < 600 ? 1 : 3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className='swiper'
        >
          {TestimonialData.filter((value) => value.comment !== '').map(
            (value, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialCards
                    comment={value.comment}
                    imgsrc={value.imgsrc}
                    name={value.name}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </section>
    </>
  );
};
export default Testimonial;
