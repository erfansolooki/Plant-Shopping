import { useProducts } from "../../Context/ProductsProvider";
import { useCartDispatcher } from "../../Context/CartProvider";
import { Link } from "react-router-dom";
import "./Slider.css";
import { RiArrowLeftLine } from "react-icons/ri";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "react-bootstrap/Image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Slider = () => {
  const products = useProducts();

  return (
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
      {products.slice(0, 3).map((product) => (
        <SwiperSlide key={product.id}>
          <section className="d-lg-flex d-block">
            <section className="sliderImage">
              <Image src={product.sliderImage} alt="" fluid className="w-75" />
            </section>
            <section
              className="SliderDetail ps-xxl-0 d-lg-flex flex-column justify-content-center text-start d-none"
              dir="rtl"
            >
              <h2 className="mb-3">{product.name}</h2>
              <p className="description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد .
              </p>
              <p className="price">
                {product.price}
                <span className="ms-2">هزارتومان</span>
              </p>
              <Link to={`/productsDetail/${product.id}`}>
                <button className="CTAButton d-flex flex-row justify-content-center align-items-center">
                  <p className="m-0">خرید</p>
                  <span className="ms-2">
                    <RiArrowLeftLine />
                  </span>
                </button>
              </Link>
            </section>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
