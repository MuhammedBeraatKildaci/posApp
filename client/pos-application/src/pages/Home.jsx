import Categories from "../components/Categories";
import Products from "../components/Products";
import CartTotals from "../components/CartTotals";

const Home = () => {
  return (
    <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
      <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
        <Categories />
      </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
          <Products />
        </div>
        <div className="cart-wrapper min-w-[300px] border">
          <CartTotals />
        </div>
      </div>
  );
};

export default Home;
