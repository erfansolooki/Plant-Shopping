import { useProducts } from "../../Context/ProductsProvider";
import { RiHeart2Fill, RiAddLine, RiArrowLeftLine } from "react-icons/ri";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import { useCart, useCartDispatcher } from "../../Context/CartProvider";
import { checkInCart } from "../../Utils/checkInCart";
import { Link } from "react-router-dom";
import Filter from "../../Components/Filter/Filter";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsPage = () => {
  const [activeLikeButton, setActiveLikeButton] = useState([]);
  const products = useProducts();
  const { cart } = useCart();
  const cartDispatch = useCartDispatcher();

  const addProductHandler = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} به سبد خرید شما اضافه شد`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Container className="pb-3">
        <ToastContainer />
        <Filter />
        <p className="title">گیاهان آپارتمانی</p>
        <Row className="">
          {products.map((product) => (
            <Col xs={12} md={6} lg={4} xxl={3} className="g-4" key={product.id}>
              <div className="w-100 d-flex justify-content-center">
                <section className="productCart">
                  <section className="text-center">
                    <Link to={`/productsDetail/${product.id}`}>
                      <div className="popover__wrapper">
                        <div className="popover__content">
                          <p className="popover__message mb-0 p-1">
                            برای جزییات بیشتر کلیک کنید
                          </p>
                        </div>
                        <div className="popover__title">
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
                    <section className="ps-2 productDescription">
                      <RiHeart2Fill
                        onClick={() => setActiveLikeButton(product.id)}
                        className={
                          product.id === activeLikeButton
                            ? "redHeart likedButton"
                            : "likedButton"
                        }
                      />
                      <p className="mt-2">{product.name}</p>
                      <p className="mt-2">
                        <span className="mt-2 mb-0 fw-bold">
                          {product.price}
                        </span>
                        <span className="ms-1 fw-bold">تومان</span>
                      </p>
                    </section>
                    <button
                      className="addToCart position-absolute"
                      onClick={
                        checkInCart(cart, product)
                          ? null
                          : () => addProductHandler(product)
                      }
                    >
                      {checkInCart(cart, product) ? (
                        <div className="checkInCart">
                          <Link to="/cart">
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
    </>
  );
};

export default ProductsPage;
