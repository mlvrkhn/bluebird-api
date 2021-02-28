import React from 'react';
import { PropTypes } from 'prop-types';
import StyledResults from './Results.styled';
import Record from '../Record';
import TableHeader from '../TableHeader';
import { useSelector } from 'react-redux';

const Results = () => {
    const brregRecords = useSelector((state) => state.results);
    const renderRows = () => {
        if (brregRecords) {
            return brregRecords.map((record, index) => {
                return <Record key={index} data={record} />;
            });
        }
        return;
    };

    return (
        <StyledResults>
            <TableHeader />
            {renderRows()}
        </StyledResults>
    );
};

Results.propTypes = {
    results: PropTypes.array,
};

export default Results;
