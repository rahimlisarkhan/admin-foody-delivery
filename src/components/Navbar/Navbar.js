import * as React from 'react';
import { ListItem, ListItemContent, NavbarStyled, NavFooter, NavFooterTitle, NavList } from "./Navbar.styled"
import List from '@mui/material/List';
import { ROUTE } from "../../util/route";
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import Image from '../../components/Image'
import EALogo from '../../image/icon/ea-logo.svg'

const Navbar = ({ location }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'menu' });
    let { pathname } = location

    return (
        <NavbarStyled>
            <NavList>
                <List>
                    <ListItem  to={ROUTE.MAIN.PANEL.CHILD.DASHBOARD.HREF}>
                        <ListItemContent active={`${pathname === ROUTE.MAIN.PANEL.CHILD.DASHBOARD.HREF ? true : false}`} >
                            {ROUTE.MAIN.PANEL.CHILD.DASHBOARD.ICON}
                            {t("dashboard")}
                        </ListItemContent>
                    </ListItem>
                    <ListItem  to={ROUTE.MAIN.PANEL.CHILD.PRODUCTS.HREF}>
                        <ListItemContent active={`${pathname === ROUTE.MAIN.PANEL.CHILD.PRODUCTS.HREF ? true : false}`} >
                            {ROUTE.MAIN.PANEL.CHILD.PRODUCTS.ICON}
                            {t("products")}
                        </ListItemContent>
                    </ListItem>
                    <ListItem  to={ROUTE.MAIN.PANEL.CHILD.RESTAURANTS.HREF}>
                        <ListItemContent active={`${pathname === ROUTE.MAIN.PANEL.CHILD.RESTAURANTS.HREF ? true : false}`} >
                            {ROUTE.MAIN.PANEL.CHILD.RESTAURANTS.ICON}
                            {t("restaurants")}
                        </ListItemContent>
                    </ListItem>
                    <ListItem  to={ROUTE.MAIN.PANEL.CHILD.CATEGORY.HREF}>
                        <ListItemContent active={`${pathname === ROUTE.MAIN.PANEL.CHILD.CATEGORY.HREF ? true : false}`}>
                            {ROUTE.MAIN.PANEL.CHILD.CATEGORY.ICON}
                            {t("category")}
                        </ListItemContent>
                    </ListItem>
                    <ListItem  to={ROUTE.MAIN.PANEL.CHILD.ORDERS.HREF}>
                        <ListItemContent active={`${pathname === ROUTE.MAIN.PANEL.CHILD.ORDERS.HREF ? true : false}`} >
                            {ROUTE.MAIN.PANEL.CHILD.ORDERS.ICON}
                            {t("orders")}
                        </ListItemContent>
                    </ListItem>
                    <ListItem  to={ROUTE.MAIN.PANEL.CHILD.OFFER.HREF}>
                        <ListItemContent active={`${pathname === ROUTE.MAIN.PANEL.CHILD.OFFER.HREF ? true : false}`}>
                            {ROUTE.MAIN.PANEL.CHILD.OFFER.ICON}
                            {t("offers")}
                        </ListItemContent>
                    </ListItem>
                    <ListItem  to={ROUTE.MAIN.LOGOUT.HREF}>
                        <ListItemContent >
                            {ROUTE.MAIN.LOGOUT.ICON}
                            {t("logout")}
                        </ListItemContent>
                    </ListItem>
                </List>
            </NavList>

            <NavFooter>
                <Image width="170" height="100" src={EALogo} />
                <NavFooterTitle >Version: 3.2. 2022</NavFooterTitle>
            </NavFooter>
        </NavbarStyled>
    )
}

export default withRouter(Navbar)
