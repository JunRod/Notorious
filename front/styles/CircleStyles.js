import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 30px;
  background: radial-gradient(farthest-corner at 1000px -200px,
  #fff 20%,
  transparent 60%);
  width: 1900px;
  height: 700px;
  border-radius: 60%;
  
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: radial-gradient(farthest-corner at 950px 50px,
    #fff,
    transparent 68%);
    border-radius: 60%;
  }

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(0.25turn,
    #0ab600 0%,
    #63ff59 45%,
    #ff75ed 55%,
    #ff0dff 100%);
    mix-blend-mode: color-burn;
    border-radius: 60%;
    left: 0;
    border: 6px solid rgba(255, 255, 255, .7);
  }
`;
