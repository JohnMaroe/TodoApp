import styled from 'styled-components';

import img from '../../assets/mountain.jpg';

export const Container = styled.div`
  position: absolute;

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

    margin-left: 190px;
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
      text-align: right;
      width: 250px;

      font-weight: bolder;
      font-size: 12px;
      position: absolute;
      right: 0;
      padding: 0 15px 0 0; 
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  section {
    position: absolute;
    left: 0;
    bottom: 0;

    margin-bottom: 90px;
    margin-left: 190px;

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
    margin-right: 255px;
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

  @media (max-width: 1100px) {
    header {
      margin-left: 90px;
      margin-top: 20px;
    }

    section {
      margin-bottom: 60px;
      margin-left: 90px;
    }

    footer {
      margin-bottom: 60px;
      margin-right: 70px;
    }
  }

  @media (max-width: 750px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: relative;
        top: 350px;

        height: 150px;

        margin: 0;
        margin-left: auto;
        margin-right: auto;

        span {
          position: relative;
        }

        p {
          & :last-child {
            padding: 0 0 9px 2px;
          }
        }
      }

      section {
        margin: 0;

        top: 0;
        padding-bottom: 20px;

        width: 100%;
        height: 280px;

        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
          font-size: 95px;
          margin-top: 50px;
          margin-bottom: 25px;

          span {
            display: none;
          }
        }

        span {
          font-size: 12px;
        }

        div {
          position: absolute;
          top: 0;

          width: 100%;

          display: flex;
          justify-content: space-between;
          align-items: center;

          box-shadow: inset 0 100px 999px 0 rgba(0,0,0,0.5);

          img {
            margin: 10px 0 0 10px;
            transform: scale(0.75);
          }

          p {
            font-size: 12px;
            padding-right: 10px;
            margin: 10px 0 0 10px;
          }
        }
      }

      footer {
        position: relative;
        top: 465px;

        margin: 0 auto 0 auto;
      }
    }
  }
`;