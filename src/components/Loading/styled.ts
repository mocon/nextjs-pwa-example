import styled from 'styled-components'
import { Box } from 'component-library-tsdx-example'

export const LoadingStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  .GridLoader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .GridLoader .Box {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: currentColor;
    animation: grid 1.2s linear infinite;
  }

  .GridLoader .Box:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }

  .GridLoader .Box:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }

  .GridLoader .Box:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }

  .GridLoader .Box:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }

  .GridLoader .Box:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }

  .GridLoader .Box:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }

  .GridLoader .Box:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }

  .GridLoader .Box:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }

  .GridLoader .Box:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }

  @keyframes grid {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }
  }
`
