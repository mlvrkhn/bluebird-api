import React from 'react';
import StyledCell from './Cell.styled';
import StyledRecord from './Record.styled';

const Record = ({ data, onHover }) => {
    const { organisasjonsnummer, navn, hjemmeside, konkurs, email } = data;
    console.log('🚀 ~ Record ~ konkurs', konkurs);
    return (
        <StyledRecord onMouseEnter={onHover} bold={konkurs}>
            <StyledCell>{organisasjonsnummer}</StyledCell>
            <StyledCell>{navn}</StyledCell>
            <StyledCell>{hjemmeside ? hjemmeside : ''}</StyledCell>
            <StyledCell>{email ? email : ''}</StyledCell>
        </StyledRecord>
    );
};

export default Record;
// StyledCell;
