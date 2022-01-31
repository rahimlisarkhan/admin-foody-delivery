import { Grid } from "@mui/material";
import styled from "styled-components";




export const ProductsList = styled(Grid).attrs(()=>({
    container:true,
    spacing:2,
}))`

margin-top:${({theme})=> theme.boxModel.margin.normal} !important;
height: 400px;
overflow: auto;
`