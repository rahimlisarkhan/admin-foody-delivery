import Dashboard from "../components/Icons/Dashboard";
import Product from "../components/Icons/Product";
import Restaurant from "../components/Icons/Restaurant";
import Category from "../components/Icons/Category";
import Order from "../components/Icons/Order";
import Offer from "../components/Icons/Offer";
import Logout from "../components/Icons/Logout";

export const ROUTE = {
    MAIN:{
        HREF:"/",
        ICON:null ,
        PANEL:{
            HREF:"/panel",
            ICON:null ,
            CHILD:{
                DASHBOARD:{
                    HREF:"/panel/dashboard",
                    ICON:<Dashboard/>
                },
                PRODUCTS:{
                    HREF:"/panel/products",
                    ICON:<Product/>
            
                },
                RESTAURANTS:{
                    HREF:"/panel/restaurants",
                    ICON:<Restaurant/>
            
                },
                CATEGORY:{
                    HREF:"/panel/category",
                    ICON:<Category/>
            
                },
                ORDERS:{
                    HREF:"/panel/orders",
                    ICON:<Order/>
            
                },
                OFFER:{
                    HREF:"/panel/offers",
                    ICON:<Offer/>
                },
            }
        },
        LOGOUT:{
            HREF:"/login",
            ICON:<Logout/>
        },
    }
  
}