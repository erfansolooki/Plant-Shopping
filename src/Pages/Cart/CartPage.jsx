import { Container, Row } from "react-bootstrap";
import { useCart, useCartDispatcher } from "../../Context/CartProvider";
import { RiAddLine, RiCloseLine, RiSubtractLine } from "react-icons/ri";
import { Col } from "react-bootstrap";
import "./Cart.css";

const CartPage = () => {
  const { cart, total } = useCart();
  console.log(total);
  console.log(cart);
  const cartDispatch = useCartDispatcher();

  const incrementHandler = (product) => {
    cartDispatch({ type: "DECREMENT", payload: product });
  };

  if (!cart.length)
    return (
      <Container>
        <p>محصولی در سبد خرید شما وجود ندارد</p>
      </Container>
    );

  return (
    <Container>
      <p className="title pt-2">سبد خرید</p>
      <Row dir="rtl">
        <Col xs={12} lg={8}>
          {cart.map((product) => (
            <section
              className=" cart py-2 my-2 d-flex justify-content-between"
              key={product.id}
              dir="rtl"
            >
              <div className="d-flex">
                <img src={product.image} alt="" className="py-2" />
                <section className="d-flex align-items-center">
                  <section className="productDetail ms-2">
                    <p className="mb-2">{product.name}</p>
                    <p className="mb-2">
                      سایز
                      <span className="ms-1">{product.size}</span>
                    </p>
                    <p className="mb-2">
                      {product.price}
                      <span className="ms-1">تومان</span>
                    </p>
                  </section>
                </section>
              </div>
              <section className="d-flex flex-column justify-content-evenly align-items-end">
                <RiCloseLine className="closeIcon" />
                <section className="d-flex align-items-center">
                  <RiSubtractLine className="subtractIcon me-2" />
                  {product.quantity}
                  <RiAddLine
                    className="addIcon ms-2"
                    onClick={() => incrementHandler(product)}
                  />
                </section>
              </section>
            </section>
          ))}
        </Col>
        <Col xs={12} lg={4}>
          <section className="cartTotal">
            <CartSummary cart={cart} total={total} />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;

const CartSummary = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce(
        (prevValue, currValue) =>
          prevValue + currValue.quantity * currValue.price,
        0
      )
    : 0;

  return (
    <section className="cartSummary">
      <h3>Cart Summary :</h3>
      <div className="summaryItem">
        <p>Original Total Price : </p>
        <p>{originalTotalPrice} $</p>
      </div>
      <div
        className="summaryItem"
        style={{ borderBottom: "1px solid #ccc", paddingBottom: "8px" }}
      >
        <p>Total Discount : </p>
        <p>{originalTotalPrice - total}</p>
      </div>
      <div className="summaryItem">
        <p>Net Price : </p>
        <p>{total} $</p>
      </div>
      <button
        className="btn primary"
        style={{ marginTop: "16px", width: "100%" }}
      >
        Go to checkout
      </button>
    </section>
  );
};
