import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <section className="children">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
