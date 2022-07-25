// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "react-bootstrap/Image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import firstImage from "../../data/Pictures/Group 337.png";
import secondImage from "../../data/Pictures/Group 341.jpg";
import thirdImage from "../../data/Pictures/Group 350.png";
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="d-lg-flex d-block">
            <section className="sliderImage">
              <Image src={firstImage} alt="" fluid className="w-75" />
            </section>
            <section
              className="SliderDetail ps-xxl-0 d-lg-flex flex-column justify-content-center text-start d-none"
              dir="rtl"
            >
              <h2 className="mb-3">بونسای پاچیرا</h2>
              <p className="description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد .
              </p>
              <p className="price">989/000 هزارتومان</p>
              <button className="CTAButton d-flex flex-row justify-content-center align-items-center">
                <p className="m-0">افزودن به سبد خرید</p>
              </button>
            </section>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="d-lg-flex d-block">
            <section className="sliderImage">
              <Image src={secondImage} alt="" fluid className="w-75" />
            </section>
            <section
              className="SliderDetail ps-xxl-0 d-lg-flex flex-column justify-content-center text-start d-none"
              dir="rtl"
            >
              <h2 className="mb-3">سانسوریا کراواتی</h2>
              <p className="description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد .
              </p>
              <p className="price">369/000 هزارتومان</p>
              <button className="CTAButton d-flex flex-row justify-content-center align-items-center">
                <p className="m-0">افزودن به سبد خرید</p>
              </button>
            </section>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="d-lg-flex d-block">
            <section className="sliderImage">
              <Image src={thirdImage} alt="" fluid className="w-75" />
            </section>
            <section
              className="SliderDetail ps-xxl-0 d-lg-flex flex-column justify-content-center text-start d-none"
              dir="rtl"
            >
              <h2 className="mb-3">انجیری تخت</h2>
              <p className="description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد .
              </p>
              <p className="price">399/000 هزارتومان</p>
              <button className="CTAButton d-flex flex-row justify-content-center align-items-center">
                <p className="m-0">افزودن به سبد خرید</p>
              </button>
            </section>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
