import image from "../../data/Pictures/Group 116.jpg";
import { RiHeartLine, RiAddLine } from "react-icons/ri";
import "./Product.css";
const ProductList = () => {
  return (
    <section className="productCart position-absolute">
      <section className="text-center">
        <img src={image} alt="" />
      </section>
      <section dir="rtl" className="d-flex justify-content-between">
        <section className="ps-2 text-white">
          <RiHeartLine />
          <p className="mt-2">بنحامین ابلق</p>
          <p className="mt-2">
            {" "}
            <span className="mt-2 mb-0">349/000</span>
            <span className="ms-2">هزارتومان</span>
          </p>
        </section>
        <button className="addToCart">
          <RiAddLine className="addLine" />
        </button>
      </section>
    </section>
  );
};

export default ProductList;
