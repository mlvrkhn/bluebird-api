import React from 'react';
import StyledResults from './Results.styled';
import Record from '../Record';
import TableHeader from '../TableHeader';
import { useSelector } from 'react-redux';

const Results = () => {
    const brregRecords = useSelector((state) => state.results);

    const renderRows = () => {
        return brregRecords.map((record, index) => {
            return (
                <Record
                    key={index}
                    data={record}
                    onHover={() => console.log('hoooover')}
                />
            );
        });
    };

    return (
        <StyledResults>
            <TableHeader />
            {renderRows()}
        </StyledResults>
    );
};

export default Results;
