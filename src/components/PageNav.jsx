import { NavLink } from "react-router-dom";
import stayles from "./PageNav.module.css";
import Logo from "./Logo";
export default function PageNav() {
  return (
    <nav className={stayles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/Product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={stayles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
