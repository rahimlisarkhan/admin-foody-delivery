import React, { useState, createContext } from 'react';
export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
    //Product Delete
    const [openProductModal, setOpenProductModal] = useState(false);

   
    const value = {
        openProductModal,
        setOpenProductModal,
    }

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
}

export default AdminContextProvider;