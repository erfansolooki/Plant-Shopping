import Header from "../Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <section className="children">{children}</section>
    </main>
  );
};

export default Layout;
