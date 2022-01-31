import { Button } from "@mui/material";
import styled from "styled-components";


export const ButtonStyled = styled(Button).attrs(()=>({
    variant:"contained",
}))`
    width: ${({width})=>width ? width : "auto" };
    height: ${({height})=>height ? height : "auto" };
    background-color: ${({theme})=>theme.colors.lightPurple_3} !important;
    margin:0 ${({theme}) => theme.boxModel.margin.normal};
    border-radius: 14px !important; 

    &:hover{
        background-color: ${({theme})=>theme.colors.lightPurple_2} !important;
    }
`
