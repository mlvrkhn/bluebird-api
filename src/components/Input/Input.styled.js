import styled from 'styled-components';

const StyledInput = styled.input`
    width: 400px;
    height: 60px;
    border: none;
    margin: 0 20px;
    outline: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue};
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    color: ${({ theme }) => theme.color.green};
    padding: ${({ theme }) => theme.innerPadding.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.inner};
    padding-left: 30px;
    &:focus {
        border: 1px solid;
        border-color: ${({ theme }) => theme.color.green};
        color: ${({ theme }) => theme.color.green};
        outline: 0;
    }
    &::placeholder {
        font-size: ${({ theme }) => theme.fontSize.medium};
        color: ${({ theme }) => theme.color.green};
        opacity: 0.7;
    }
`;
export default StyledInput;
