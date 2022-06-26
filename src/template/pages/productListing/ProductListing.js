import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import "./ProductListing.css";
const ProductListing = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState(0);

  const fetchAllProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    console.log(result);
    setProducts(result.products);
  };

  const searchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
    const result = await response.json();
    setProducts(result.products);
  };

  const pagination = async () => {
    setIsLoading(true);
    const limit = 10;
    const skip = pageNo * limit;
    const response = await fetch(
      `https://dummyjson.com/products?skip=${skip}&limit=10`
    );
    const result = await response.json();
    setProducts(result.products);
    setIsLoading(false);
  };

  const previousPage = () => {
    if (pageNo > 0) setPageNo(pageNo - 1);
  };

  const nextPage = () => {
    if (pageNo < 9) setPageNo(pageNo + 1);
  };
  // useeffect type 2 which is also called as mounted. this will run only once on page load
  //   useEffect(() => {
  //     fetchAllProducts();
  //   }, []);

  //   useEffect(() => {
  //     searchProducts();
  //   }, [search]);

  useEffect(() => {
    pagination();
  }, [pageNo]);
  return (
    <>
      <div className="search-div">
        <label htmlFor="search">Search Products </label>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
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

      <div className="page-number">
        <button onClick={previousPage}>Previous</button>
        <span>{pageNo}</span>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};
export default ProductListing;

/* 
limit = 10
page = 0/1

skip = page*limit = 0
skip = 10
*/
