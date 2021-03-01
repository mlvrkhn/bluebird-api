import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import StyledPreview from './Preview.styled';

const Preview = () => {
    const { visible, coursorOffsetY, previewData } = useSelector(
        (state) => state
    );

    const { organisasjonsnummer, konkurs, antallAnsatte, navn } = previewData;

    return (
        <StyledPreview visible={visible} position={coursorOffsetY}>
            <ul>
                <li>
                    Org. nr: {organisasjonsnummer ? organisasjonsnummer : ''}
                </li>
                <li>Konkurs: {konkurs ? 'Ja' : 'Nei'}</li>
                <li>AntallAnsatte: {antallAnsatte ? antallAnsatte : '0'}</li>
                <li>Navn: {navn ? navn : ''}</li>
            </ul>
        </StyledPreview>
    );
};

Preview.propTypes = {
    visible: PropTypes.bool,
    popUpPosition: PropTypes.array,
    previewData: PropTypes.object,
};

export default Preview;
