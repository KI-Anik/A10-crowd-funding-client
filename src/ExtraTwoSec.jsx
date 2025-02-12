// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const ExtraTwoSec = () => {
    return (
        <div className='text-center '>

            <h2 className="text-3xl text-sky-600 font-bold  my-14">We couldn&apos;t have done it without the donors like you</h2>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=" p-8 pb-10 bg-white shadow-xl space-y-7">
                        <p>Being a Crowd Fund donor is an honor and privilege for me. When you make a donation, you give hope and happiness to children who need it the most. This is what motivates me to continue donating to Crowd Fund.</p>
                        <h4 className="font-semibold"> - Avishekh, a Crowd Fund Donor.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" p-8 pb-10 bg-white shadow-xl space-y-7">
                        <p>I know that my donations will get to the right people and assist them in their trouble. It makes me feel that I have done something special for those in need. I also believe Crowd Fund to be a worthy organisation and one which will use the money efficiently where it is most needed.</p>


                        <h4 className="font-semibold"> - Gashubije, a Crowd Fund Donor.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" p-8 pb-10 bg-white shadow-xl space-y-7">
                        <p>It seemed to me, after working with various other organizations, that Crowd Fund is the most focused on children&apos;s needs and the most able. I feel I am able to make a difference no matter how big the task is with an organisation that never gives up!</p>

                        <h4 className="font-semibold"> - Mainus, a Crowd Fund Donor.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" p-8 pb-10 bg-white shadow-xl space-y-7">
                        <p>I was once a victim of a crisis. The experience was tough. The man who accommodated us treated us nicely. I know there are a lot of people out there who need help daily. To me, it doesn&apos;t matter whether you have all or not. With the little you have; you can put a smile on someone else&apos;s face.</p>

                        <h4 className="font-semibold"> - George, a Crowd Fund Donor.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" p-8 pb-10 bg-white shadow-xl space-y-7">
                        <p>I know that my donations will get to the right people and assist them in their trouble. It makes me feel that I have done something special for those in need. I also believe Crowd Fund to be a worthy organisation and one which will use the money efficiently where it is most needed.</p>

                        <h4 className="font-semibold"> - washington, a Crowd Fund Donor.</h4>
                    </div>
                </SwiperSlide>

            </Swiper>

            <Link to={'/allcamp'} className='btn bg-orange-400 hover:text-green-600 text-white text-xl my-8 font-bold'>Donate Now</Link>


            {/* LAST SECTION start */}
            <section className='space-y-6 bg-slate-300 p-12 text-center'>
                <h2 className="text-5xl text-sky-600 font-bold  my-14">Frequently Asked Questions</h2>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is Crowd Fund</div>
                    <div className="collapse-content">
                        <p>
                            Crowdfunding is a way to raise money from a group of people, or &rdquo;the crowd&rdquo;, for a variety of purposes. It can be used to finance a business, raise money for a cause, or help someone in need.
                            No long wait periods for receiving funds
                            Taking the fear out of asking for financial help
                            Reaching people outside of your network</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How does crowdfunding work? </div>
                    <div className="collapse-content">
                        <li>Create a campaign on a crowdfunding platform</li>
                        <li>Tell people about your plans and ask for support</li>
                        <li>People contribute money to your campaign</li>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How will i know how my donation is being utilized?</div>
                    <div className="collapse-content">
                        <p>We will be sending you regular updates in the form of e-mails, digital communication, etc., of the progress that has been made and keep you updated about Crowd Fund&apos;s work, in the region, and around the world.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}


export default ExtraTwoSec;