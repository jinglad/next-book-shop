import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../images/icons/Logo.png";
import Link from "next/link";
import { useContext, useState } from "react";
import Image from "next/image";
import { cartContext } from "../pages/_app";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { selectItems } from "./Redux/Slices/basketSlices";


const Header = () => {
  const [admin, setAdmin] = useState(false);
  const [cart, setcart] = useContext(cartContext);
  // const items = useSelector(selectItems);
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div onClick={() => router.push("/")}>
        <MyLogo src={Logo} objectFit="contain" width={300} alt="BookShop" />
      </div>
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
          <MenuLink onClick={() => router.push("/")} className="nav-item active">
            <span className="nav-link">Home</span>
          </MenuLink>
          <MenuLink onClick={() => router.push("/orders")} className="nav-item">
            <span className="nav-link">Admin</span>
          </MenuLink>
          <MenuLink onClick={() => router.push("/orders")} className="nav-item">
            <span className="nav-link">Orders</span>
          </MenuLink>
          <MenuLink className="nav-item">
            <span className="nav-link">Deals</span>
          </MenuLink>
          <li
            onClick={() => router.push("/checkout")}
            className="nav-item"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <span className="nav-link">
              <>
                <ShoppingCartIcon />
                <small
                  style={{ position: "absolute", left: "15px", top: "-2px" }}
                >
                  {cart.length}
                </small>
                Checkout
              </>
            </span>
          </li>
          <li className="nav-item" onClick={() => router.push("/login")}>
            <a className="nav-link log_btn btn btn-primary">Login</a>
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

const MenuLink = styled.li`
  cursor:pointer;
`;

// const LogBtn = styled.a`
//     color:white!important;
//     &:hover {
//         color:white!impot
//     }
// `;
