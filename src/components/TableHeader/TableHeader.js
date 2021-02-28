import React from 'react';
import tableFields from '../../tableFields';
import StyledTableHeader from './TableHeader.styled';

const TableHeader = () => {
    return (
        <StyledTableHeader>
            {tableFields.map((field) => {
                return <div>{field}</div>;
            })}
        </StyledTableHeader>
    );
};

export default TableHeader;
