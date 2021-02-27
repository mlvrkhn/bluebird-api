import React from 'react';
import StyledTableHeader from './TableHeader.styled';

const TableHeader = () => {
    return (
        <StyledTableHeader>
            <div>Org. Nr</div>
            <div>Navn</div>
            <div>E-mail</div>
            <div>WWW</div>
        </StyledTableHeader>
    );
};

export default TableHeader;
