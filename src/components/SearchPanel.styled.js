import styled from 'styled-components';

const StyledSearchPanel = styled.section`
    position: absolute;
    width: 900px;
    height: 600px;
    border: 1px solid hotpink;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    boxshadow: ${({ theme }) => {
        console.log(theme);
    }};
`;

export default StyledSearchPanel;
