import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService.js";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      const products = data;
      setProducts(products);
    });
  }, []);

  return (
    <div className="products-wrapper grid lg:grid-cols-4 grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
          <div className="product-img">
            <img
              src={product.image}
              alt=""
              className="h-28 object-cover w-full border-b"
            />
          </div>
          <div className="product-info flex flex-col p-3">
            <span className="font-bold">{product.title}</span>
            <span className="text-green-600 font-bold">{product.price}₺</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
