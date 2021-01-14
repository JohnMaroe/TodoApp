import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 90px;
  right: 35px;

  background: #212526;
  width: 245px;
  height: 350px;
  border: 1px solid #323737;
  border-radius: 5px;
  padding: 20px;

  .div {
    width: 25px;
    height: 25px;
    margin: 5px;
  }

  .first {
    background-color: red;
  }
  .second {
    background: blue;
  }
`;

function DisplayConfig({ open }) {
  if (!open) return null;

  return (
    <Container>
      <p>Theme</p>
      <div className="themes">
        <div className="div first"></div>
        <div className="div second"></div>
      </div>
    </Container>
  );
}

export default DisplayConfig;