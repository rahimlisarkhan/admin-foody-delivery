import { Grid } from "@mui/material";
import styled from "styled-components";



export const DashboardList = styled(Grid).attrs(()=>({
    container:true,
    spacing:1,
}))`
    margin-top:12px !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`


