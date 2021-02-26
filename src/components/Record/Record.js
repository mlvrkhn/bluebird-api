import React from 'react';
import StyledRecord from './Record.styled';

const Record = ({ children, onHover }) => {
    return <StyledRecord onMouseEnter={onHover}>{children}</StyledRecord>;
};

export default Record;
