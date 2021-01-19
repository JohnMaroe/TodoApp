import React, { useRef, useEffect } from 'react';
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

  p {
    margin-bottom: 8px;
  }

  .themes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  .div {
    width: 45px;
    height: 45px;
    margin: 7px;

    cursor: pointer;
  }
`;

function DisplayConfig({ open, adjustOpen }) {
  const displayRef = useRef(null);

  const colors = ['red', 'rgb(0,0,256)', 'wheat', '#BADA55', 'rgba(50,89,103)', 'purple', 'lightpink', 'yellow'];
  
  useEffect(() => {
    displayRef.current.style.position = 'absolute';
    adjustOpen ? displayRef.current.style.right = '250px' : displayRef.current.style.right = '0';
  }, [adjustOpen]);

  return (
    <div ref={displayRef}>
      { open &&
        <Container>
          <p>Theme</p>
          <div className="themes">
            {colors.map((color, index) => {
              return <div key={index} className="div" style={{ backgroundColor: color }}></div>
            })}
          </div>
        </Container> 
      }
    </div>
  );
}

export default DisplayConfig;