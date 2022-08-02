import { Link } from "react-router-dom";
import { RiHeart2Fill, RiAddLine, RiArrowLeftLine } from "react-icons/ri";
import "./Product.css";
import { Row, Col, Container } from "react-bootstrap";
import { useState, useMemo } from "react";
import Pagination from "../pagination/Pagination";
import { useCart, useCartDispatcher } from "../../Context/CartProvider";
import { useProducts } from "../../Context/ProductsProvider";
import { checkInCart } from "../../Utils/checkInCart";

let PageSize = 12;

const ProductList = () => {
  const [activeLikeButton, setActiveLikeButton] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const products = useProducts();
  const { cart } = useCart();
  console.log(cart);
  const cartDispatch = useCartDispatcher();

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const addProductHandler = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <>
      <Container>
        <p className="title">گیاهان آپارتمانی</p>
        <Row className="justify-content-center">
          {currentTableData.map((product) => (
            <Col xs={12} md={6} lg={4} xxl={3} className="g-4" key={product.id}>
              <div className="w-100 d-flex justify-content-center">
                <section className="productCart">
                  <section className="text-center">
                    <Link to={`/productsDetail/${product.id}`}>
                      <img
                        src={product.image}
                        alt=""
                        className="productImage"
                      />
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
                      onClick={() => addProductHandler(product)}
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

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={products.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default ProductList;
