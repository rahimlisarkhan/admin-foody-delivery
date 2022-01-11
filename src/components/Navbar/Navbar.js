import * as React from 'react';
import { ListItem, ListItemContent, NavbarStyled, NavFooter, NavFooterTitle, NavList } from "./Navbar.styled"
import List from '@mui/material/List';
import { ROUTE } from "../../util/route";
import { useTranslation } from 'react-i18next';
// import { useLocation } from 'react-router-dom';
import Image from '../../components/Image'
import EALogo from '../../image/icon/ea-logo.svg'

const Navbar = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });
    // const {pathname} = useLocation()
    
    return (
        <NavbarStyled>
            <NavList>
                <List>
                    <ListItem  exact to={ROUTE.MAIN.PANEL.HREF}>
                        <ListItemContent active={`${"test" === ROUTE.MAIN.PANEL.HREF ? false : true}`} >
                            {ROUTE.MAIN.PANEL.CHILD.DASHBOARD.ICON}
                            {t("dashboard")}
                        </ListItemContent>
                    </ListItem>
                   <ListItem  exact to={ROUTE.MAIN.PANEL.CHILD.PRODUCTS.HREF}>
                        <ListItemContent active={`${"test" === ROUTE.MAIN.PANEL.CHILD.PRODUCTS.HREF ? false : true}`} >
                            {ROUTE.MAIN.PANEL.CHILD.PRODUCTS.ICON}
                            {t("products")}
                        </ListItemContent>
                    </ListItem>
                     <ListItem  exact to={ROUTE.MAIN.PANEL.CHILD.RESTAURANTS.HREF}>
                        <ListItemContent active={`${"test" === ROUTE.MAIN.PANEL.CHILD.RESTAURANTS.HREF ? false : true}`} >
                            {ROUTE.MAIN.PANEL.CHILD.RESTAURANTS.ICON}
                            {t("restaurants")}
                        </ListItemContent>
                    </ListItem>
                    <ListItem   exact to={ROUTE.MAIN.PANEL.CHILD.CATEGORY.HREF}>
                        <ListItemContent active={`${"test" === ROUTE.MAIN.PANEL.CHILD.CATEGORY.HREF ? false : true}`}>
                            {ROUTE.MAIN.PANEL.CHILD.CATEGORY.ICON}
                            {t("category")}
                        </ListItemContent>
                    </ListItem>
                    <ListItem  exact to={ROUTE.MAIN.PANEL.CHILD.ORDERS.HREF}>
                        <ListItemContent  active={`${"test" === ROUTE.MAIN.PANEL.CHILD.ORDERS.HREF ? false : true}`} >
                            {ROUTE.MAIN.PANEL.CHILD.ORDERS.ICON}
                            {t("orders")}
                        </ListItemContent>
                    </ListItem>
                    <ListItem   exact to={ROUTE.MAIN.PANEL.CHILD.OFFER.HREF}>
                        <ListItemContent active={`${"test" === ROUTE.MAIN.PANEL.CHILD.OFFER.HREF ? false : true}`}>
                            {ROUTE.MAIN.PANEL.CHILD.OFFER.ICON}
                            {t("offers")}
                        </ListItemContent>
                    </ListItem>
                    <ListItem exact to={ROUTE.MAIN.LOGOUT.HREF}>
                        <ListItemContent >
                            {ROUTE.MAIN.LOGOUT.ICON}
                            {t("logout")}
                        </ListItemContent>
                    </ListItem>
                </List> 
            </NavList>

            <NavFooter>
                <Image width="170" height="100"  src={EALogo}/>
                <NavFooterTitle >Version: 1.0. 2022</NavFooterTitle>
            </NavFooter>
        </NavbarStyled>
    )
}

export default Navbar
