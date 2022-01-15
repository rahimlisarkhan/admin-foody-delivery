import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurants: null,
  loading: false,
  filterRestaurants: []
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    fillRestaurants: (state, action) => {
      state.restaurants = action.payload
    },
    deleteRestaurant: (state, action) => {
      state.restaurants = state.restaurants.filter(item => item.id !== action.payload)
    },
    filterRestaurant: (state, action) => {
      console.log(action.payload);
      state.filterRestaurants = state.restaurants.filter(item => item.category === action.payload.trim().toLowerCase())
    },
    isLoading: (state, action) => {
      state.loading = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { fillRestaurants, deleteRestaurant, filterRestaurant, isLoading } = restaurantSlice.actions

export default restaurantSlice.reducer