import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./template/components/navBar/NavBar";
import Category from "./template/pages/categoryPage/Category";
import SingleCategory from "./template/pages/categoryPage/SingleCategory";
import Home from "./template/pages/homePage/Home";
import ProductDescription from "./template/pages/productDescription/ProductDescription";
import ProductListing from "./template/pages/productListing/ProductListing";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path={["/", "/home"]} exact>
            <Home />
          </Route>
          <Route path={"/category"} exact>
            <Category />
          </Route>
          <Route path={"/category/:uniqueCategory"}>
            <SingleCategory />
          </Route>
          <Route path={"/products"} exact>
            <ProductListing />
          </Route>
          <Route path={"/products/:product_id"} exact>
            <ProductDescription />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
