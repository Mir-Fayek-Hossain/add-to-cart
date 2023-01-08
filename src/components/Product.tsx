import { IProduct } from "../@types/cart"
import { useAppDispatch } from "../app/hooks"
import { increment } from "../features/cartSlice"

interface Props {
  product: IProduct
}

const Product = ({ product }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <div>
      <p>Name:{product.name}</p>
      <p>Price:{product.price}</p>
      <button
        onClick={() => {
          dispatch(increment(product))
        }}
      >
        Add
      </button>
    </div>
  )
}

export default Product
