import React from 'react'
import { useSelector } from 'react-redux';

import { useAppDispatch } from "../../redux/store";
import { addItem, removeItem } from '../../redux/slices/cart/slice';
import type { ProductCardProps } from '../../@types/ProductCardProps';
import type { RootState } from '../../redux/store';

type ProductCartIconProps = {
  product: ProductCardProps
}

export const ProductCartIcon = ({product}: ProductCartIconProps) => {
    const dispatch = useAppDispatch();

    const {items} = useSelector((state: RootState)=> state.cart)
    const added = items.some(item=>item.productId === product.productId)

    localStorage.setItem("cart", JSON.stringify(items))
    
    const onProductCartIconToggle = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if(added) {
        dispatch(removeItem(product.productId))
      } else {
        dispatch(addItem(product))
      }
    };

  return (
      <div className="cart_icon" onClick={onProductCartIconToggle}>
        <img src={added ? "img/icons/cart_icon2.png" : "img/icons/cart_icon.png"} className="icon2" alt="" />
      </div>
  );
};
