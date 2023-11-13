import { createSlice } from '@reduxjs/toolkit'

let initialState ={
    total: 0,
    cartdata: []
}

const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, payload)=>{
            state.total= state.total + 1
        }
    }
})

export default cartslice.reducer
export const {addToCart} = cartslice.actions