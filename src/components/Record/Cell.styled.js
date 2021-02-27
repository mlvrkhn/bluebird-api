import styled from 'styled-components';

const StyledCell = styled.div`
    width: 200px;
    padding: 5px;
    & > :not(:first-child) {
        margin: 0 10px;
    }
    & > :not(:last-child) {
        margin: 0 10px;
    }
`;

export default StyledCell;
