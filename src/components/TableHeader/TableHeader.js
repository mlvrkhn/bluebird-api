import React from 'react';
import StyledTableHeader from './TableHeader.styled';

const TableHeader = () => {
    return (
        <StyledTableHeader>
            <div>Org. Nr</div>
            <div>Navn</div>
            <div>WWW</div>
            <div>E-mail</div>
        </StyledTableHeader>
    );
};

export default TableHeader;
