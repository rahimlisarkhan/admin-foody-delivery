import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';


export const ArrowBottom = styled(ArrowBackIosIcon)`
    transform: rotate(-90deg);
    position: absolute;
    top: 0;
    right: 10px;

`

export const ButtonStyled = styled(Button).attrs(() => ({
    variant: "contained",
}))`
    background-color: ${({ theme }) => theme.colors.darkBlue_4} !important;
    border-radius: 14px;
    width: ${({ width }) => width ? `${width}px` : "100%"};
    display: flex;
    justify-content: space-between;
    position: relative;
`

export const PopperStyled = styled(Popper).attrs(() => ({
    role: undefined,
    transition: true
}))`
    width:${({ poper }) => poper ? `${poper}px` :"100%"}; 
    z-index:10000;

`