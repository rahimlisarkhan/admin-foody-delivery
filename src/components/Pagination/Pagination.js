
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationContent } from './Pagination.styled';

export const Paginations = () => {
  return (
      <PaginationContent>
          <Pagination count={3}  variant="outlined" />
      </PaginationContent>
  );
}

