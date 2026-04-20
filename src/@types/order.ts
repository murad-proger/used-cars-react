import type { ProductCardProps } from "./ProductCardProps"

export type Order = {
  id: number | string,
  name: string,
  lastname: string,
  phone: string,
  email: string,
  items: ProductCardProps[],
  payment: string | null,
  delivery: string | null,
  deliveryVariant: string | null,
  orderPrice: number
}