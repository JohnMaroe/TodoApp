import styled from 'styled-components';
import darkpattern from '../../assets/papyrus-dark.png';
import folderpattern from '../../assets/cork-board.png';

export const Container = styled.div`
  position: absolute;

  background: url(${darkpattern});

  width: 100%;
  height: 100%;

  color: ${props => props.theme.textColor};

  .fa-angle-left {
    position: absolute;
    top: 15px;
    left: 15px;

    font-size: 28px;
    color: #d8a05666;
  }

  main {
    position: relative;

    .bg {
      position: absolute;
      background: url(${folderpattern});
      opacity: 0.3;

      height: 100%;
      width: 100%;
      border-radius: 3.5px;
    }

    position: relative;
    margin: 40px auto 0 auto;
    border-radius: 3.5px;

    width: 87.5%;
    height: 92%;

    background-color: ${props => props.theme.navBg};

    section {
      height: 100%;
      display: flex;
      overflow: hidden;
      position: relative;

      .area {
        height: 100%;
      }

      .nav {
        position: relative;
        z-index: 1;
        width: 20%;
        padding: 12px;
        border-radius: 3.5px 0 0 3.5px;

        box-shadow: 10px 0 5px rgba(0,0,0,0.4);
        color: rgba(0,0,0, 0.7);

        .nav__title {
          display: flex;
          justify-content: center;
          align-items: baseline;
          margin: 24px 0 32px 10px;

          cursor: default;

          p {
            display: inline;
            font-size: 32px;
            margin-right: 12px;
          }
          img {
            width: 32px;
            height: 32px;
          }
        }

        ul {
          width: 100%;
          background-color: #95784677;
          border-radius: 4px;

          li {
            display: flex;
            align-items: center;
            justify-content: left;
            position: relative;
            list-style: none;
            
            width: 100%;
            height: 56px;
            padding: 12px;
            padding-left: 32px;

            font-size: 18px;
            font-weight: 900;

            cursor: pointer;

            &:hover {
              background-color: #957846bb;

              &::before {
                opacity: 1;
              }
            }
            &::before {
              content: '';
              position: absolute;
              opacity: 0;

              left: 8px;
              background-color: rgba(0,0,0,0.5);

              width: 4px;
              height: 28px;
              border-radius: 12px;
            }

            i {
              font-size: 18px;
              margin-right: 12px;
            }
          }
        }

        footer {
          position: absolute;
          bottom: 12px;

          display: flex;
          align-items: center;
          justify-content: center;
          width: 91.5%;

          border-top: 1px solid rgba(0,0,0, 0.7);

          p {
            font-size: 24px;

            span {
              font-size: 34px;
              font-weight: 900;
              margin-right: 6px;
            }
          }
        }
      }

      .main {
        width: 80%;
        background-color: ${props => props.theme.mainBg};
        
        border-radius: 0 3.5px 3.5px 0;
        padding: 15px 32px 5px 32px;

        display: flex;
        flex-direction: column;

        header {
          width: 100%;
          height: 100px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          margin-bottom: 24px;
        }

        h1 {
          font-size: 48px;
        }

        button {
          position: relative;
          margin-right: 15px;
          font-size: 20px;
          width: 36px;
          cursor: pointer;

          outline: none;
          border: none;
          padding: 8px;
          border-radius: 5px;
          background-color: rgba(0,0,0,0.5);
          color: ${props => props.theme.textColor};
        }

        .todos {
          width: 100%;

          ul {
            background-color: transparent;
            border-radius: 9px;

            max-height: 600px;
            overflow: auto;
          }
        }
      }
    }
  }
`;