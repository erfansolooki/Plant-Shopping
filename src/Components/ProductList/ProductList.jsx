import { Link } from "react-router-dom";
import { RiHeartLine, RiAddLine } from "react-icons/ri";
import { products } from "../../data/data";
// import "./Product.css";
import { Row, Col, Container } from "react-bootstrap";

const ProductList = () => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col xs={12} md={6} lg={4} xxl={3} className="g-4">
            <div className="w-100 d-flex justify-content-center">
              <Link to={`/productsDetail/${product.id}`} key={product.id}>
                <section className="productCart">
                  <section className="text-center">
                    <img src={product.image} alt="" className="productImage" />
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
  );
};

export default ProductList;
