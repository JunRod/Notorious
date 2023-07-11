import Image from "next/image"
import styled, {keyframes, css}from "styled-components";

const blurAnimarion = keyframes`
  0% {
    filter: blur(15px);
  }
  50% {
    filter: blur(20px);
  }
  100% {
    filter: blur(15px);
  }
`


const ImageStyled = styled(Image)`
  position: absolute;
  mix-blend-mode: screen;
  animation: ${blurAnimarion} ${props => props.index % 2 === 0 ? "2s" : "1s" } infinite;
  ${props => {
      switch (props.index) {
        case 1:
            return css`
              left: 140px;
              top: -170px;
            `
        case 2:
          return css`
            left: 280px;
            top: -140px;
            `
        case 3:
          return css`
            left: 400px;
            top: -215px;
            `
        case 4:
          return css`
            left: 280px;
            top: -200px;
            `
        case 5:
          return css`
            left: 250px;
            top: -115px;
            `
        case 6:
          return css`
            left: 400px;
            top: -170px;
            `
        case 7:
          return css`
            left: 460px;
            top: -175px;
            `
        case 8:
          return css`
            left: 550px;
            top: -225px;
            `
      }
  }}
  
`

function ImageGenerator({index, color}) {
    return (
        <ImageStyled
            index={index}
            src={`/images/Star${index}-${color}.svg`}
            height={500}
            width={500}
            alt={`/images/Star${index}-${color}.svg`}
        />
    );
}

export default ImageGenerator;