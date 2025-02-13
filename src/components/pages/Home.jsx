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
        <div className=''>
            <div className='text-center space-y-3'>
                <h1 className='text-3xl font-semibold'>Together, We Can Make a Difference</h1>
                <p className='text-xl'>Join our community of compassionate individuals working together to create real change. Whether you’re raising funds <br /> for a cause or contributing to one, every action makes an impact. Start a campaign or donate today and <br /> be part of something bigger—help us bring hope and support to those who need it most.</p>
            </div>
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
            <section className='my-18 space-y-10 '>
                <div className='space-y-5 text-center'>
                    <h1 className='text-3xl font-semibold text-green-600'>Running Campaign</h1>
                    <p className='text-xl'>In our Running Campaigns section, you can explore all the active and ongoing campaigns. These campaigns focus on various social, educational, health, and developmental projects, all aiming to bring positive change. By donating, you can contribute to these causes and be a part of making a difference. Our goal is to work together for the betterment of society, and with your support, we can achieve this vision. Join us in creating a lasting impact through your generous contributions.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                    {/* campaigns cards */}
                    {
                        displayedCampaigns.map((data, index) =>
                            <div key={data._id} className="card bg-base-100 shadow-xl">

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