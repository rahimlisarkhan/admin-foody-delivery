import { Grid } from "@mui/material";
import styled from 'styled-components'



export const RestaurantsList = styled(Grid).attrs(()=>({
    container:true,
    spacing:3,
}))`
margin-top:${({theme})=> theme.boxModel.margin.normal}  !important;
height: 400px;
overflow: auto;
`