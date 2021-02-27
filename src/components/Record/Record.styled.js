import styled from 'styled-components';

const StyledRecord = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    font-size: ${({ theme }) => theme.fontSize.small};
    &:hover {
        /* border-bottom: 1px solid ${({ theme }) => theme.color.green}; */
        background-color: ${({ theme }) => theme.color.green};
        border-radius: ${({ theme }) => theme.borderRadius.small};
    }
    & > p {
        font-weight: ${({ bold }) => {
            if (!bold) {
                return '900';
            }
        }};
    }
`;

export default StyledRecord;
