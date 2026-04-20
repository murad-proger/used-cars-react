import { useAppDispatch } from "../redux/store";
import { removeItem } from "../redux/slices/cart/slice";
import { Counter } from "./Counter";
import type { CartItem } from "../@types/cart";

export const CartProduct = (item: CartItem) => {
  const dispatch = useAppDispatch()
  const {
    productId,
    brand,
    model,
    year,
    mileage,
    displacement,
    price,
    images,
    count
  } = item
  return (
    <div className="product">
      <div className="img">
        <img src={images[0]} alt="" />
      </div>
      <div className="name">{brand} {model} {year} {displacement}л. {mileage}км.</div>
      <Counter
        productId={productId}
        count={count}
      />
      <div className="price">
        <div className="actual">{(count * price).toLocaleString('de-DE')} руб.</div>
      </div>
      <div className="delete" onClick={()=>dispatch(removeItem(productId))}>
        <i></i>
      </div>
    </div>
  );
};
