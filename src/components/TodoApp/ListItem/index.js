import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  li {
    list-style: none;
    height: 54px;
    background-color: #d8a05699;
    border-radius: 8px;

    padding: 18px 34px;
    margin-bottom: 16px;
    transition: all 100ms ease;

    position: relative;

    cursor: pointer;

    &:hover {
      background-color: #d8a05666;
    }
    p {
      margin-left: 35px;
    }

    i {
      position: absolute;
      right: 18px;
      top: 18px;

      font-size: 18px;
      cursor: pointer;
    }

    input[type="checkbox"] {
      display: none;

      &:checked + label div {
        background-color: #444e;
      }
    }

    label {
      position: absolute;
      top: 13px;
      left: 13px;
      
      width: 30px;
      height: 30px;
      border-radius: 50%;

      background-color: rgba(0,0,0,0.8);

      cursor: pointer;

      div {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        position: absolute;
        top: 7.5px;
        left: 7.5px;

        background-color: transparent;
      }
    }
  }
`;

function ListItem({ children, id }) {
  return (
    <Container>
      <li>
        <input type="checkbox" name={id} id={id} />
        <label htmlFor={id}><div></div></label>
        <p>{children}</p>
        <i className="far fa-star"></i>
      </li>
    </Container>
  );
}

export default ListItem;