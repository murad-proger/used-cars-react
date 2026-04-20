import { useSelector } from "react-redux";

import type { RootState } from "../redux/store";
import { Title, Breadcrumbs, ProductCard } from "../components";

const Orders = () => {
  const {orders} = useSelector((state: RootState)=>state.orders)

  if(orders.length < 1) {
    return (
      <main className="orders-page">
        <Breadcrumbs />
        <section>
          <div className="container">
            <Title page={true}>Orders</Title>
            Вы ещё ничего не заказали
          </div>
        </section>
      </main>
    )
  }

  const content = orders
  .map((order)=>{
    return (
      <div className="orderCard" key={order.id}>
        <h3>Заказ №: {order.id}</h3>
        <ul>
          <li>
            Имя:
            <b>{order.name}</b>
          </li>
          <li>
            Фамилия:
            <b>{order.lastname}</b>
          </li>
          <li>
            Телефон: 
            <b>{order.phone}</b>
          </li>
          <li>
            e-mail:
            <b>{order.email}</b>
          </li>
          <li>
            Оплата:
            <b>{order.payment}</b>
          </li>
          <li>
            Доставка:
            <b>
              {
                order.delivery === 'dillers'
                ? <dd>Через диллеров {order.deliveryVariant}</dd>
                : <dd>{order.delivery}</dd>
              }
            </b>
            </li>
        </ul>
        <div className="cards">
          {order.items.map(item=>{
            const card = <ProductCard
              productId={item.productId}
              brand={item.brand}
              model={item.model}
              year={item.year}
              mileage={item.mileage}
              displacement={item.displacement}
              price={item.price}
              images={item.images}
              count={item.count}
              key={item.productId}
            />

            return (
              item.count && item.count > 1
              ? (
                <div className="cardWrapper" key={item.productId}>
                  {card}
                  <div className="orderCount">
                    <b> * {item.count} шт.</b>
                  </div>
                </div>
              )
              : (card)
            )}
          )}
        </div>
      </div>
    )
  })

  return (
    <main className="orders-page">
      <Breadcrumbs />
      <section>
        <div className="container">
          <Title page={true}>Orders</Title>
          {content}
          <div className="totalPrice">
            <b>Итого:</b> 
            {orders.reduce((sum, order) => sum + order.orderPrice, 0).toLocaleString('de-DE')} руб.
          </div>
        </div>
      </section>
    </main>
  );
};
export default Orders;
