import React from 'react'
import { Link } from "react-router-dom";

type MenuItemProps = {
  children: React.ReactNode;
  path: string;
}

export const MenuItem = ({children, path}: MenuItemProps) => {
  return (
    <li className="menu_item">
        <Link to={path}>{children}</Link>
    </li>
  )
}