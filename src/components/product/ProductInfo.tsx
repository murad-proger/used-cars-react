import React from "react";

export const ProductInfo = () => {
  return (
    <>
      <span className="info">
        <span className="title">Доставка</span>
        <span className="content">
          <p>Возможность доставки следующими образами:</p>
          <p>Магазин: г. Калуга, ул. Московская 326</p>
          <p>
            Диллеры: г. Санкт-Петербург, ул. Московская 326, магазин “Клаксон”
          </p>
        </span>
      </span>
      <span className="info">
        <span className="title">Оплата</span>
        <span className="content">
          <p>Возможность оплаты следующими образами:</p>
          <p>
            Наличная, Картой онлайн, Google Pay, Оплата через Masterpass,
            Безналичными для юридических лиц, Безналичными для физических лиц,
            PrivatPay
          </p>
        </span>
      </span>
    </>
  );
};
