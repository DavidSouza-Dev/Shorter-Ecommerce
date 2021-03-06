export type nodeChildren = {
  children: React.ReactNode
}

export type marginProps = {
  margin?: boolean
}

export type slugId = {
  id: number
}

export interface Product {
  id: number
  image: string
  title: string
  price: number
  rating?: {
    rate: number
    count: number
  }
  description?: string
  category?: string
}

export interface TminicartItems extends Product {
  quantity: number
}

export type TminiCart = TminicartItems[]

export type containerProductsProps = {
  products: Product[]
}
