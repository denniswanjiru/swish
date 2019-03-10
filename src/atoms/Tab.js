import styled, { css } from 'styled-components';

export default styled.div`
  height: 100%;
  padding: 5px 20px;
  margin-bottom: 10px;
  display: grid;
  place-items: center;
  font-size: 14px;
  font-weight: 300;

  &:hover {
    border-bottom: solid 3px #b68d4c;
  }
  ${ props => props.active && css`
    border-bottom: solid 3px #b68d4c;
  `}
`;