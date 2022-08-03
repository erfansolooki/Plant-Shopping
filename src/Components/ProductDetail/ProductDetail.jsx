import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductDetail.css";
import { useCart, useCartDispatcher } from "../../Context/CartProvider";
import { checkInCart } from "../../Utils/checkInCart";
import { Link } from "react-router-dom";
import {
  RiArrowLeftLine,
  RiDropLine,
  RiSunLine,
  RiHeart2Line,
  RiGitlabLine,
} from "react-icons/ri";
import { useProducts } from "../../Context/ProductsProvider";

const ProductDetail = () => {
  const products = useProducts();
  console.log(products);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const productId = useParams().id;
  const { cart } = useCart();
  const cartDispatch = useCartDispatcher();

  const showProduct = () => {
    const show = products.filter((item) => item.id == productId);
    setSelectedProduct(show);
  };

  const addProductHandler = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
  };

  useEffect(() => {
    showProduct();
  }, []);

  return (
    <main className="productDetail pb-3">
      <Container>
        {selectedProduct.map((item) => (
          <section dir="rtl">
            <p className="title m-0 pt-2">{item.name}</p>
            <p className="description text-start mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </p>
            <p className="mt-2 price">
              <span className="mt-2 mb-0 fw-bold">{item.price}</span>
              <span className="ms-1 fw-bold">تومان</span>
            </p>
            <button
              className="addToCart"
              onClick={() => addProductHandler(item)}
            >
              {checkInCart(cart, item) ? (
                <div className="checkInCart">
                  <Link to="/cart">
                    <span className="me-1">ادامه خرید</span>
                    <RiArrowLeftLine className="text-white" />
                  </Link>
                </div>
              ) : (
                <p className="text-white mb-0">افزودن به سبد خرید</p>
              )}
            </button>
            <div className="text-center mt-2">
              <img src={item.image} alt="" />
            </div>
          </section>
        ))}
        <section className="productDescription bg-white rounded" dir="rtl">
          <p className="title m-0 pt-2 ps-2">توضیحات و نگهداری</p>
          <Row className="mt-3">
            <Col xs={12} md={6} lg={12}>
              <div className="d-flex">
                <section>
                  <RiDropLine />
                </section>
                <section className="ms-3 mainDescription">
                  <p className="mb-2 descriptionTitle">آبیاری</p>
                  <p>
                    {" "}
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است،
                  </p>
                </section>
              </div>
            </Col>
            <Col xs={12} md={6} lg={12}>
              <div className="d-flex">
                <section>
                  <RiSunLine />
                </section>
                <section className="ms-3 mainDescription">
                  <p className="mb-2 descriptionTitle">نور</p>
                  <p>
                    {" "}
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است،
                  </p>
                </section>
              </div>
            </Col>
            <Col xs={12} md={6} lg={12}>
              <div className="d-flex">
                <section>
                  <RiHeart2Line />
                </section>
                <section className="ms-3 mainDescription">
                  <p className="mb-2 descriptionTitle">مزایا</p>
                  <p>
                    {" "}
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است،
                  </p>
                </section>
              </div>
            </Col>
            <Col xs={12} md={6} lg={12}>
              <div className="d-flex">
                <section>
                  <RiGitlabLine />
                </section>
                <section className="ms-3 mainDescription">
                  <p className="mb-2 descriptionTitle">حیوان دوست</p>
                  <p>
                    {" "}
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است،
                  </p>
                </section>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default ProductDetail;
