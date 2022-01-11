
import { Grid ,CardContent, Typography, Button} from '@mui/material'
import styled from 'styled-components'



export const Card = styled(Grid).attrs(()=>({
    m:2
}))`
    display: flex;
    width: 247px;
    height: 83px;
    background-color: ${({theme})=>theme.colors.white};
    padding:${({theme})=>theme.boxModel.padding.small};
    position: relative;
    border-radius: 5px;
    transition: all .2s;
    cursor: pointer;
    &:hover{
        transform: scale(.98);
    }
`

export const CardTitleContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const CardTitle = styled(Typography).attrs(()=>({
    variant:"h6"
}))`
font-size: ${({theme})=>theme.font.size.medium};
color: ${({theme})=>theme.colors.darkBlue_1};

`

export const CardSubTitle = styled(Typography).attrs(()=>({
    variant:"h6"
}))`
font-size: ${({theme})=>theme.font.size.extraSmall};
color: ${({theme})=>theme.colors.grayText1};

`

export const ButtonDelete = styled(Button)`
position: absolute;
top: 0;
right: -15px;

`

