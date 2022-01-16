import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  offers: null,
}

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    fillOffers: (state, action) => {
      state.offers = action.payload
    },
    deleteOffer: (state, action) => {
      state.offers = state.offers.filter(item => item.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { fillOffers, deleteOffer } = offerSlice.actions

export default offerSlice.reducer