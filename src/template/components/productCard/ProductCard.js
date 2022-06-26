// reusable component
import { useHistory } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ title, productImage, description, product_id }) => {
  const history = useHistory();
  const goToProduct = () => {
    history.push(`/products/${product_id}`);
  };
  return (
    <>
      <div className="product-card" onClick={goToProduct}>
        <h3 className="product-title">{title} </h3>
        <img src={productImage} alt={title} className="product-img" />
        <p className="product-description">{description}</p>
      </div>
    </>
  );
};

export default ProductCard;
