import { useSelector } from "react-redux";

import type { RootState } from "../redux/store";
import { ProductCard, Title } from "../components";

const Favourites = () => {
  const {items} = useSelector((state: RootState)=>state.favourites)
  return (
    <main className="favourites-page">
      <section>
        <div className="container">
          <Title page={true}>Избранные</Title>
          <div className="cards">
            {
              items.length > 0 
              ? items.map(item => {
                  return <ProductCard
                    productId={item.productId}
                    brand={item.brand}
                    model={item.model}
                    year={item.year}
                    mileage={item.mileage}
                    displacement={item.displacement}
                    price={item.price}
                    images={item.images}
                    key={item.productId}
                  />
                })
              : (
                <h2>Избранных продуктов нет</h2>
              )
            }
          </div>
        </div>
      </section>
    </main>
  );
};
export default Favourites;
