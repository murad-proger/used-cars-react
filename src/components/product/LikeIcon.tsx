import React from 'react'
import { useSelector } from 'react-redux';

import { useAppDispatch } from "../../redux/store";
import { addLikedItem, removeLikedItem } from '../../redux/slices/favourites/slice';
import type { ProductCardProps } from '../../@types/ProductCardProps';
import type { RootState } from '../../redux/store';

type LikeIconProps = {
  product: ProductCardProps
}

export const LikeIcon = ({product}: LikeIconProps) => {
  const dispatch = useAppDispatch();

  const {items} = useSelector((state: RootState)=> state.favourites)
  const liked = items.some(item=>item.productId === product.productId)
  
  localStorage.setItem("favourites", JSON.stringify(items))

  const onLikeIconToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if(liked) {
      dispatch(removeLikedItem(product.productId))
    } else {
      dispatch(addLikedItem(product))
    }
  };

  return ( 
    <span className="liked_icon" onClick={onLikeIconToggle}>
      <img src={liked ? "/img/icons/liked_good2.png" : "/img/icons/seroye_serdce.png"} className="icon2" alt="" />
    </span>
  );
};
