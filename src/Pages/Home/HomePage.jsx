import ProductList from "../../Components/ProductList/ProductList";
import Sliders from "../../Components/Slider/Sliders";
import DataPagination from "../../pagination/DataPagination";
const HomePage = () => {
  return (
    <section>
      <Sliders />
      {/* <ProductList /> */}
      <DataPagination />
    </section>
  );
};

export default HomePage;
