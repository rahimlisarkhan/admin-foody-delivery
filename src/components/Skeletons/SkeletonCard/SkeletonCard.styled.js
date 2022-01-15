import { Grid, Skeleton } from "@mui/material";
import styled, { css } from "styled-components";


export const SkeletonCardStyled = styled(Grid).attrs(() => ({
    m: 2
}))`

${({ theme, width }) => css`
        width: ${`${width}px`};
        padding:{theme.boxModel.margin.padding.small} ;
        max-width:196px;
        height: 273px;
        background-color: ${theme.colors.white};
        transition: all .2s;
        cursor: pointer;
        &:hover{
            transform: scale(.98);
        }
    `}
`


export const SkeletonImg = styled(Skeleton).attrs(() => ({
    animation: "wave",
    variant: "rectangular"
}))`
    width:100%;
    height: 118px;
    margin-bottom:20px;
`