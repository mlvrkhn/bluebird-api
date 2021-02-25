import styled from 'styled-components';

const StyledInput = styled.input`
    width: 400px;
    height: 60px;
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    margin-top: 60px;
    padding: ${({ theme }) => theme.innerPadding.medium};
    &:focus {
        border: 0;
        outline: 0;
    }
`;
export default StyledInput;
