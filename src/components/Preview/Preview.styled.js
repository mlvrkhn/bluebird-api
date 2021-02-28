import styled from 'styled-components';

const StyledPreview = styled.div`
    display: ${({ visible }) => (!visible ? 'none' : 'block')};
    width: 200px;
    top: 200px;
    right: -100px;
    /* top: ${({ position }) => position[1]};
    right: ${({ position }) => position[0]}; */
    box-shadow: ${({ theme }) => theme.boxShadow.outer};
    z-index: 100;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.small};
    background-color: ${({ theme }) => theme.color.blue};
`;

export default StyledPreview;
