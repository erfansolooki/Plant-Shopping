import { Container } from "react-bootstrap";
import { useCart } from "../../Context/CartProvider";
import { Link } from "react-router-dom";
import "./Checkout.css";

const CheckoutPage = () => {
  const { cart, total } = useCart();
  const originalTotalPrice = cart.length
    ? cart.reduce(
        (prevValue, currValue) =>
          prevValue + currValue.quantity * currValue.price,
        0
      )
    : 0;

  return (
    <main className="checkout py-3">
      <Container>
        <section className="bg-white checkoutContainer" dir="rtl">
          <section className="cartSummary p-2">
            <div className="summaryItem d-flex justify-content-between fw-bold">
              <p>مجموع خرید :</p>
              <p>
                {originalTotalPrice}
                <span className="ms-1">تومان</span>
              </p>
            </div>
            <div className="totalDiscount d-flex justify-content-between fw-bold">
              <p>مجموع تخفیف :</p>
              <p>
                {originalTotalPrice - total}
                <span className="ms-1">تومان</span>
              </p>
            </div>
            <div className="netPrice d-flex justify-content-between fw-bold mt-2">
              <p>قابل پرداخت : </p>
              <p>
                {total}
                <span className="ms-1">تومان</span>
              </p>
            </div>
            {/* <Link to="/checkout">
            <button className="btn primary w-100 my-2">
              ادامه فرآیند خرید
            </button>
          </Link> */}
          </section>
          <section className="address">
            <p className="addressTitle">آدرس</p>
          </section>
        </section>
      </Container>
    </main>
  );
};

export default CheckoutPage;
