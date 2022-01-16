import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: null,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fillCategories: (state, action) => {
      state.categories = action.payload
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(item => item.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { fillCategories, deleteCategory } = categorySlice.actions

export default categorySlice.reducer