import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: var(--loader-size);
  height: var(--loader-size);
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
`;

export const BaseSquare = styled.div`
  height: calc(50% - var(--loader-square-gap));
  width: calc(50% - var(--loader-square-gap));
  border-radius: var(--loader-square-border-radius);
  background-color: var(--loader-background-color);
  position: absolute;
`;

export const expandHeight = keyframes`
  0% {
  }
  100% {
    height: 100%;
  }
`;

const goRight = keyframes`
  0% {
    top: 0;
    left: 0;
    width: calc(50% - var(--loader-square-gap));
  }
  50% {
    width: 100%;
  }
  100% {
    top: 0;
    right: 0;
    left: unset;
    width: calc(50% - var(--loader-square-gap));
  }
`;

const goDown = keyframes`
  0% {
    top: 0;
    right: 0;
    width: calc(50% - var(--loader-square-gap));
  }
  50% {
    height: 100%;
  }
  100% {
    top: unset;
    right: 0;
    bottom: 0;
    height: calc(50% - var(--loader-square-gap));
  }
`;

const goLeft = keyframes`
  0% {
    right: 0;
    bottom: 0;
    width: calc(50% - var(--loader-square-gap));
  }
  50% {
    width: 100%;
  }
  100% {
    right: unset;
    bottom: 0;
    left: 0;
    width: calc(50% - var(--loader-square-gap));
  }
`;

const goUp = keyframes`
  0% {
    left: 0;
    bottom: 0;
    height: calc(50% - var(--loader-square-gap));
  }
  50% {
    height: 100%;
  }
  100% {
    top: 0;
    left: 0;
    height: calc(50% - var(--loader-square-gap));
  }
`;

export const FirstSquare = styled(BaseSquare)`
  animation: ${goRight} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 1) forwards,
    ${goDown} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 4) forwards,
    ${goLeft} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 7) forwards,
    ${goUp} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 10) forwards;
`;
export const SecondSquare = styled(BaseSquare)`
  right: 0;
  height: 100%;
  animation: ${goDown} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 0) forwards,
    ${goLeft} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 3) forwards,
    ${goUp} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 6) forwards,
    ${goRight} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 9) forwards,
    ${expandHeight} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 12) forwards;
`;
export const ThirdSquare = styled(BaseSquare)`
  bottom: 0;
  animation: ${goUp} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 2) forwards,
    ${goRight} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 5) forwards,
    ${goDown} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 8) forwards,
    ${goLeft} var(--loader-time-unit) ease-in-out
      calc(var(--loader-time-unit) * 11) forwards;
`;
