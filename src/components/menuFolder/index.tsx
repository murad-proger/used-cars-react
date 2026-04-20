import React from "react";

import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <ul className="menu">
      <MenuItem path={'/favourites'}>Избранные</MenuItem>
      <MenuItem path={'/catalog'}>Каталог</MenuItem>
      <MenuItem path={'/orders'}>Мои заказы</MenuItem>
      <MenuItem path={'/cart'}>Корзина</MenuItem>
    </ul>
  );
};
