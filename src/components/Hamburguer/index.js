import React, { useState } from 'react';
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

  .dialog {
    width: 385px;
    height: 250px;
    position: absolute;
    right: 30px;
    top: 60px;

    background-color: black;
    padding: 12px;
    border-radius: 8px;
  }
`;

function Hamburguer(props) {
  const [hamburguerDiv, setHamburguerDiv] = useState(false);

  return (
    <Container {...props}>
      <div className="hamburguer" onClick={() => setHamburguerDiv(!hamburguerDiv)}>
        <i className="fas fa-bars"></i>
      </div>
      {hamburguerDiv && <div className="dialog">Made with love by John</div>}
    </Container>
  );
}

export default Hamburguer;