import Slider from "react-slick";

import { ProductCard } from "../";
import { PrevArrow } from "./PrevArrow";
import { NextArrow } from "./NextArrow";
import type { ProductProps } from "../../@types/productPropsType";

interface SameProductsProps {
  sameProducts: ProductProps[];
}

export const SameProducts = ({ sameProducts }:SameProductsProps) => {

  if (sameProducts.length === 0) return null;

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    dots: true,
    responsive: [
      { breakpoint: 1264, settings: { slidesToShow: 3 } },
      { breakpoint: 980, settings: { slidesToShow: 2 } },
      { breakpoint: 684, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {sameProducts.map(item => (
        <ProductCard
          key={item.productId}
          productId={item.productId}
          brand={item.brand}
          model={item.model}
          year={item.year}
          mileage={item.mileage}
          displacement={item.displacement}
          price={item.price}
          images={item.images}
        />
      ))}
    </Slider>
  );
};