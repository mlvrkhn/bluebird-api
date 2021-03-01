import styled from 'styled-components';

const StyledPreview = styled.div`
    display: ${({ visible }) => (!visible ? 'none' : 'block')};
    width: 150px;
    min-height: 300px;
    position: absolute;
    top: ${({ position }) => position};
    right: -100px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    z-index: 100;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.small};
    background-color: ${({ theme }) => theme.color.green};
`;

export default StyledPreview;
