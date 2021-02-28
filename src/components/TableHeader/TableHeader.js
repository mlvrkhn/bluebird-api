import React from 'react';
import tableFields from '../../tableFields';
import StyledTableHeader from './TableHeader.styled';

const TableHeader = () => {
    return (
        <>
            <StyledTableHeader>
                {tableFields.map((field) => {
                    return <div key={field}>{field}</div>;
                })}
            </StyledTableHeader>
        </>
    );
};

export default TableHeader;
