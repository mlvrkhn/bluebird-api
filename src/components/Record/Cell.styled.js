import styled from 'styled-components';

const StyledCell = styled.div`
    width: 100%;
    padding: 5px;
    & > :not(:first-child),
    :not(:last-child) {
        margin: 0 10px;
    }
`;

export default StyledCell;
