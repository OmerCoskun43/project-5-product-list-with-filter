import { NavLink, useNavigate } from "react-router-dom";
import navStyle from "./navbar.module.scss";

const Navbar = () => {
  const navigation = useNavigate();
  return (
    <div className={navStyle.cont}>
      <h1 type="button" onClick={() => navigation("/")}>
        {" "}
        Product List
      </h1>
      <div className={navStyle.nav}>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "aqua" : "blue",
              background: isActive ? "blue" : "aqua",
            };
          }}
          className={navStyle.nvl}
          to="/"
        >
          {" "}
          ALL{" "}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "aqua" : "blue",
              background: isActive ? "blue" : "aqua",
            };
          }}
          className={navStyle.nvl}
          to="electronics"
        >
          {" "}
          ELECTRONICS{" "}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "aqua" : "blue",
              background: isActive ? "blue" : "aqua",
            };
          }}
          className={navStyle.nvl}
          to="jewelery"
        >
          {" "}
          JEWELERY{" "}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "aqua" : "blue",
              background: isActive ? "blue" : "aqua",
            };
          }}
          className={navStyle.nvl}
          to="men"
        >
          {" "}
          MEN'S CLOTHING{" "}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "aqua" : "blue",
              background: isActive ? "blue" : "aqua",
            };
          }}
          className={navStyle.nvl}
          to="women"
        >
          {" "}
          WOMEN'S CLOTHING
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
