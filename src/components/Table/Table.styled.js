import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';



export const PaperStyled = styled(Paper)`
width: 100%; 
overflow: 'hidden';
margin-top:${({theme})=>theme.boxModel.padding.normal};
`;


export const TableContainerStyled = styled(TableContainer)`
max-height: 440px
`

export const TableCellStyled = styled(TableCell)`
    min-width:${({cellwidth})=>`${cellwidth}px`}
`