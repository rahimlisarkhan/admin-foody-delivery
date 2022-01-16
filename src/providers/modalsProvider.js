import React, { useState, createContext } from 'react';
import OfferModal from '../features/offer/OfferModal';
import OrderModal from '../features/orders/OrderModal';
import ProductModal from '../features/product/ProductModal';
import CategoryModal from '../features/category/CategoryModal';
import RestaurantModal from '../features/restaurants/RestaurantModal';
import { removeProduct } from '../services/Products';
import { deleteProduct } from '../store/slices/product/productSlice'
import { useDispatch } from 'react-redux';
import { removeRestaurants } from '../services/Restaurants';
import { deleteRestaurant } from '../store/slices/restaurant/restaurantSlice';
import { deleteCategory } from '../store/slices/category/categorySlice';
import { removeCategories } from '../services/Category';
import { removeOrders } from '../services/Order';
import { deleteOrder } from '../store/slices/order/orderSlice';
import { removeOffers } from '../services/Offer';
import { deleteOffer } from '../store/slices/offer/offerSlice';

export const ModalsContext = createContext();

const ModalsContextProvider = ({ children }) => {
    const dispatch = useDispatch()

    const [openProductModal, setOpenProductModal] = useState(false);
    const [deleteProductModalID, setDeleteProductModalID] = useState("");
    const [openRestaurantModal, setOpenRestaurantModal] = useState(false);
    const [deleteRestaurantModalID, setDeleteRestaurantModalID] = useState("");
    const [openCategoryModal, setOpenCategoryModal] = useState(false);
    const [deleteCategoryModalID, setDeleteCategoryModalID] = useState("");
    const [openOrderModal, setOpenOrderModal] = useState(false);
    const [deleteOrderModalID, setDeleteOrderModalID] = useState("");
    const [openOfferModal, setOpenOfferModal] = useState(false);
    const [deleteOfferModalID, setDeleteOfferModalID] = useState("");

    const deleteOfferModal = async () => {
        setOpenOfferModal(true)
        const res = await removeOffers(deleteOfferModalID)
        if (res?.status === 204) {
            dispatch(deleteOffer(deleteOfferModalID))
        }
    }

    const deleteOrderModal = async () => {
        setOpenOrderModal(true)
        const res = await removeOrders(deleteOrderModalID)
        if (res?.status === 204) {
            dispatch(deleteOrder(deleteOrderModalID))
        }
    }

    const deleteCategoryModal = async () => {
        setOpenCategoryModal(true)
        const res = await removeCategories(deleteCategoryModalID)
        if (res?.status === 204) {
            dispatch(deleteCategory(deleteCategoryModalID))
        }
    }

    const deleteRestaurantModal = async () => {
        setOpenRestaurantModal(true)
        const res = await removeRestaurants(deleteRestaurantModalID)
        if (res?.status === 204) {
            dispatch(deleteRestaurant(deleteRestaurantModalID))
        }
    }

    const deleteItemModal = async () => {
        setOpenProductModal(true)
        const res = await removeProduct(deleteProductModalID)
        if (res?.status === 204) {
            dispatch(deleteProduct(deleteProductModalID))
        }
    }

    const value = {
        openProductModal,
        setOpenProductModal,
        setDeleteProductModalID,
        deleteItemModal,
        openRestaurantModal,
        setOpenRestaurantModal,
        setDeleteRestaurantModalID,
        deleteRestaurantModal,
        openCategoryModal,
        setOpenCategoryModal,
        setDeleteCategoryModalID,
        deleteCategoryModal,
        openOrderModal,
        setOpenOrderModal,
        deleteOrderModalID,
        setDeleteOrderModalID,
        deleteOrderModal,
        openOfferModal,
        setOpenOfferModal,
        deleteOfferModalID,
        setDeleteOfferModalID,
        deleteOfferModal,
    }

    return (
        <ModalsContext.Provider value={value}>
            <OfferModal />
            <OrderModal />
            <ProductModal />
            <RestaurantModal />
            <CategoryModal />
            {children}
        </ModalsContext.Provider>
    );
}

export default ModalsContextProvider;