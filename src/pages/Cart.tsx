import { useSelector } from "react-redux";

import type { RootState } from "../redux/store";
import { Breadcrumbs, CartProduct, Title } from "../components";
import { calcTotalPrice } from "../utils/calcCart";
import { CartOrder } from "../components/CartOrder";

const Cart = () => {
  const {items} = useSelector((state: RootState)=>state.cart)
  const totalPrice = calcTotalPrice(items)
  
  return (
    <>
      <Breadcrumbs />
      <main className="cart_page">
        <div className="container">
          <div className="top">
            <Title
              page={true}
            >
              Корзина
            </Title>
          </div>
          <div className="product_wrap">
            {
              items.length === 0
              ? <b style={{fontSize: '20px', color: '#bb1616'}}>В корзине нет товаров</b>
              : items.map(item=>{
                return <CartProduct 
                  {...item}
                  key={item.productId}
                />
              })
            }
          </div>
          <div className="products_cost">
            <div className="final_amount">
              Сумма: <span>{totalPrice.toLocaleString('de-DE')} руб.</span>
            </div>
          </div>
          <CartOrder
            items={items}
            totalPrice={totalPrice}
          />
        </div>
      </main>
    </>
  );
};

export default Cart;
