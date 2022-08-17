import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

// Create a custom interface for the intialState
export interface productArray {
    value: {
        name: string,
        quantity: number,
        price: number
    }[]
}

export interface newProduct {
    name: string,
    quantity: number,
    price: number
}

// Set initialState
const initialState: productArray = {
    value: []
}

export const productSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<newProduct>) => {
            state.value.push(action.payload)
        }
    }
})

export const { addProduct } = productSlice.actions

export default productSlice.reducer