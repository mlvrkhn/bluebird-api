import React from 'react';
import { PropTypes } from 'prop-types';

import StyledCell from './Cell.styled';
import StyledRecord from './Record.styled';

const Record = ({ data, onHover }) => {
    const { organisasjonsnummer, navn, hjemmeside, konkurs, email } = data;

    return (
        <StyledRecord onMouseEnter={onHover} bold={konkurs}>
            <StyledCell>{organisasjonsnummer}</StyledCell>
            <StyledCell>{navn}</StyledCell>
            <StyledCell>
                {hjemmeside ? (
                    <a href={`https://${hjemmeside}`}>{hjemmeside}</a>
                ) : (
                    ''
                )}
            </StyledCell>
            <StyledCell>
                {email ? <a href={'mailto:' + email}>{email}</a> : 'N/A'}
            </StyledCell>
        </StyledRecord>
    );
};

Record.propTypes = {
    data: PropTypes.object.isRequired,
    onHover: PropTypes.func.isRequired,
};

export default Record;
