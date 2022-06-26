import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./category.css";
const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  const fetchCategories = async () => {
    const response = await fetch(`https://dummyjson.com/products/categories`);
    const result = await response.json();
    setCategories(result);
    setIsLoading(false);
  };

  const goToCategory = (singleCategory) => {
    history.push(`/category/${singleCategory}`);
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      {isLoading && <h1 className="loading-text">Loading.....</h1>}
      <div className="category-list">
        {categories.map((val, index) => {
          return (
            <div
              className="category-tile"
              key={index}
              onClick={() => goToCategory(val)}
            >
              <p>{val}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Category;
