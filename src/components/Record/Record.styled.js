import styled from 'styled-components';

const StyledRecord = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.large};
`;

export default StyledRecord;
