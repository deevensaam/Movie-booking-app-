import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

//a function to display the pagination
function BasicPagination() {
  return (
    <div className='pagination'>
        <Stack spacing={2}>
        <Pagination count={10} shape="rounded" size="large" color='secondary' />
        </Stack>
    </div>
  );
}

export default BasicPagination;