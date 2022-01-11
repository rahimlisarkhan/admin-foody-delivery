import styled from "styled-components";


export const NavStyled = styled.nav`
    background-color: ${({theme})=>theme.colors.darkBlue_1};
    font-size:20px;

    ul {
        display: flex;
    }

    li{
        margin: 0 20px;
    }
`