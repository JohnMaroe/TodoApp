import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

import folderpattern from '../../../assets/papyrus-dark.png';


const Ad = styled.div`
  height: 100%;
  width: 250px;
  transition: 185ms all ease;

  position: absolute;
  right: -260px;

  border-radius: 0 3.5px 3.5px 0;
  background-color: #c5ad6f;
  color: rgba(0,0,0, 0.7);

  box-shadow: -10px 0 5px rgba(0,0,0,0.4);

  div {
    padding: 28px;
  }

  .bg {
    position: absolute;
    background: url(${folderpattern});
    opacity: 0.25;

    height: 100%;
    width: 100%;
  }
`;

function Adjustments({ open, children }) {
  const adRef = useRef(null);

  useEffect(() => {
    open ? adRef.current.style.right = '0' : adRef.current.style.right = '-260px'
  }, [open]);

  return (
    <Ad ref={adRef}>
        <div className="bg"></div>
        {children}
    </Ad>
  )
};

export default Adjustments;