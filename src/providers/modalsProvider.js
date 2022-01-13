import React, { useState, createContext } from 'react';
import OfferModal from '../feature/offer/OfferModal';
import OrderModal from '../feature/orders/OrderModal';
import ProductModal from '../feature/product/ProductModal';
import CategoryModal from '../feature/category/CategoryModal';
import RestaurantModal from '../feature/restaurants/RestaurantModal';
export const ModalsContext = createContext();

const ModalsContextProvider = ({ children }) => {

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

    const deleteRestaurantModal = () => {
        setOpenRestaurantModal(true)
        console.log("rest", deleteRestaurantModalID);
    }

    const deleteItemModal = () => {
        setOpenProductModal(true)
        console.log("product", deleteProductModalID);
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