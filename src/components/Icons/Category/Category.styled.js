import CategoryIcon from '@mui/icons-material/Category';
import styled from "styled-components";


export const IconCategory = styled(CategoryIcon)`
fill:${({theme}) => theme.colors.white};
margin-right: ${({theme}) => theme.boxModel.margin.normal} ;
`