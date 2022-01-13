import { Box,Button,Typography } from "@mui/material";
import styled, {css} from "styled-components";

export const ModalBody = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 226px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=>theme.colors.white};
  padding: 10px 20px;
  border-radius: 4px;
`

export const ModalTitle = styled(Typography).attrs(()=>({
  variant:"h5"    

}))`
  ${({theme})=>css`
      color:${theme.colors.textBlack};
      font-weight: 600;
  `}
`

export const ModalSubTitle = styled(Typography).attrs(()=>({
  variant:"p" ,
  paragraph:true   
  
}))`
 ${({theme})=>css`
      width: 70%;
      color:${theme.colors.grayText2};
      font-weight: 400;
      margin:${theme.boxModel.margin.small} 0;
      font-size:${theme.font.size.medium};
  `}
`

export const ModalButtonGroup = styled(Box).attrs(()=>({
  
}))`
 ${({theme})=>css`
      display: flex;
      font-size:${theme.font.size.small};

  `}
`

export const ModalButtonAccept = styled(Button).attrs(()=>({
  variant:"contained",

}))`
 ${({theme})=>css`
      display: flex;
      margin:${theme.boxModel.margin.small};
      font-size:${theme.font.size.small};
      background-color: ${({theme})=>theme.colors.mainRed};
      color: ${theme.colors.white};
      border-radius: 4px;
      text-transform: lowercase;

      &:hover{
        background-color: ${({theme})=>theme.colors.lightRed};
    }
  
  `}
`

export const ModalButtonCancel = styled(Button).attrs(()=>({
  variant:"outlined",

}))`
 ${({theme})=>css`
      margin:${theme.boxModel.margin.small};
      border-color: ${({theme})=>theme.colors.grayText1};
      color: ${theme.colors.grayText1};
      border-radius: 4px;
      text-transform: lowercase;

  `}
`
