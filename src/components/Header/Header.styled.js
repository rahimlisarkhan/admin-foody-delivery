import { Box, Container } from "@mui/material";
import styled, { css } from "styled-components";

export const HeaderStyled = styled.header`
    ${({ theme }) => css`
    margin-bottom:${theme.boxModel.margin.normal};
    `}
    position: fixed;
    width: 97.5%;
    top:0;
    left:22px;
    z-index:1000;
`;

export const HeaderContent = styled(Box)`
    display:flex;
    justify-content:space-between !important;
    height: 64px;
    ${({ theme }) => css`
    background: ${theme.colors.darkBlue_3};
    padding:${theme.boxModel.padding.normal};
    color:${theme.colors.white} !important;
    `}
    border-radius:0 0 10px 10px;
`;



export const AdminContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;


export const SubTitle = styled.span`
    text-decoration: capitalize !important;
    font-size: ${({ theme }) => theme.font.size.small};
`;



