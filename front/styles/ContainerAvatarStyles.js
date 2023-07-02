import styled from "styled-components"
import Image from "next/image"

export const ContainerAvatar = styled.div`
  height: 720px;
  min-width: 1400px;
  position: absolute;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const LightContainer = styled.div`
  position: absolute;
  height: 500px;
  width: 450px;
  z-index: 25;
  filter: blur(9px);
  left: 220px;
  top: 140px;
`

export const ShadesColors = styled.div`
  height: 170px;
  width: 100%;
  background-color: ${props => props.index % 2 == 0 ? "#45E13F" : "#FF7AFF"};
  z-index: 60;
  position: absolute;
  top: ${props => props.index % 2 == 0 ? "100px" : "200px"};
  filter: blur(50px);
  mix-blend-mode: overlay;
`

export const GradientBlack = styled.div`
  height: 240px;
  width: 100%;
  background: linear-gradient( to top, #000000,#181818 ,rgba(40, 40, 40, .7) , transparent) no-repeat;
  bottom: 0;
  z-index: 90;
  position: absolute;
  mix-blend-mode: hard-light;
`

export const ShaderBlack = styled.div`
  background: linear-gradient(to top, black, transparent);
  height: 720px;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 100;
  mix-blend-mode: overlay;
  opacity: 45%;
`

export const BlurEyes = styled.div`
  height: 135px;
  width: 350px;
  left: 540px;
  backdrop-filter: blur(6px) saturate(0%) brightness(1.30);
  position: absolute;
  z-index: 120;
  top: 80px;
`