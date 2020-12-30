import styled from 'styled-components';

import img from '../../assets/mountain.jpg';

export const Container = styled.div`
  color: #eee;
  background: url(${img}) center no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  opacity: 1;
  cursor: default;

  header {
    position: absolute;
    top: 0;
    left: 0;

    width: 450px;

    margin-left: 210px;
    margin-top: 30px;
    padding: 35px;

    border-radius: 10px;

    &:hover {
      background: rgba(0,0,0,0.4);
    }

    p {
      margin-bottom: 25px;
      position: relative;

      i {
        font-size: 10px;
        position: absolute;
        
        &:first-child {
          top: -4px;
          left: -15px;
        }
        &:last-child {
          float: right;
          padding: 10px 0 0 4px;
        }
      }
    }

    span {
      font-weight: bolder;
      font-size: 12px;
      position: absolute;
      right: 0;
      padding: 0 15px 0 0; 
    }
  }

  section {
    position: absolute;
    left: 0;
    bottom: 0;

    margin-bottom: 90px;
    margin-left: 210px;

    display: flex;
    flex-direction: column;
    align-items: left;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
      }

      p {
        font-size: 24px;
        font-weight: 50;
        margin-left: 20px;
      }
    }

    h1 {
      font-size: 155px;
      font-weight: 900;
      text-align: left;

      span {
        font-weight: 50;
      }
    }

    span {
      font-size: 28px;
      font-weight: 700;
    }
  }

  footer {
    color: rgba(0,0,0,0.8);
    background-color: #eee;
    border-radius: 30px;

    position: absolute;
    right: 0;
    bottom: 0;

    margin-bottom: 90px;
    margin-right: 280px;
    padding: 20px;

    width: 140px;
    height: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    p {
      font-weight: 700;
      font-size: 20px;
    }

    button {
      color: #eee;
      background-color: rgba(0,0,0,0.7);
      border-radius: 50%;
      font-weight: 700;
      text-align: center;

      width: 30px;
      height: 30px;

      cursor: pointer;
    }
  }
`;