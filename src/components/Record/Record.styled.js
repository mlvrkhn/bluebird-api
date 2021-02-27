import styled from 'styled-components';

const StyledRecord = styled.div`
    padding: 5px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.medium};
    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.inner};
        border-radius: ${({ theme }) => theme.borderRadius.small};
    }
    & > div {
        color: ${({ bold }) => (bold ? 'red' : '')};
        text-align: 'left';
    }
`;

export default StyledRecord;
