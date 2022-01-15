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

    const deleteOfferModal = () => {
        setOpenOfferModal(true)
        console.log("Offer", deleteOfferModalID);
    }

    const deleteOrderModal = () => {
        setOpenOrderModal(true)
        console.log("Order", deleteOrderModalID);
    }

    const deleteCategoryModal = () => {
        setOpenCategoryModal(true)
        console.log("category", deleteCategoryModalID);
    }

    const deleteRestaurantModal = async () => {
        setOpenRestaurantModal(true)
        console.log("rest", deleteRestaurantModalID);
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