import styled from 'styled-components';

const StyledTableHeader = styled.div`
    display: flex;
    color: ${({ theme }) => theme.color.green};
    font-size: ${({ theme }) => theme.fontSize.large};
    & > div {
        width: 100%;
        text-align: center;
    }
`;

export default StyledTableHeader;
