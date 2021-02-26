import React from 'react';
import StyledCell from './Cell.styled';

const Cell = ({ children }) => {
    return <StyledCell>{children}</StyledCell>;
};

export default Cell;
