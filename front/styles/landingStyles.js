import styled from "styled-components";

export const BodyStyles = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(closest-side,#000000 20%, #0E0E0E 80%) no-repeat;
  height: 1080px;
  width: 100%;
  left: 0;
  top: 0;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 35%;
    width: 100%;
    background: url("/images/grid.svg");
    background-position: center;
    opacity: .2;
    mask: radial-gradient(circle at center, black 50%, transparent 100%);
  }
  `