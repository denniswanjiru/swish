import styled, { css } from 'styled-components';

export default styled.li`
  list-style: none;
  padding: 0 20px;
  height: 100%!important;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
   border-bottom: solid 3px #3b2b5e;
  }

  ${ props => props.active && css`
    border-bottom: solid 3px #3b2b5e;
  `}
`;