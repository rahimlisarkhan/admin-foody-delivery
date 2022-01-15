import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: null,
  loading: false
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fillProducts: (state, action) => {
      state.products = action.payload
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload)
    },
    isLoading: (state, action) => {
      state.loading = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { fillProducts, deleteProduct, isLoading } = productSlice.actions

export default productSlice.reducer