import styled from 'styled-components';

const StyledRecord = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.medium};
    &:hover {
        background-color: ${({ theme }) => theme.color.green};
        border-radius: ${({ theme }) => theme.borderRadius.small};
    }
    & > div {
        color: ${({ bold }) => (bold ? 'red' : '')};
        text-align: 'left';
    }
`;

export default StyledRecord;
