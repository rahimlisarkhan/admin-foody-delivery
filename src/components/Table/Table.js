import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { PaperStyled, TableCellStyled, TableContainerStyled } from './Table.styled';
import Image from '../../components/Image'
import { Button } from '@mui/material';
import IconDelete from '../Icons/Delete';
import { PropTypes } from 'prop-types';



const TableContent = ({ rows, columns, deleteItem }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleDelete = (id) => {
        deleteItem(id)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <PaperStyled >
            <TableContainerStyled >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns?.map((column) => (
                                <TableCellStyled
                                    key={column.id}
                                    align={column.align}
                                    cellwidth={column.minWidth}
                                >
                                    {column.label}
                                </TableCellStyled>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            ?.map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={`table-${row.id}`}>
                                        {columns?.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'img_url'
                                                        ? <Image width="45" height="45" cover src={value} />
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell key={row.id} align={"center"} onClick={() => handleDelete(row.id)} >
                                            <Button variant="text">
                                                <IconDelete />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainerStyled>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </PaperStyled>
    );
}

export default React.memo(TableContent)

TableContent.propTypes = {
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired
}