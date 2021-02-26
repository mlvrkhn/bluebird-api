import styled from 'styled-components';

const StyledSearchPanel = styled.section`
    position: absolute;
    width: 900px;
    height: 600px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: ${({ theme }) => theme.innerPadding.xlarge};
    box-shadow: ${({ theme }) => theme.boxShadow.outer};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default StyledSearchPanel;
