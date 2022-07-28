import React, { useState, useMemo } from "react";
import Pagination from "./Pagination";
import { products } from "../data/data";
import { Link } from "react-router-dom";
import { RiHeartLine, RiAddLine } from "react-icons/ri";
import "./Product.css";
import { Row, Col, Container } from "react-bootstrap";

let PageSize = 8;

export default function DataPagination() {
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
            <Col xs={12} md={6} lg={4} xxl={3} className="g-4">
              <div className="w-100 d-flex justify-content-center">
                <Link to={`/productsDetail/${product.id}`} key={product.id}>
                  <section className="productCart">
                    <section className="text-center">
                      <img
                        src={product.image}
                        alt=""
                        className="productImage"
                      />
                    </section>
                    <section dir="rtl" className="cartFooter position-absolute">
                      <section className="ps-2 productDescription">
                        <RiHeartLine />
                        <p className="mt-2">{product.name}</p>
                        <p className="mt-2">
                          {" "}
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
                </Link>
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
}
