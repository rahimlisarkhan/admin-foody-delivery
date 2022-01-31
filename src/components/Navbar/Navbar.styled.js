import styled from "styled-components";
import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';



export const ListItemContent = styled(ListItemButton)`
margin-bottom:${({theme})=> theme.boxModel.margin.small};
background-color:${({active})=> active === "true" && "rgba(247,247,247, 0.150) !important" } ;

`

export const ListItem = styled(Link)`
    color:${({theme})=> theme.colors.white};
    text-decoration: none !important;
    display: flex;
    align-items: center;
`

export const NavbarStyled = styled(Grid).attrs(()=>(
    {
        item:true,
        md:3
}))`
`

export const NavList = styled.div`
width: 290px;
height: 474px;
position:fixed;
top:90px;
border-radius: 14px;
background-color:${({theme})=> theme.colors.lightPurple_2} ;
color:${({theme})=> theme.colors.whiteLight} ;
padding:${({theme})=> theme.boxModel.padding.large} ;
`  

export const NavFooter = styled.div`
width: 280px;
height: 88px;
display: flex;
flex-direction: column;
align-items: center;
color:${({theme})=> theme.colors.grayText};
background-color:${({theme})=> theme.colors.darkBlue_3} ;
border-radius: 14px;
position:fixed;
bottom:10px;
padding:${({theme})=> theme.boxModel.padding.small} ;

`

export const NavFooterTitle = styled(Typography).attrs(()=>({
variant:"h3",
components:"h3"
}))`
width: 100px;
text-align: center;
color:${({theme})=> theme.colors.grayText};
font-size: ${({theme})=> theme.font.size.extraSmall}!important;
`
