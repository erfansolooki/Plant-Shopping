import Container from "react-bootstrap/esm/Container";
import "./SpecialSaleProductList.css";
import { specialSale } from "../../data/data";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { RiHeart2Fill, RiAddLine, RiArrowLeftLine } from "react-icons/ri";
import { useState } from "react";
import { useCart, useCartDispatcher } from "../../Context/CartProvider";
import { checkInCart } from "../../Utils/checkInCart";

const SpecialSaleProductList = () => {
  const [activeLikeButton, setActiveLikeButton] = useState([]);
  const { cart } = useCart();
  const cartDispatch = useCartDispatcher();

  const addProductHandler = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <main className="specialSaleProductList">
      <Container>
        <p className="title pt-4">فروش ویژه</p>
        <Row className="justify-content-center">
          {specialSale.map((product) => (
            <Col xs={12} md={6} lg={4} xxl={3} className="g-4" key={product.id}>
              <div className="w-100 d-flex justify-content-center">
                <section className="productCart mb-4">
                  <section className="d-flex justify-content-center mb-1">
                    <div className="discountPercent text-center text-white">
                      <p className="m-0 mt-1">{product.discount}%</p>
                      <p className="m-0">OFF</p>
                    </div>
                  </section>
                  <section className="text-center">
                    <Link to={`/specialSaleProductsDetail/${product.id}`}>
                      <div class="popover__wrapper">
                        <div class="popover__content">
                          <p class="popover__message mb-0 p-1">
                            برای جزییات بیشتر کلیک کنید
                          </p>
                        </div>
                        <div class="popover__title">
                          <img
                            src={product.image}
                            alt=""
                            className="productImage"
                          />
                        </div>
                      </div>
                    </Link>
                  </section>
                  <section dir="rtl" className="cartFooter position-absolute">
                    <section className="ps-2 productDescription text-white">
                      <RiHeart2Fill
                        onClick={() => setActiveLikeButton(product.id)}
                        className={
                          product.id === activeLikeButton
                            ? "redHeart likedButton"
                            : "likedButton"
                        }
                      />
                      <p className="mt-2">{product.name}</p>
                      <p className="mt-2 mb-0 mainPrice">
                        <del>
                          {" "}
                          <span className="m-0 fw-bold">{product.price}</span>
                        </del>
                      </p>
                      <p className="mb-2">
                        <span className="mb-0 fw-bold">{product.offPrice}</span>
                        <span className="ms-2">تومان</span>
                      </p>
                    </section>
                    <button
                      className="addToCart position-absolute"
                      onClick={() => addProductHandler(product)}
                    >
                      {checkInCart(cart, product) ? (
                        <div className="checkInCart">
                          <Link to="/cart">
                            {" "}
                            <span className="me-1">ادامه خرید</span>
                            <RiArrowLeftLine />
                          </Link>
                        </div>
                      ) : (
                        <RiAddLine className="addLine" />
                      )}
                    </button>
                  </section>
                </section>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default SpecialSaleProductList;
