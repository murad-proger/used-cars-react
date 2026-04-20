import { Link } from "react-router-dom";
import { LikeIcon, ProductCartIcon } from "../";
import type { ProductCardProps } from "../../@types/ProductCardProps";



export const ProductCard = (props: ProductCardProps) => {
  const {
    productId,
    brand,
    model,
    year,
    mileage,
    displacement,
    price,
    images
  } = props;

  return (
    <div className="card">
      <LikeIcon product={props} />
      <ProductCartIcon product={props} />
      <div className="card_img">
        <Link to={`/product/${productId}`}>
          <img src={images[0]} alt="" />
        </Link>
      </div>
      <div className="title">
        <h3 className="title">
          <Link to={`/product/${productId}`}>
            {brand} {model} {year}, {displacement}л., {mileage}км
          </Link>
        </h3>
      </div>
      <div className="price">
        <div className="actual">{price.toLocaleString("de-DE")} руб.</div>
      </div>
    </div>
  );
};
