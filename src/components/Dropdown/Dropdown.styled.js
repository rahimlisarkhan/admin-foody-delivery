import Grow from '@mui/material/Grow';
import styled, { css } from "styled-components";


export const GrowStyled = styled(Grow)`
${({theme,placement})=>css`
    background-color:${theme.colors.darkBlue_4};
    transform-origin:${ placement === 'bottom' ? 'center top' : 'center bottom'};
`}

`