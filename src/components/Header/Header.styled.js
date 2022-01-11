import styled, { css } from "styled-components";





export const HeaderStyled = styled.header`
    ${({ theme }) => css`
    background: ${theme.colors.darkBlue_3};
    padding:${theme.boxModel.padding.normal};
    margin-bottom:${theme.boxModel.margin.normal};
    color:${theme.colors.white} !important;
    `}
    display:flex;
    justify-content:space-between;
    position: fixed;
    width: 97%;
    top:0;
    left:22px;
    height: 64px;
    border-radius:0 0 10px 10px
`;


export const AdminContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;


export const SubTitle = styled.span`
${(props) => {
        console.log(props);

    }}
    text-decoration: capitalize !important;
    font-size: ${({ theme }) => theme.font.size.small};

`;



