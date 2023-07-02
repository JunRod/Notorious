import styled, {keyframes, css} from "styled-components"

const show1 = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`

const show2 = keyframes`
  0% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

export const Pixel = styled.div`
  height: 44px;
  width: 44px;
  background-color: ${props => {
    switch (props.index) {
      case 0:
        return "#f3f3f3";
      case 1:
        return "#ffffff";
      case 2:
        return "#ffffff";
      case 3:
        return "#323232";
      case 4:
        return "#ffffff";
      case 6:
        return "#393939";
      case 7:
        return "#202020";
      case 8:
        return "#202020";
      case 9:
        return "#2c2c2c";
      case 10:
        return "#1b1b1b";
    }
  }};

  position: absolute;
  z-index: 26;
  top: ${props => {
    switch (props.index) {
      case 0:
        return "85px";
      case 1:
        return "85px";
      case 2:
        return "130px";
      case 3:
        return "218px";
      case 4:
        return "218px";
      case 6:
        return "260px";
      case 7:
        return "261px";
      case 8:
        return "305px";
      case 9:
        return "349px";
      case 10:
        return "305px";
    }
  }};
  right: ${props => {
    switch (props.index) {
      case 0:
        return "380px";
      case 1:
        return "424px";
      case 2:
        return "401px";
      case 3:
        return "370px";
      case 4:
        return "330px";
      case 6:
        return "350px";
      case 7:
        return "538px";
      case 8:
        return "555px";
      case 9:
        return "623px";
      case 10:
        return "597px";
    }
  }};
  animation-name: ${props => props.index % 2 == 0 ? css`${show1}`: css`${show2}`};
  animation-iteration-count: infinite;
  animation-duration: 1s;
`;
