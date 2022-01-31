import { Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const TypographyText = styled(Typography).attrs(()=>({
    // gutterBottom:true, 
    variant:"h6",
    component:"div"
}))`
    padding: 0 !important;
    /* margin: 0 !important; */
    ${({theme,font,color})=>css`
        color:${()=>{
            switch(color){
                case "dark":
                    return theme.colors.textBlack;
                case "gray":
                    return theme.colors.grayText1;
                case "graylight":
                    return theme.colors.grayText;
                case "green":
                    return theme.colors.textGreenLight;
                default:
                    return theme.colors.textBlack;

            }
        } 
        }!important;
        font-size:${font ? `${font}px` : theme.font.size.medium} !important;
        `}
`