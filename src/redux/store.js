import { configureStore } from '@reduxjs/toolkit'
import cartslice from "./cart"

export const mystore = configureStore({
    reducer: {
        cart: cartslice
    },
})
  