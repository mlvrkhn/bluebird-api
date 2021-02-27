import styled from 'styled-components';

const StyledSearchPanel = styled.section`
    position: absolute;
    display: block;
    width: 900px;
    min-height: 500px;
    margin: auto;
    left: 50%;
    margin-top: 20px;
    transform: translate(-50%);
    padding: ${({ theme }) => theme.innerPadding.xlarge};
    box-shadow: ${({ theme }) => theme.boxShadow.outer};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default StyledSearchPanel;
