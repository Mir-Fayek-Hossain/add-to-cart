import { ReactElement } from "react"
import { IProduct } from "../@types/cart"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { decrementQuantity, incrementQuantity } from "../features/cartSlice"

function Cart(): ReactElement {
  const cart = useAppSelector((state) => state.cart.products)
  const sub = useAppSelector((state) => state.cart.subTotal)
  const dispatch = useAppDispatch()
  return (
    <div>
      {cart.map((item: IProduct, index: number) => {
        return (
          <div key={index} className="d-flex">
            <li>name :{item.name}</li>
            Quantity :{" "}
            <span
              className="btn"
              onClick={() => dispatch(incrementQuantity(item.name))}
            >
              +
            </span>
            {item?.quantity}
            <span
              className="btn"
              onClick={() => dispatch(decrementQuantity(item.name))}
            >
              -
            </span>
          </div>
        )
      })}
      Sub total : {sub} BDT
    </div>
  )
}

export default Cart
