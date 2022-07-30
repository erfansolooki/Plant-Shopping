import { useState } from "react";
import SelectComponent from "../../Common/SelectComponent";
import { useProductsDispatcher } from "../../Context/ProductsProvider";

const sortOptions = [
  { value: "highest", label: "hight to low price" },
  { value: "lowest", label: "low to hight price" },
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
