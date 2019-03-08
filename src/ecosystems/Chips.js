import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 20px));
  grid-gap: 10px;
  justify-content: end;
  grid-column: 2 / 12;
`;