

import { Button, CardActions, CardContent, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import styled, { css } from 'styled-components'





export const CardContentStyled = styled(CardContent)`
    ${({theme})=>css`
        padding: 0 16px
    `}

`


export const Card = styled(Grid).attrs(()=>({
    m:2
}))`
max-width:196px;
height: 273px;
background-color: ${({theme})=>theme.colors.white};
 transition: all .2s;
     cursor: pointer;
     &:hover{
         transform: scale(.98);
     }
`


export const CardImage = styled(CardMedia).attrs(()=>({
    component:"img",
    height:"160"
}))`
    width: 160px;
    margin:15px;
    object-fit:cover
`


export const CardActionsStyled = styled(CardActions)`
        padding: 0 16px !important;
        justify-content: space-between !important;

`

export const ButtonDeleteStyled = styled(Button)`
    padding:0;
    justify-content: flex-end;
`