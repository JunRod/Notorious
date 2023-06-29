import styled from "styled-components"
import Image from "next/image"

export const ContainerAvatar = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 20;

  img {
    height: 100%;
    width: 100%;
    position: relative;
    object-fit: cover;
  }
`

export const LightContainer = styled.div`
  position: absolute;
  height: 650px;
  width: 500px;
  z-index: 25;
  top: 80px;
  left: 170px;
  filter: blur(9px);
`


