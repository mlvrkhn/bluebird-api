import React from 'react';
import StyledResults from './Results.styled';
import Record from '../Record';
import TableHeader from '../TableHeader';
import { useSelector } from 'react-redux';

const Results = () => {
    const brregRecords = useSelector((state) => state.results);

    const renderRows = () => {
        return brregRecords.map((record) => {
            if (record._embedded && record._embedded.enheter) {
                return record._embedded.enheter.map((company, index) => {
                    return (
                        <Record
                            key={index}
                            data={company}
                            onHover={() => console.log('hoooover')}
                        />
                    );
                });
            } else {
                console.log('error with mapping state to Record');
            }
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
