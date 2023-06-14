import styled from "styled-components"

export const Notor = styled.div`
  font-size: 12.5rem;
  letter-spacing: 3rem;
`

export const Ious = styled.div`
  font-size: 10.1rem;
  padding-bottom: .6rem;
  letter-spacing: 3rem;
`

export const TitleComponent = styled.div`
  position: absolute;
  display: flex;
  color: white;
  align-items: center;
`

export const TitleComponents3DEffect = styled(TitleComponent)`
  left: 6.5rem;
  top: 3.6rem;
  height: 9.6rem;
`;

export const TitleComponentsBlur = styled(TitleComponents3DEffect)`
  left: 5.9rem;
  top: 3.02rem !important;
  filter: blur(8px);
  mix-blend-mode: hard-light;
`;

export const Container = styled.div`
  position: absolute;
  /* position: relative; */
  left: ${props => props.top ? "0rem" : "2rem"};;
  height: 16.2rem;
  width: 100%;
  -webkit-mask: linear-gradient(${props => props.top ? "to top" : "to bottom"},transparent 50%, black 50%);

  display: flex;
  justify-content: center;
`

export const Cursor = styled.div`
  position: relative;
  height: 16rem;
  width: 130rem;
  display: flex;
  justify-content: center;

`

export const Line = styled.div`
  position: absolute;
  height: 5rem;
  width: 118rem;
  top: 12.4rem;
  filter: ${props => props.blur ? "blur(8px)" : "none"};
  mix-blend-mode: ${props => props.blur ? "hard-light" : "none"};;
`