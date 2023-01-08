import { createSlice } from "@reduxjs/toolkit"
import { IProduct } from "./../@types/cart"

const initialState = {
  products: [],
  subTotal: 0,
}
export interface IState {
  products: IProduct[]
  subTotal: number
}
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increment(state: IState, action) {
      state.subTotal = state.subTotal + action.payload.price
      for (const item of state.products) {
        if (item.name === action.payload.name) {
          item.quantity += 1
          return
        }
      }
      state.products = [...state.products, action.payload]
    },
    incrementQuantity(state: IState, action) {
      for (const item of state.products) {
        if (item.name === action.payload) {
          state.subTotal = state.subTotal + item.price
          item.quantity += 1
          return
        }
      }
    },
    // decrementQuantity(state: IState, action) {
    //   for (const [index, value] of state.products.entries()) {
    //     if (value.name === action.payload) {
    //       state.subTotal = state.subTotal - value.price
    //       if (value.quantity > 1) {
    //         value.quantity -= 1
    //         return
    //       }
    //       state.products.splice(index, 1)
    //       return
    //     }
    //   }
    // },
    decrementQuantity(state: IState, action) {
      for (let index = 0; index < state.products.length; index++) {
        if (state.products[index].name === action.payload) {
          state.subTotal = state.subTotal - state.products[index].price
          if (state.products[index].quantity > 1) {
            state.products[index].quantity -= 1
            return
          }
          state.products.splice(index, 1)
          return
        }
      }
    },
  },
})
export default cartSlice.reducer
export const { increment, incrementQuantity, decrementQuantity } =
  cartSlice.actions
