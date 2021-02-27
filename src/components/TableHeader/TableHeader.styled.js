import styled from 'styled-components';

const StyledTableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.green};
    font-size: ${({ theme }) => theme.fontSize.large};
    & > div {
        margin-right: 70px;
    }
`;

export default StyledTableHeader;
