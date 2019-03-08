import styled, { css } from 'styled-components';

export default styled.div`
  width: 98%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 20% 1fr max-content;
  grid-gap: 5px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background: #eee;
  }

  ${props => props.active && css`
    border-bottom: solid 4px #b68d4c;
  `}
`;