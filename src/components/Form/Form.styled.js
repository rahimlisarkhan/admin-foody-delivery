import { Box,Typography,FormGroup } from "@mui/material";
import styled, {css} from "styled-components";

export const FormStyled = styled(Box)`
width: 70vw;
min-height:100vh;

${({theme})=>css`
    background-color: ${theme.colors.darkBlue_2};
    color: ${theme.colors.grayText};
    padding: ${theme.boxModel.padding.large};
`}
`

export const FormTitle = styled(Typography).attrs(()=>({
    variant:"h4"
}))`
    text-transform: capitalize;
`

export const FormSubTitle = styled(Typography).attrs(()=>({
    variant:"h6"
}))`
    text-transform: capitalize;
`


export const FormGroupStyled = styled(FormGroup)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:30px 0 ;
`

export const FormContent = styled(Box)`
    width: 60%;
    padding: 15px;
    border-radius: 14px;
    overflow: auto;
    height: ${({height}) =>height && `${height}px` };
    background-color:${({theme})=>theme.colors.darkBlue_5}
`