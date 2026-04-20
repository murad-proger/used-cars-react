import React from "react";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useParams } from "react-router";

import { fetchProduct } from "../redux/slices/product/slice";
import {
  Breadcrumbs,
  ProductImages,
  SameProducts,
  Title,
  LikeIcon,
  ProductCartIcon,
  ProductInfo,
  ProductSkeleton,
} from "../components";

const Product: React.FC = () => {
  const items = useSelector((state: RootState) => state.catalog.items);
  const { product, status } = useSelector((state: RootState) => state.product);
  const dispatch = useAppDispatch();
  const linkParams = useParams<{ productId: string }>();
  const productId = Number(linkParams.productId);

  React.useEffect(() => {
  dispatch(fetchProduct({ productId: productId }));
  }, [dispatch, productId])
  

  if (Number.isNaN(productId)) {
    return <div>Некорректный ID товара</div>;
  }

  if (status === "loading") {
    return <ProductSkeleton />;
  }

  if (status === "error") {
    return <div>Ошибка загрузки товара</div>;
  }

  if (!product) {
    return <div>Товар не найден</div>;
  }

  const {
    brand,
    model,
    year,
    mileage,
    displacement,
    engineType,
    transmission,
    drivetrain,
    bodyType,
    color,
    steeringWheel,
    price,
    images,
    description,
  } = product;
  

  const safeItems = Array.isArray(items) ? items : [];
  const sameProducts = safeItems.filter(
    (item) =>
      item.brand === brand &&
      item.productId !== productId
  );

  return (
    <>
      <Breadcrumbs />
      <main className="product_page">
        <div className="container">
          <Title page={true}>
            {brand} {model} {year} {displacement}л.{" "}
            {mileage?.toLocaleString("de-DE") ?? "000"}км.
          </Title>
          <div className="wrapper">
            <span className="inner1">
              <ProductImages images={images} />
              <span className="info1">
                <span className="panel">
                  <span className="top">
                    <span className="price">
                      <span className="actual">{price} руб.</span>
                    </span>
                    <span className="icons">
                      <LikeIcon product={{productId, brand, model, year, mileage, displacement, price, images}}/>
                    </span>
                  </span>
                  <span className="bottom">
                    <button className="buy">
                      В корзину
                      <ProductCartIcon product={{productId, brand, model, year, mileage, displacement, price, images}} />
                    </button>
                  </span>
                </span>
                <ProductInfo />
              </span>
            </span>
            <span className="inner2">
              <span className="info2">
                <p className="title">
                  <span>Характеристики</span>
                </p>
                <span className="characteristics_list">
                  <ul>
                    <li className="сapacity">
                      <span className="name"> Марка </span>
                      <span className="val"> {brand} </span>
                    </li>
                    <li className="сapacity">
                      <span className="name"> Модель </span>
                      <span className="val"> {model} </span>
                    </li>
                    <li className="сapacity">
                      <span className="name"> Год выпуска </span>
                      <span className="val"> {year} </span>
                    </li>
                    <li className="сapacity">
                      <span className="name"> Пробег </span>
                      <span className="val"> {mileage} </span>
                    </li>
                    <li className="сapacity">
                      <span className="name"> Объём двигателя </span>
                      <span className="val"> {displacement}л. </span>
                    </li>
                    <li className="сapacity">
                      <span className="name"> Тип двигателя </span>
                      <span className="val"> {engineType} </span>
                    </li>
                    <li className="сapacity">
                      <span className="name"> Коробка передач </span>
                      <span className="val"> {transmission} </span>
                    </li>
                    <li className="сapacity">
                      <span className="name"> Привод </span>
                      <span className="val"> {drivetrain} </span>
                    </li>
                    <li className="сapacity">
                      <span className="name"> Тип кузова </span>
                      <span className="val"> {bodyType} </span>
                    </li>
                    <li className="сapacity">
                      <span className="name"> Цвет </span>
                      <span className="val"> {color} </span>
                    </li>
                    <li className="сapacity">
                      <span className="name"> Руль </span>
                      <span className="val"> {steeringWheel} </span>
                    </li>
                  </ul>
                </span>
              </span>
              <span className="info3">
                <p className="title">
                  <span>Описание</span>
                </p>
                <p>{description}</p>
                <div className="benefits">
                  <span> Преимущества данного Авто: </span>
                  <ul>
                    <li>Дополнительный запас емкости</li>
                  </ul>
                </div>
              </span>
            </span>
          </div>
          {
            sameProducts.length > 4 ? (
              <div className="same_products">
                <Title>Похожие товары</Title>
                <div className="slider">
                  <SameProducts sameProducts={sameProducts} />
                </div>
              </div>
            ) : ''
          }
        </div>
      </main>
    </>
  );
};

export default Product;