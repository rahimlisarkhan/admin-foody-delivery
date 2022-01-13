import styled from "styled-components";



export const InputImageLabel = styled.label.attrs(()=>({
    htmlFor:"image"
}))`
    font-size:18px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transition:all .2s;
    cursor:pointer;

    & svg {
        fill: ${({theme})=>theme.colors.lightPink};
        font-size:60px;
    }

    & input {
        display: none;
    }

    &:hover{
        transform: scale(.95);
    }
    
`