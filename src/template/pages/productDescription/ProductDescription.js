import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./productDescription.css";

const ProductDescription = () => {
  const [product, setProduct] = useState({});
  const { product_id } = useParams();

  const fetchProduct = async () => {
    try {
      const raw = await fetch(`https://dummyjson.com/products/${product_id}`);
      const response = await raw.json();
      setProduct(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="product-description">
        <div className="image-div">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="info-div">
          <h4>{product.title}</h4>
          <p>
            <strong>Price : </strong> ${product.price}
          </p>
          <p>
            <strong>Brand : </strong>
            {product.brand}
          </p>
          <p>
            <strong>Category : </strong>
            <Link to={`/category/${product.category}`}>{product.category}</Link>
          </p>
          <p>{product.description} </p>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
