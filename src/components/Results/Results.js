import React from 'react';
import StyledResults from './Results.styled';
import Record from '../Record';
import { useSelector } from 'react-redux';

const Results = () => {
    const brregRecords = useSelector((state) => state.results);

    const renderRow = () =>
        brregRecords.map((company, index) => {
            const { orgNum, navn, email, website, bankrupt } = company;
            return (
                <Record key={index} onHover={() => console.log('hoooover')}>
                    <p>{orgNum}</p>
                    <p>{navn}</p>
                    <p>{email}</p>
                    <p>{website}</p>
                </Record>
            );
        });

    // const renderTableHeader = () => {
    //     return (
    //         <Record>
    //             <p>Organisasjonsnummer</p>
    //             <p>Navn</p>
    //             <p>E-mail</p>
    //             <p>www</p>
    //         </Record>
    //     );
    // };

    return (
        <StyledResults>
            {/* {renderTableHeader()} */}
            {renderRow()}
        </StyledResults>
    );
};

export default Results;
