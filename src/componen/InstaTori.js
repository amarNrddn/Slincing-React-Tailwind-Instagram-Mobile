import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import '../index.css'

const InstaTori = ({ profile, name }) => {
    return (
        <div className="">
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    "clickable": true
                }}
                className="mySwiper2"
            >
                <SwiperSlide>

                    <div className="w-[5rem] h-[5rem] flex  rounded-full  bg-[hsla(9,76%,53%,1)] ">
                        <img src={profile} alt="" className="object-cover rounded-full p-1" />
                    </div>
                    <p className="text-center  w-[4.9rem] truncate">{name}</p>
                </SwiperSlide>
            </Swiper >
        </div >
    )
}

export default InstaTori