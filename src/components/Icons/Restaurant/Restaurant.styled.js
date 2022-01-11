import styled from "styled-components";
import RestaurantIcon from '@mui/icons-material/Restaurant';

export const IconRestaurant = styled(RestaurantIcon)`
fill:${({theme}) => theme.colors.white};
margin-right: ${({theme}) => theme.boxModel.margin.normal} ;
`