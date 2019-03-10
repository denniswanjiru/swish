import styled from 'styled-components';

export default styled.ul`
  display: grid;
  justify-content: end;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 20px));
  grid-gap: 10px;
  height: 100%;
`;
