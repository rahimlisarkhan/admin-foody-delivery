import productSlice from "./product/productSlice"
import restaurantSlice from "./restaurant/restaurantSlice"
import categorySlice from "./category/categorySlice"
import orderSlice from "./order/orderSlice"
import offerSlice from "./offer/offerSlice"

export const reducers = {
    product:productSlice,
    restaurant:restaurantSlice,
    category:categorySlice,
    order:orderSlice,
    offer:offerSlice
}