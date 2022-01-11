import React, { useState, createContext } from 'react';
import { CategoryModal } from '../feature/category/CategoryModal/CategoryModal';
export const ModalsContext = createContext();

const ModalsContextProvider = ({ children }) => {

    //Product Delete
    const [openProductModal, setOpenProductModal] = useState(false);
    const [deleteProductModalID, setDeleteProductModalID] = useState("");

    const deleteItemModal = ()=>{
        setOpenProductModal(true)
        console.log(deleteProductModalID);
    }

    const value = {
        openProductModal,
        setOpenProductModal,
        setDeleteProductModalID,
        deleteItemModal,
    }

    return (
        <ModalsContext.Provider value={value}>
            <CategoryModal />
            {children}
        </ModalsContext.Provider>
    );
}

export default ModalsContextProvider;