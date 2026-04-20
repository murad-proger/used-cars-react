import type { CartItem } from "../@types/cart"

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((summ, item) => {
    return summ += item.price * item.count
  }, 0)
}

export const calcItemsCount = (items: CartItem[]) => {
  return items.reduce((summ, item) => {
    return summ += item.count
  }, 0)
}