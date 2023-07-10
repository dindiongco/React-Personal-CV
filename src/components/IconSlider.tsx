import awsIcon from '../assets/aws-icon-original.svg'
import jsIcon from '../assets/javascript-icon-original.svg'
import pyIcon from '../assets/python-icon-original.svg'
import javaIcon from '../assets/java-icon-original.svg'
import sqlIcon from '../assets/mysql-icon-original.svg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';

const IconSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }} 
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      loop={true}
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='pl-32'
    >
      <SwiperSlide className='pt-5'><img src={awsIcon} alt="" /></SwiperSlide>
      <SwiperSlide><img src={jsIcon} alt="" /></SwiperSlide>
      <SwiperSlide><img src={pyIcon} alt="" /></SwiperSlide>
      <SwiperSlide><img src={javaIcon} alt="" /></SwiperSlide>
      <SwiperSlide><img src={sqlIcon} alt="" /></SwiperSlide>
    </Swiper>
  );
};

export default IconSlider;