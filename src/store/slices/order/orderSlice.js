import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orders: null,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    fillOrders: (state, action) => {
      state.orders = action.payload
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(item => item.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { fillOrders, deleteOrder } = orderSlice.actions

export default orderSlice.reducer