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
import { useState } from 'react';

const Home = () => {
    const allCampaigns = useLoaderData();
    const [showAll, setShowAll] = useState(false);

    // Filter campaigns where the deadline is still ongoing
    const ongoingCampaigns = allCampaigns.filter(campaign => new Date(campaign.date) >= new Date());

    // If showAll is false, only show the first 6 campaigns
    const displayedCampaigns = showAll ? ongoingCampaigns : ongoingCampaigns.slice(0, 6);

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
            <section>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                    {
                        displayedCampaigns.map((data, index) =>
                            <div key={data._id} className="card bg-base-100 shadow-md ">

                                {/* implement animation  */}
                                <Fade cascade={false} delay={index * 200} triggerOnce={true} direction='up'>
                                    <figure className="h-48 w-full overflow-hidden flex items-center justify-center ">
                                        <img
                                            className='h-full w-auto object-cover'
                                            src={data.image}
                                            alt="image" />
                                    </figure>
                                </Fade>
                                <div className="card-body space-y-4">

                                    <Fade direction='left' triggerOnce={true}>
                                        <h2 className="card-title">
                                            {data.title}
                                            <div className="badge p-3 badge-secondary">
                                                ongoing
                                            </div>
                                        </h2>
                                    </Fade>
                                    <p>{data.description}</p>
                                    <div className="card-actions ">
                                        <div className="badge badge-outline"> {data.type}</div>
                                        <div className="badge badge-outline">Min Amount: ${data.amount}</div>
                                    </div>

                                    <Link to={`/auth/details/${data._id}`} className='btn btn-neutral'>See more</Link>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="flex justify-end mt-6">
                    {/* View All Button */}
                    {!showAll && ongoingCampaigns.length > 6 && (
                        <div>
                            <button
                                onClick={() => setShowAll(true)}
                                className="btn btn-accent p-5"
                            >
                                View All
                            </button>

                        </div>
                    )}

                    {/* close btn */}
                    {
                        showAll && <div>
                            <button
                                onClick={() => setShowAll(false)}
                                className="btn btn-accent p-5"
                            >Close</button>
                        </div>
                    }
                </div>
            </section>
                {/* running campaign section end */}

            <section>
                <ExtraTwoSec></ExtraTwoSec>
            </section>
        </div>
    );
};

export default Home;