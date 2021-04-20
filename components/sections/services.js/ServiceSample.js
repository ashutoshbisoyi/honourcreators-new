import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import useWindowDimensions from '../../useWindowDimensions';
import Image from 'next/image';

const ServiceSample = (props) => {
  const { height, width } = useWindowDimensions();
  SwiperCore.use([Autoplay]);

  return (
    <>
      <section className='container mx-auto service-sample'>
        <h3 className='serviceheader text-center'>
          HonourCreator's <span>{props.servicename} Sample</span>
        </h3>
        <hr className='mb-5' />
        <Swiper
          spaceBetween={50}
          slidesPerView={width < 600 ? 1 : 3}
          onSlideChange={() => console.log('slide change')}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className='swiper'
        >
          {props.data.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <Image
                    src={`/servicesample/${props.keyname}/${value.imgsrc}.jpg`}
                    alt={value.h4}
                    height={250}
                    width={400}
                  />
                  <h4 className='mt-2'>{value.h4}</h4>
                  <p>{value.p}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};
export default ServiceSample;
