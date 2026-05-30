import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
        </div>
      ))}
    </div>
  );
}

export default Home;