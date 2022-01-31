import styled from "styled-components";
import { Grid } from "@mui/material"




export const PaginationContent = styled(Grid).attrs(()=>({
    container:true,
    spacing:1
}))`
justify-content: center;
    margin-top:30px !important;
    & button{
        width:64px;
        height:64px;
        font-size: 18px;
        border-radius: 50%;
        color:${({theme})=>theme.colors.lightPink};
        border-color:${({theme})=>theme.colors.lightPink};
    }

    & .Mui-selected{
        background-color:${({theme})=>theme.colors.lightPink} !important;
        color:${({theme})=>theme.colors.white} !important;

    }
    
    
`