import { Grid, Typography } from "@mui/material";
import styled, { css } from "styled-components";



export const ContentHeaderRow = styled(Grid).attrs(()=>({
    container:true,
    spacing:1 
}))`
    ${({theme})=>css`
        align-items: center;
        height:73px;
        margin-top:25px;
        background: ${theme.colors.darkBlue_3};
        border-radius: 14px;
        padding: ${theme.boxModel.padding.small};
    `}

`

export const ContentHeaderTitleArea = styled(Grid).attrs(()=>({
    item :true,
    md:7 
}))`
    
`
export const ContentHeaderButtonsArea = styled(Grid).attrs(()=>({
    item :true,
    md:5
}))`
    display: flex;
    justify-content: flex-end;
`

export const ContentHeaderTitle = styled(Typography).attrs(()=>({
    variant :"h4",
    component:"div"
}))`
    ${({theme})=>css`
        color:${({theme})=>theme.colors.grayText};
        font-size: ${({theme})=>theme.font.size.large};
        font-weight:500;
    `}
`

