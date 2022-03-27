import styled from "styled-components";
import { pixelToRem } from "../../utils/pxToRem";

export const Container = styled.main`
  margin: 0 auto;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8rem 100px;

  h1 {
    color: var(--text-color);
  }

  .coffe-img {
    width: 70%;
    height: 50%;
    /* width: ${pixelToRem(1000)};
    height: ${pixelToRem(550.47)}; */
    margin-top: -5rem;
  }

  .great-neon {
    font-weight: 700;
    font-style: normal;
    font-size: 80px;
    letter-spacing: -0.03em;

    line-height: ${pixelToRem(109.28)};
    letter-spacing: -3%;
    color: transparent;
    /* border: 2px solid #8257e5; */
    text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button),
      -1px 1px 0 var(--button), 1px 1px 0 var(--button);
  }
`;
