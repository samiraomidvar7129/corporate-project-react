import React from "react";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules

import { Autoplay } from "swiper/modules";

// Components--------------------------------------------->

import Solutions from "./solutions";
import CounselingBtn from "./counselingBtn";
import Services from './services';
import Banner from "./banner";
import Comments from './comments';
import News from "./news";

// import react-lazy-load-------------------------------->

import {LazyLoadImage} from 'react-lazy-load-image-component';



const Home = () => {
  return (
    <>
      <section className="slider-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3800,
            disableOnInteraction: false,
          }}
          
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="swiperSlide">
            <h1 className="mySwiper-title">استراتژی هایی برای موفقیت پایدار</h1>
            <p className="mySwiper-txt">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <CounselingBtn />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <h1 className="mySwiper-title">تجزیه و تحلیل مالی برای توسعه</h1>
            <p className="mySwiper-txt">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <CounselingBtn />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <h1 className="mySwiper-title">تجزیه و تحلیل مالی برای توسعه</h1>
            <p className="mySwiper-txt">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <CounselingBtn />
          </SwiperSlide>
        </Swiper>
        <div className="slider-imgBox">
          <LazyLoadImage
            src="images/Slider-img/sliderImg.png"
            className="slider-imgBox_img"
            alt="slideImage"
            loading="lazy"
          />
          <LazyLoadImage
            src="images/Shape/shape.png"
            className="slider-imgBox_shape"
            alt="shape"
            loading="lazy"

          />
        </div>
      </section>

      <Solutions />
      <Services/>
      <Banner/>
      <Comments/>
      <News/>

    </>
  );
};
export default Home;
