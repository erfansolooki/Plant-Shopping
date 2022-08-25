import { useEffect, useState } from "react";
import SelectComponent from "../../Common/SelectComponent";
import { useProductsDispatcher } from "../../Context/ProductsProvider";
import "./Filter.css";

const Filter = () => {
  const [active, setActive] = useState(null);
  const dispatcher = useProductsDispatcher();

  useEffect(() => {
    setActive("4");
    dispatcher({
      type: "SORT_BY",
      payload: "4",
    });
  }, []);

  const activeButtonHandler = (event) => {
    const buttonId = event.target.id;
    setActive(buttonId);
    dispatcher({
      type: "SORT_BY",
      payload: active,
    });
  };

  return (
    <section dir="rtl" className="sortButtons pt-3">
      <button
        key={4}
        className={active === "4" ? "sortActiveButton" : undefined}
        id={"4"}
        onClick={activeButtonHandler}
      >
        جدیدترین
      </button>
      <button
        key={1}
        className={active === "1" ? "sortActiveButton" : undefined}
        id={"1"}
        onClick={activeButtonHandler}
      >
        بیشترین قیمت
      </button>
      {/* <span className="mt-2"> */}
      <button
        key={2}
        className={active === "2" ? "sortActiveButton" : undefined}
        id={"2"}
        onClick={activeButtonHandler}
      >
        کم ترین قیمت
      </button>
      <button
        key={3}
        className={active === "3" ? "sortActiveButton" : undefined}
        id={"3"}
        onClick={activeButtonHandler}
      >
        پروفروش ترین
      </button>
      {/* </span> */}
    </section>
  );
};

export default Filter;
