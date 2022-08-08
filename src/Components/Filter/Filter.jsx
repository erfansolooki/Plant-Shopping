import { useState } from "react";
import SelectComponent from "../../Common/SelectComponent";
import { useProductsDispatcher } from "../../Context/ProductsProvider";
import "./Filter.css";

const sortOptions = [
  { value: "highest_price", label: "بیشترین قیمت" },
  { value: "lowest_price", label: "کم ترین قیمت" },
];

const suitableFor = [
  { value: "room", label: "اتاق خواب" },
  { value: "office", label: "محل کار" },
  { value: "bathroom", label: "حمام و سرویس بهداشتی" },
  { value: "balcony", label: "بالکن" },
];

const Filter = () => {
  const productsDispatch = useProductsDispatcher();
  const [sort, setSort] = useState(null);
  const [value, setValue] = useState(null);

  const changeHandler = (suitableFor) => {
    productsDispatch({
      type: "SUITABLE_FOR",
      suitableFor,
    });

    productsDispatch({
      type: "SORT",
      sortOptions,
    });
    setValue(suitableFor);
  };

  const sortHandler = (sortOptions) => {
    productsDispatch({
      type: "SORT",
      sortOptions,
    });
    setSort(sortOptions);
  };

  return (
    <>
      <section className="d-flex justify-content-end">
        <SelectComponent
          placeholder={<p className="mb-0">مناسب برای</p>}
          defaultValue={value}
          onchange={changeHandler}
          options={suitableFor}
          className="mx-2"
        />
        <SelectComponent
          placeholder={<p className="mb-0">قیمت</p>}
          defaultValue={sort}
          onchange={sortHandler}
          options={sortOptions}
        />
      </section>
    </>
  );
};

export default Filter;
