export type FilterMinMax = {
  min: number | null,
  max: number | null,
}

export type Brand = {
  name: string,
  isSelected: boolean
}

export interface BodyType {
  name: string;
  isSelected: boolean;
}

export type Brands = Brand[]
export type ChoosedBrands = string[]