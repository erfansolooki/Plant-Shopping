import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "react-bootstrap/Image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import firstImage from "../../data/Pictures/Group 337.png";
import secondImage from "../../data/Pictures/Group 340.png";
import thirdImage from "../../data/Pictures/Group 341.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="sliderImage">
            <Image src={firstImage} alt="" fluid className="w-75" />
          </section>
          {/* <p>بونسای پاچیرا</p> */}
          <section className="sliderDescription"></section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="sliderImage">
            <Image src={secondImage} alt="" fluid className="w-75" />
          </section>
          {/* <p>فیکوس آفریقایی</p> */}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section className="sliderImage">
            <Image src={thirdImage} alt="" fluid className="w-75" />
          </section>
          {/* <p>فیکوس آفریقایی</p> */}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
