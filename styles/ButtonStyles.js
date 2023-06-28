import styled from "styled-components";

export const Text = styled.div`
  background: radial-gradient(farthest-side at 118px 7px, #FFF8FF, #FF5AFF 70% );
  font-size: 2.3rem;
  letter-spacing: .1rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1rem;
  z-index: 10;
`

export const Effect = styled.div`
  position: absolute;
  height: 10px;
  width: 90px;
  background-color: white;
  filter: blur(1.2rem) opacity(20%);
  bottom: 3.8rem;
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: radial-gradient( farthest-side at 118px 0px, #ffe7ff 20%, #FF5AFF);

  &::before {
    position: absolute;
    content: "";
    height: 85%;
    width: 97.5%;
    background-color: black;
  }

  &::after {
    content: "";
    height: 80%;
    top: 0;
    width: 100%;
    position: absolute;
    background: radial-gradient(farthest-side at 118px 0px, #FFF8FF 20%, #FF5AFF 70%);
    z-index: -10;
    filter: blur(2rem);
  }
`