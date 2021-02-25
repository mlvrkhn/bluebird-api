import styled from 'styled-components';

const StyledSearchPanel = styled.section`
    position: absolute;
    width: 900px;
    height: 600px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: ${({ theme }) => {
        console.log(theme.boxShadow.outer);
        return theme.boxShadow.outer;
    }};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export default StyledSearchPanel;
