export interface IProduct {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}
export interface IState {
  products: IProduct[]
  subTotal: number
}
