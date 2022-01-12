import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  perspective: 1000px;

  .front.flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
`

type Props = {
  flipped: boolean
}

const sharedStyles = css`
  width: 230px;
  height: 230px;
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

export const FrontImg = styled.img<Props>`
  ${sharedStyles}

  z-index: ${(props) => (props.flipped ? 2 : 1)};
  transform: ${(props) => (props.flipped ? "rotate(0deg)" : "rotateY(180deg)")};
`

export const BackImg = styled.img<Props>`
  ${sharedStyles}

  z-index: ${(props) => (props.flipped ? 1 : 2)};
  transform: ${(props) =>
    props.flipped ? "rotateY(180deg)" : "rotate(360deg)"};
  position: absolute;
  top: 0px;
  left: 0px;
`
