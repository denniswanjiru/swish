import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 20px));
  grid-gap: 20px;
  place-items: center;
  padding: 0 48px;
  cursor: pointer;
  border-bottom: solid 1px #ccc;
`;