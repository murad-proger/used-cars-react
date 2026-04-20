import Slider from "react-slick";

import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { ProductCard} from "../";
import {PrevArrow} from "./PrevArrow"
import {NextArrow} from "./NextArrow"

export function PopularGoods() {
  const {items} = useSelector((state: RootState)=>state.catalog)
  const popularGoods = items.filter(item => item.popular)

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if(popularGoods.length < 5) return null

  return (
    <Slider {...settings}>
      {popularGoods.map(slide => {
        return <ProductCard
          key={slide.productId}
          productId={slide.productId}
          brand={slide.brand}
          model={slide.model}
          year={slide.year}
          mileage={slide.mileage}
          displacement={slide.displacement}
          price={slide.price}
          images={slide.images}
        />
      })}
    </Slider>
  );
}
