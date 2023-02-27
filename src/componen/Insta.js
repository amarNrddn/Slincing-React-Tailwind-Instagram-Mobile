import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpg'
import profile4 from '../assets/profile4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import InstaTori from './InstaTori';
import Navbar from './Nvabar';
import Conten from './Conten';

const Insta = () => {
    const instaToris = [
        {
            profile: profile1,
            name: 'Wiwit hesti solehah'
        },
        {
            profile: profile2,
            name: 'Wiwit'
        },
        {
            profile: profile3,
            name: 'Wiwit'
        },
        {
            profile: profile4,
            name: 'Wiwit'
        },
        {
            profile: profile2,
            name: 'Wiwit'
        },
        {
            profile: profile1,
            name: 'Wiwit'
        },
        {
            profile: profile1,
            name: 'Wiwit'
        },
        {
            profile: profile1,
            name: 'Wiwit'
        },
    ]

    return (
        <div className=''>
            <Navbar />
            <div className="w-ful  ">          
                <div className="flex  w-full">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        pagination={{
                            "clickable": false
                        }} className="mySwiper">
                        {instaToris.map((instaTori) => (
                            <SwiperSlide>
                                <div className=''>
                                    <InstaTori profile={instaTori.profile} name={instaTori.name} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="mb-10">
                <Conten />
            </div>
            <br></br>
        </div>
    )
}

export default Insta