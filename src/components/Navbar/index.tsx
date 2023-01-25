import { NavLink } from "react-router-dom";
import { Header } from "./styles";

export const Navbar = () => {
  return (
    <Header>
      <NavLink to="/" title="home" style={{ textDecoration: "none", color: "white" }}>
        <span>bisu</span>
      </NavLink>
    </Header>
  );
};
