import React from 'react';
import styled, { keyframes } from 'styled-components';

const hamburguerAnimation = keyframes`
  33% { transform: translateX(-4px); }
  66% { transform: translateX(4px); }
  100% { transform: translateX(0); }
`
const Container = styled.span`
  .hamburguer {
    cursor: pointer;

    position: ${props => props.clock ? 'absolute' : 'static'};
    right: ${props => props.clock && 0};

    display: ${props => props.invisible ? 'none' : 'block'};

    font-size: 30px;
    margin: 24px 30px 0 0;

    &:hover {
      animation-name: ${hamburguerAnimation};
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }
  }
`;

function Hamburguer(props) {
  return (
    <Container {...props}>
      <div className="hamburguer"><i className="fas fa-bars"></i></div>
    </Container>
  );
}

export default Hamburguer;