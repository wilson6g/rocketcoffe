import styled from "styled-components";
import { pixelToRem } from "../../utils/pxToRem";

export const Container = styled.header`
  height: ${pixelToRem(50)};
  padding: 2rem;
`;

export const ContentHeader = styled.div`
  max-width: 100%;
  height: ${pixelToRem(50)};
  margin: 0 auto;
  padding: 2rem ${pixelToRem(350)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: ${pixelToRem(43.06)};
    height: ${pixelToRem(50)};
  }

  .container-get-coffee {
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: transparent;
      color: var(--text-color);
      width: 150px;
      height: 37px;

      border: 1px solid #8257e5;
      box-sizing: border-box;
      border-radius: 6px;
    }

    .blur {
      position: absolute;
      height: 321px;
      top: -63px;

      background: #996dff;
      filter: blur(270px);
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  
  a {
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 0.02rem;
    line-height: 19.12px;
  }

  & > a {
    margin-left: 5rem;
  }
`;
