import styled from 'styled-components';

const StyledCell = styled.td`
    height: 40px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    background-color: ${({ theme }) => theme.color.blue};
`;
export default StyledCell;
