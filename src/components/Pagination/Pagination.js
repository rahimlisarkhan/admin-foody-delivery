
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationContent } from './Pagination.styled';
import PropTypes from "prop-types"


export const Paginations = ({ onPages, count }) => {

  const [page, setPage] = React.useState(+localStorage.getItem("page") || 1)

  React.useEffect(() => {

    return () => {
      localStorage.setItem("page", 1)
      setPage(1)
    }

  }, [])

  const handlePage = (event, value) => {



    if (count >= value) {
      localStorage.setItem("page", value)
      setPage(+value)
      onPages && onPages(value)
    }

  }

  return (
    <PaginationContent>
      <Pagination count={count} page={page} onChange={handlePage} variant="outlined" />
    </PaginationContent>
  );
}

Paginations.propTypes = {
  onPages: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}
