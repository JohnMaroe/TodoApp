import styled from 'styled-components';
import darkpattern from '../../assets/papyrus-dark.png';
import folderpattern from '../../assets/cork-board.png';

export const Container = styled.div`
  position: absolute;

  background: url(${darkpattern});

  width: 100%;
  height: 100%;

  color: ${props => props.theme.textColor};

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
        z-index: 1;
        width: 20%;
        padding: 28px;
        border-radius: 3.5px 0 0 3.5px;

        box-shadow: 10px 0 5px rgba(0,0,0,0.4);
        color: rgba(0,0,0, 0.7);
      }

      .main {
        width: 80%;
        background-color: ${props => props.theme.mainBg};
        
        border-radius: 0 3.5px 3.5px 0;
        padding: 15px 23px 5px 32px;

        display: flex;
        flex-direction: column;

        header {
          width: 100%;
          height: 100px;

          display: flex;
          justify-content: space-between;
          align-items: center;
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
      }
    }
  }
`;