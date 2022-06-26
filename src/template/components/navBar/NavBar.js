import { useHistory } from "react-router-dom";
import "./navbar.css";

const navBarItems = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/category",
    display: "Category",
  },
  {
    path: "/products",
    display: "Products",
  },
];

const Navbar = () => {
  const history = useHistory();

  const routeTo = (path) => {
    history.push(path);
  };
  return (
    <>
      <div className="navbar">
        <ul className="nav-list">
          {navBarItems.map((value, index) => {
            return (
              <li className="nav-item" onClick={() => routeTo(value.path)}>
                {value.display}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
