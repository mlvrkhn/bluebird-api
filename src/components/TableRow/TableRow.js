import React from 'react';
import StyledTableRow from './TableRow.styled';

function TableRow({ children }) {
    return <StyledTableRow>{children}</StyledTableRow>;
}

export default TableRow;
