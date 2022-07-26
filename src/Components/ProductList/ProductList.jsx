import { Link } from "react-router-dom";
import { RiHeartLine, RiAddLine } from "react-icons/ri";
import { products } from "../../data/data";
import "./Product.css";
import { Row, Col, Container } from "react-bootstrap";

const ProductList = () => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col xl={3}>
            <Link to={`/productsDetail/${product.id}`} key={product.id}>
              <section className="productCart">
                <section className="text-center">
                  <img src={product.image} alt="" />
                </section>
                <section dir="rtl" className="d-flex justify-content-between">
                  <section className="ps-2">
                    <RiHeartLine />
                    <p className="mt-2">{product.name}</p>
                    <p className="mt-2">
                      {" "}
                      <span className="mt-2 mb-0">{product.price}</span>
                      <span className="ms-2">هزارتومان</span>
                    </p>
                  </section>
                  <button className="addToCart">
                    <RiAddLine className="addLine" />
                  </button>
                </section>
              </section>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
