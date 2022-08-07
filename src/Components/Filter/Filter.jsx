import { useEffect, useState } from "react";
import SelectComponent from "../../Common/SelectComponent";
import { useProductsDispatcher } from "../../Context/ProductsProvider";
import "./Filter.css";

const sortOptions = [
  { value: "highest_price", label: "بیشترین قیمت" },
  { value: "lowest_price", label: "کم ترین قیمت" },
];

const Filter = () => {
  const productsDispatch = useProductsDispatcher();
  const [sort, setSort] = useState(null);
  const sortHandler = (sortOptions) => {
    productsDispatch({
      type: "SORT",
      sortOptions,
    });
    setSort(sortOptions);
  };

  return (
    <section>
      <SelectComponent
        defaultValue={sort}
        onchange={sortHandler}
        options={sortOptions}
      />
    </section>
  );
};

export default Filter;
