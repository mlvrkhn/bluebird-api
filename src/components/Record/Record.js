import React from 'react';
import StyledCell from './Cell.styled';
import StyledRecord from './Record.styled';

const Record = ({ data, onHover }) => {
    console.log('🚀 ~ Record ~ data', data);
    const { organisasjonsnummer, navn, hjemmeside, konkurs, email } = data;
    return (
        <StyledRecord onMouseEnter={onHover} bold={konkurs}>
            <StyledCell>{organisasjonsnummer}</StyledCell>
            <StyledCell>{navn}</StyledCell>
            <StyledCell>{hjemmeside ? hjemmeside : 'Not provided'}</StyledCell>
            <StyledCell>{email ? email : 'Not provided'}</StyledCell>
            <StyledCell>{konkurs ? 'BOLD' : 'no konkurs'}</StyledCell>
        </StyledRecord>
    );
};

export default Record;
StyledCell;
