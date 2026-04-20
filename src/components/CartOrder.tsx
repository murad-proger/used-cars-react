import React from "react";

import { useAppDispatch } from "../redux/store";
import { setOrder } from "../redux/slices/orders/slice";
import { cleanCart } from "../redux/slices/cart/slice";
import type { CartItem } from "../@types/cart";
import { Title } from "./Title";

type CartOrderProps = {
  items: CartItem[]
  totalPrice: number
}

export const CartOrder = ({items, totalPrice}: CartOrderProps) => {
  const dispatch = useAppDispatch()

  const [delivery, setDelivery] = React.useState<string | null>(null)
  const [deliveryError, setDeliveryError] = React.useState('')
  const [deliveryVariant, setDeliveryVariant] = React.useState<string | null>(null)
  const [payment, setPayment] = React.useState<string | null>(null)
  const [paymentError, setPaymentError] = React.useState('')
  const [isSendOrderModalOpened, setIsSendOrderModalOpened] = React.useState(false)
  const [isInnerOpened, setIsInnerOpened] = React.useState(true)
  const [isModalInnerOpened, setIsModalInnerOpened] = React.useState(false)
  const [isDeliveryListOpened, setIsDeliveryListOpened] = React.useState(false)
  const [orderForm, setOrderForm] = React.useState({
    name: {
      val: '',
      errorText: ''
    },
    lastname: {
      val: '',
      errorText: ''
    },
    phone: {
      val: '',
      errorText: ''
    },
    email: {
      val: '',
      errorText: ''
    }
  })

  const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    setOrderForm(prev => ({
      ...prev,
      [name]: {
        val: value,
        errorText: ''
      }
    }))
  }

  const onOrderFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const errors = {
      name: '',
      lastname: '',
      phone: '',
      email: '',
    }

    let isValid = true

    if (!orderForm.name.val) {
      errors.name = 'Введите своё имя'
      isValid = false
    }
    if (!orderForm.lastname.val) {
      errors.lastname = 'Введите свою фамилию'
      isValid = false
    }
    if (!orderForm.phone.val) {
      errors.phone = 'Введите свой номер'
      isValid = false
    }
    if (!orderForm.email.val) {
      errors.email = 'Введите свой e-mail'
      isValid = false
    }

    if (!isValid) {
      setOrderForm(prev => ({
        name: { ...prev.name, errorText: errors.name },
        lastname: { ...prev.lastname, errorText: errors.lastname },
        phone: { ...prev.phone, errorText: errors.phone },
        email: { ...prev.email, errorText: errors.email },
      }))
      return
    }

    dispatch(setOrder({
      id: crypto?.randomUUID() ?? Date.now().toString(),
      name: orderForm.name.val,
      lastname: orderForm.lastname.val,
      phone: orderForm.phone.val,
      email: orderForm.email.val,
      items,
      payment: payment,
      delivery: delivery,
      deliveryVariant: deliveryVariant,
      orderPrice: totalPrice
    }))

    dispatch(cleanCart())
    
    setIsInnerOpened(false)
    setIsModalInnerOpened(true)
    setOrderForm({
      name: {val: '', errorText: ''},
      lastname: {val: '', errorText: ''},
      phone: {val: '', errorText: ''},
      email: {val: '', errorText: ''}
    })
    setPayment(null)
    setDelivery(null)
    setDeliveryVariant(null)
  }

  const openSendOrderModal = () => {
    if(!payment) {
      setPaymentError('Выберите способ оплаты!')
      return null
    }
    if(!delivery || (delivery === "dillers" && !deliveryVariant)) {
      setDeliveryError('Выберите способ доставки!')
      return null
    }

    setIsSendOrderModalOpened(true)
  }

  const closeSendOrderModal = () => {
    setIsSendOrderModalOpened(false)
    setIsInnerOpened(true)
    setIsModalInnerOpened(false)
  }
  
  return (
    <form className="cart_order" id="cartOrderForm" onSubmit={(e)=>onOrderFormSubmit(e)}>
      <div className="_act payment">
        <Title className="title">Оплата</Title>
        {!payment && <div style={{fontSize: '20px', color: 'red'}}>{paymentError}</div>}
        <div className="content">
          <label className={paymentError ? "error" : ""}>
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={payment === "cash"}
              onChange={(e)=>{setPayment(e.target.value); setPaymentError('')}}
            />
            <span className="fake_checkbox">
              <span></span>
            </span>
            <h4>Оплатить заказ наличными при получении</h4>
          </label>
          <label className={paymentError ? "error" : ""}>
            <input
              type="radio"
              name="payment"
              value="bank_card"
              checked={payment === "bank_card"}
              onChange={(e)=>{setPayment(e.target.value); setPaymentError('')}}
              />
            <span className="fake_checkbox">
              <span></span>
            </span>
            <h4>Оплатить сейчас картой Visa/Mastercard</h4>
          </label>
        </div>
      </div>
      <div className="_act delivery">
        <Title className="title">Доставка</Title>
        {!delivery && <div style={{fontSize: '20px', color: 'red'}}>{deliveryError}</div>}
        <div className="content">
          <label className={deliveryError ? "error" : ""}>
            <input
              type="radio"
              name="delivery"
              value="kaluga_office"
              checked={delivery === "kaluga_office"}
              onChange={(e)=>{setDelivery(e.target.value); setDeliveryError('')}}
            />
            <span className="fake_checkbox">
              <span></span>
            </span>
            <h4>
              Магазин:
              <span>г. Калуга, ул. Московская 326</span>
            </h4>
          </label>
          <label className={deliveryError ? "error" : ""}>
            <input
              type="radio"
              name="delivery"
              value="dillers"
              checked={delivery === "dillers"}
              onChange={(e)=>{setDelivery(e.target.value); setDeliveryError('')}}
            />
            <span className="fake_checkbox">
              <span></span>
            </span>
            <h4 onClick={()=>setIsDeliveryListOpened(prev => !prev)}>
              Диллеры:
              <span>
                <div className="select">
                  <div className={`visual_part ${deliveryVariant ? '' : 'error'}`}>
                    <span>
                      {deliveryVariant ? deliveryVariant : 'Выберите диллера для доставки'}
                    </span>
                  </div>
                  <div className="list" style={isDeliveryListOpened ? {display: "block"} : {display: "none"}}>
                    <div>
                      <span
                        onClick={()=>{setDeliveryVariant('г. Санкт-Петербург, ул. Московская 326, магазин “Клаксон”'); setIsDeliveryListOpened(false); setDeliveryError('')}}
                      >
                        г. Санкт-Петербург, ул. Московская 326, магазин “Клаксон”
                      </span>
                    </div>
                    <div>
                      <span
                        onClick={()=>{setDeliveryVariant('г. Москва, ул. Долгорукова 321, магазин “Клаксон”'); setIsDeliveryListOpened(false); setDeliveryError('')}}
                      >
                        г. Москва, ул. Долгорукова 321, магазин “Клаксон”
                      </span>
                    </div>
                    <div>
                      <span
                        onClick={()=>{setDeliveryVariant('г. Нягонь, ул. Мира 268, магазин “Клаксон”'); setIsDeliveryListOpened(false); setDeliveryError('')}}
                      >
                        г. Нягонь, ул. Мира 268, магазин “Клаксон”
                      </span>
                    </div>
                  </div>
                </div>
              </span>
            </h4>
          </label>
        </div>
      </div>
      <div className="final_amount">
        Сумма к оплате: <span>{totalPrice} руб.</span>
      </div>
      <div className="wrap_ordering">
        <button
         type="button"
         className="to_ordering"
         onClick={openSendOrderModal}
        >
          Оформить заказ
        </button>
      </div>
      <div
        className="modal"
        style={
          isSendOrderModalOpened ? {display: "flex"} : undefined}
          onClick={()=>closeSendOrderModal()
        }
      >
        <div className="wrapper" onClick={(e) => e.stopPropagation()}>
          <div className="modal_inner" style={isInnerOpened ? {display: "block"} : {display: "none"} } onClick={(e) => e.stopPropagation()}>
            <div
              className="close"
              onClick={(e) => {
                e.stopPropagation();
                closeSendOrderModal();
              }}
            >
              <span></span>
            </div>
            <Title>Оформление заказа</Title>
            <div className="subtitle">Заполните все необходимые поля</div>
            <div className="order">
              <input
               type="text"
               name="name"
               value={orderForm.name.val}
               placeholder="Ваше имя"
               onChange={(e)=>hadleChange(e)}
               />
               {orderForm.name.errorText ? <span className="errorText">{orderForm.name.errorText}</span> : ''}
              <input
               type="text"
               name="lastname"
               value={orderForm.lastname.val}
               placeholder="Ваша фамилия"
               onChange={(e)=>hadleChange(e)}
               />
               {orderForm.lastname.errorText ? <span className="errorText">{orderForm.lastname.errorText}</span> : ''}
              <input
               type="text"
               name="phone"
               value={orderForm.phone.val}
               onChange={(e)=>hadleChange(e)}
               />
               {orderForm.phone.errorText ? <span className="errorText">{orderForm.phone.errorText}</span> : ''}
              <input
               type="email"
               name="email"
               value={orderForm.email.val}
               placeholder="Email"
               onChange={(e)=>hadleChange(e)}
               />
               {orderForm.email.errorText ? <span className="errorText">{orderForm.email.errorText}</span> : ''}
              <input
               type="submit"
               value="Оформить заказ"
               />
            </div>
          </div>
          <div className="modal_inner" style={isModalInnerOpened ? {display: "block"} : {display: "none"} }>
            <div className="close" onClick={closeSendOrderModal}>
              <span></span>
            </div>
            <div className="img">
              <img src="img/modal.png" alt="" />
            </div>
            <Title>Заказ оформлен</Title>
            <div className="subtitle">
              Как только заказ будет оформлен, наш менеджер свяжется с Вами
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
