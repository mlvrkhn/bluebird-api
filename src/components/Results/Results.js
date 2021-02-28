import React from 'react';
import { PropTypes } from 'prop-types';
import StyledResults from './Results.styled';
import Record from '../Record';
import TableHeader from '../TableHeader';
import { useSelector } from 'react-redux';

const Results = () => {
    const brregRecords = useSelector((state) => state.results);

    const displayExtraInfo = (e) => {
        console.log(e);
    };

    const renderRows = () => {
        if (brregRecords) {
            return brregRecords.map((record, index) => {
                return (
                    <Record
                        key={index}
                        data={record}
                        onHover={(e) => displayExtraInfo(e.target)}
                    />
                );
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
