import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../images/icons/Logo.png";
import Link from "next/link";
import { useContext, useState } from "react";
import Image from "next/image";
import { cartContext } from "../pages/_app";

const Header = () => {
  const [admin, setAdmin] = useState(false);
  const [cart, setcart] = useContext(cartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <MyLogo src={Logo} objectFit="contain" width={300} alt="BookShop" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <span className="nav-link">
              <Link href="/">Home</Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link href="/">Admin</Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link href="/">Orders</Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link href="/">Deals</Link>
            </span>
          </li>
          <li className="nav-item" style={{ position: "relative" }}>
            <span className="nav-link">
              <Link href="/">
                <>
                  <ShoppingCartIcon />
                  <small
                    style={{ position: "absolute", left: "15px", top: "-2px" }}
                  >
                    {cart.length}
                  </small>
                  Checkout
                </>
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link log_btn btn btn-primary">Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

// const MenuLink = styled(Link)`
//   color: black !important;
//   text-decoration: none !important;
//   cursor: pointer;
// `;

const MyLogo = styled(Image)`
  cursor: pointer;
`;

// const LogBtn = styled.a`
//     color:white!important;
//     &:hover {
//         color:white!impot
//     }
// `;
