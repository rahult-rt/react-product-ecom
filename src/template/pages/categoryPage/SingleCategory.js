import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./singleCategory.css";
import ProductCard from "../../components/productCard/ProductCard";

const SingleCategory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { uniqueCategory } = useParams();

  const fetchCategory = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${uniqueCategory}`
      );
      const result = await response.json();
      setProducts(result.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      {isLoading && <h1 style={{ textAlign: "center" }}>Loading....</h1>}
      <div className="product-card-list">
        {products.map((val, index) => {
          return (
            <ProductCard
              key={val.title + index}
              product_id={val.id}
              title={val.title}
              productImage={val.thumbnail}
              description={val.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default SingleCategory;
