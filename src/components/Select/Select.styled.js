import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styled from 'styled-components';
import Button from '@mui/material/Button';


export const ArrowBottom = styled(ArrowBackIosIcon)`
    transform: rotate(-90deg);
    position: absolute;
    top: 0;
    right: 10px;

`

export const ButtonStyled = styled(Button).attrs(()=>({
    variant:"contained",
}))`
    background-color: ${({theme})=>theme.colors.darkBlue_4} !important;
    border-radius: 14px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    position: relative;
`