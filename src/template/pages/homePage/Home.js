import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import "./home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const pagination = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=10`);
    const result = await response.json();
    setProducts(result.products);
    setIsLoading(false);
  };

  useEffect(() => {
    pagination();
  }, []);

  return (
    <>
      {isLoading && <h1 style={{ textAlign: "center" }}>Loading....</h1>}
      <div className="product-card-list">
        {products.map((val, index) => {
          return (
            <ProductCard
              key={val.title + index}
              title={val.title}
              product_id={val.id}
              productImage={val.thumbnail}
              description={val.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
