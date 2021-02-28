import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import StyledPreview from './Preview.styled';

const Preview = () => {
    const { visible, popUpPosition, previewData } = useSelector(
        (state) => state
    );

    const { organisasjonsnummer, konkurs, antallAnsatte, navn } = previewData;

    return (
        <StyledPreview visible={visible} position={popUpPosition}>
            <h1>Preview</h1>
            <ul>
                <li>
                    Organisasjonsnummer:{' '}
                    {organisasjonsnummer ? organisasjonsnummer : ''}
                </li>
                <li>Konkurs: {konkurs ? konkurs : ''}</li>
                <li>AntallAnsatte: {antallAnsatte ? antallAnsatte : ''}</li>
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
