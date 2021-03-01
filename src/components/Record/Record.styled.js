import styled from 'styled-components';

const StyledRecord = styled.div`
    padding: 5px;
    display: flex;
    position: relative;
    margin: 10px 0;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.medium};
    border: ${({ bold }) => (bold ? '1px solid red' : 'none')};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.inner};
        border-radius: ${({ theme }) => theme.borderRadius.small};
    }
    & > div {
        font-weight: ${({ bold }) => (bold ? '900' : 'normal')};
    }
`;

export default StyledRecord;
