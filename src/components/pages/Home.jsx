import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import banner1 from '../../assets/crowdfunding-donations.jpg';
import banner2 from '../../assets/crowdfunding-for-events.jpg';
import banner3 from '../../assets/Crowdfunding-Guide.png';

const Home = () => {
  return (
    <div>
      <Swiper
        className="swiper-pagination-bullet-active"
        spaceBetween={50}
        slidesPerView={1}
        navigation={true} // Enables left and right arrows
        pagination={{ clickable: true }} // Enables pagination dots
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-swipe
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide><img src={banner1} alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="Banner 2" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="Banner 3" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;