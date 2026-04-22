import React from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../redux/store";
import { fetchCatalog } from "../redux/slices/catalog/slice";
import type { RootState } from "../redux/store";

import { Menu, Logo, SearchForm, Hamburger } from "../components";
import { calcItemsCount } from "../utils/calcCart";

export const Header = () => {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  React.useEffect(() => {
    dispatch(
      fetchCatalog({
        price: { min: null, max: null },
        year: { min: null, max: null },
        displacement: { min: null, max: null },
        brand: [],
        bodyType: [],
      })
    );
  }, [dispatch]);

  const { items } = useSelector((state: RootState) => state.cart);
  const cartItems = calcItemsCount(items);

  return (
    <>
      <header className="header">
        <div className="container">
          <Logo />
          <div className="header_panel">
            <SearchForm />
          </div>
          <div className="icons">
            <Link to={"/favourites"} className="save">
              <img src="img/icons/like.png" alt="like-icon" />
            </Link>

            <Link to={"/cart"} className="cart">
              <img src="img/icons/cart.png" alt="cart-icon" />
              {cartItems === 0 ? (
                ""
              ) : (
                <span className="header-cart__count">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>
          <Hamburger isActive={isMenuOpen} onClick={toggleMenu} />
        </div>
      </header>
      <nav
        className={`main_nav mobile_menu ${
          isMenuOpen ? "active" : ""
        }`}
      >
        <div className="container">
          <Menu onClick={() => setIsMenuOpen(false)} />
        </div>
      </nav>
    </>
  );
};