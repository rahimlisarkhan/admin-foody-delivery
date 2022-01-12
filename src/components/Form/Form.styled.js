import { Box,Typography } from "@mui/material";
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