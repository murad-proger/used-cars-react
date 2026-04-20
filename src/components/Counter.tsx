import { useAppDispatch } from "../redux/store";
import { minusItem, plusItem } from "../redux/slices/cart/slice";

interface CounterProps {
  productId: number;
  count: number;
}

export const Counter = ({productId, count}: CounterProps) => {
  const dispatch = useAppDispatch()

  const onMinusClick = () => {
    dispatch(minusItem(productId))
  }

  const onPlusClick = () => {
    dispatch(plusItem(productId))
  }

  return (
    <span className="count">
      <span className={`count change minus ${count <= 1 ? "min" : ''}`} onClick={onMinusClick}>
        <span>-</span>
      </span>
      <input type="text" name="product_count" value={count} disabled />
      <span className="change plus" onClick={onPlusClick}>
        <span>+</span>
      </span>
    </span>
  );
};
