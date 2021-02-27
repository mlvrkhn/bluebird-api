import React from 'react';
import StyledResults from './Results.styled';
import Record from '../Record';
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

    const renderTableHeader = () => {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontWeight: '900',
                }}
            >
                <p>Org. Nr</p>
                <p>Navn</p>
                <p>E-mail</p>
                <p>www</p>
                <p>Konkurs</p>
            </div>
        );
    };

    return (
        <StyledResults>
            {renderTableHeader()}
            {renderRows()}
        </StyledResults>
    );
};

export default Results;
