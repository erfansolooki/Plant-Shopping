import { Link } from "react-router-dom";
import { RiHeart2Fill, RiAddLine } from "react-icons/ri";
import { products } from "../../data/data";
import "./Product.css";
import { Row, Col, Container } from "react-bootstrap";
import { useState, useMemo } from "react";
import Pagination from "../pagination/Pagination";

let PageSize = 8;

const ProductList = () => {
  const [activeLikeButton, setActiveLikeButton] = useState([]);
  console.log(activeLikeButton);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <Container>
        <Row>
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
                    <button className="addToCart position-absolute">
                      <RiAddLine className="addLine" />
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
