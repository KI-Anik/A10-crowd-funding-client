import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import banner1 from '../../assets/crowdfunding-donations.jpg';
import banner2 from '../../assets/crowdfunding-for-events.jpg';
import banner3 from '../../assets/Crowdfunding-Guide.png';
import { Link, useLoaderData } from 'react-router-dom';
import ExtraTwoSec from '../../ExtraTwoSec';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
    const allData = useLoaderData()
    return (

        <div>
            <section>
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
            </section>

            {/* running campaign section start */}
            <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                {
                    allData.map((data, index) =>
                        new Date(data.date) >= new Date() && // conditional for display only ongoing campaign

                        <div key={data._id} className="card bg-base-100 shadow-md ">
                            <Fade cascade={false} delay={index * 200} triggerOnce={true} direction='up'>
                                <figure className="h-48 w-full overflow-hidden flex items-center justify-center ">
                                    <img
                                        className='h-full w-auto object-cover'
                                        src={data.image}
                                        alt="image" />
                                </figure>
                                <div className="card-body space-y-4">
                                    <h2 className="card-title">
                                        {data.title}
                                        <div className="badge p-3 badge-secondary">
                                            {
                                                new Date(data.date).toDateString() !== new Date().toDateString() ? 'Ongoing' : 'End'
                                            }
                                        </div>
                                    </h2>
                                    <p>{data.description}</p>
                                    <div className="card-actions ">
                                        <div className="badge badge-outline"> {data.type}</div>
                                        <div className="badge badge-outline">Min Amount: ${data.amount}</div>
                                    </div>
                                    <Link to={`/auth/details/${data._id}`} className='btn btn-neutral'>See more</Link>
                                </div>
                            </Fade>
                        </div>

                    )
                }
            </section>
            {/* running campaign section end */}
            <section>
                <ExtraTwoSec></ExtraTwoSec>
            </section>
        </div>
    );
};

export default Home;