import { Box, Typography, FormGroup } from "@mui/material";
import { Field } from "formik";
import styled, { css } from "styled-components";
import ButtonStyled from "../Button";


const customTextarea = ({
    field,
    ...props
}) => (<textarea  type="text" {...field} {...props} />);




export const FormContainer = styled(Box)`
width: 70vw;
min-height:100vh;

${({ theme }) => css`
    background-color: ${theme.colors.darkBlue_2};
    color: ${theme.colors.grayText};
    padding: ${theme.boxModel.padding.large};
`}
`

export const FormTitle = styled(Typography).attrs(() => ({
    variant: "h4"
}))`
    text-transform: capitalize;
`

export const FormSubTitle = styled(Typography).attrs(() => ({
    variant: "h6"
}))`
width: 30%;
    text-transform: normal;
`


export const FormGroupStyled = styled(FormGroup)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:40px 0 ;
`

export const FormContent = styled(Box)`
    width: 60%;
    padding: 20px;
    border-radius: 14px;
    overflow: auto;
    height: ${({ height }) => height && `${height}px`};
    background-color:${({ theme }) => theme.colors.darkBlue_5}
`
export const FormButtonGroup = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0; 
    border-top: 1px solid ${({ theme }) => theme.colors.darkBlue_5}
    `
export const FormButton = styled(ButtonStyled).attrs(({ submit }) => ({
    type: submit ? "submit" : "button"
}))`
    flex:1;
    height: 50px;
    margin:0;
    background-color: ${({ theme, dark }) => dark && theme.colors.darkBlue_5};
    &:nth-child(odd){
        margin-right: 40px;
    }
`

export const FormFieldGroup = styled(FormGroup)`
    background: "red";
    margin-bottom:25px;
    position: relative;

`

export const FormLabel = styled(Typography).attrs(() => ({
    variant: "h6"
}))`
    ${({ theme }) => css`
        color:${theme.colors.grayText};
        font-weight: 500;
        margin-bottom: 15px;
        font-size:${theme.font.size.small}
    `}

`

export const FormField = styled(Field)`
    border-radius: 14px;
    font-size:16px;
    color: ${({theme})=>theme.colors.grayText};
    background-color: ${({theme})=>theme.colors.darkBlue_4};
    height:46px;
    padding:15px;
    border: none;

    &:focus{
        outline:1px solid ${({theme})=>theme.colors.lightPink}
    }
`


export const FormTextArea = styled(FormField).attrs(()=>({
    component:customTextarea

}))`

height:133px

`