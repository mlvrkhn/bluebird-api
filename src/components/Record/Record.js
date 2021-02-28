import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import StyledCell from './Cell.styled';
import StyledRecord from './Record.styled';
import {
    displayDetailedInfo,
    hideDetailedInfo,
} from '../../modules/brreg/actions';

const Record = ({ data, onHover }) => {
    const { organisasjonsnummer, navn, hjemmeside, konkurs, email } = data;
    const dispatch = useDispatch();

    return (
        <StyledRecord
            onMouseEnter={(e) => dispatch(displayDetailedInfo(e, data))}
            onMouseLeave={() => dispatch(hideDetailedInfo())}
            bold={konkurs}
        >
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
};

export default Record;
