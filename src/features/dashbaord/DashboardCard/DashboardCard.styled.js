import { Grid } from "@mui/material";
import styled from "styled-components";
import TypographyText from "../../../components/Typograph";

export const DashboardCardStyled = styled(Grid).attrs(({col})=>({
    item:true,
    xs:12,
    md:col,
}))`
    position:relative;
    width:${({width})=>width ? `${width}px`: "100%"};
    height: 472px;
    background-color: ${({theme})=>theme.colors.darkBlue_3};
    border-radius: 14px;
    margin:15px 0;
    padding: 20px !important;

    &:nth-child(odd){
        margin-right:30px;
    }
`

export const NotFoundTitle = styled(TypographyText)`

    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate: (-50%, -50%);

`