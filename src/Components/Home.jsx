import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import "../index.css";
const Home = () => {
  return (
    <>
      <div>
        <div>
          <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <img
                  src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="slider1"
                  className="w-full h-[400px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt="slider2"
                  className="w-full h-[400px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt="slider3"
                  className="w-full h-[400px]"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
