import styled from 'styled-components';

export default styled.div`
  margin-top: 20px;
  width: 100%!important;
  grid-column: 2 / 12;
  min-height: 75vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`;