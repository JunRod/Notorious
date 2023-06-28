import styled, {keyframes, css} from "styled-components"
import ImageGenerator from "@components/Circle/ImageGenerator";

const ContainerStars = styled.div`
  ${props => props.FlipHorizontal && css`
    transform: scaleX(-1);
    left: 30px;
    position: relative;
  `}; 
`
export const AllStars = ({FlipHorizontal}) => {
    return (
        <ContainerStars FlipHorizontal={FlipHorizontal}>
            <ImageGenerator index={1} color={FlipHorizontal ? "pink" : "green"}/>
            <ImageGenerator index={2} color={FlipHorizontal ? "pink" : "green"}/>
            <ImageGenerator index={3} color={FlipHorizontal ? "pink" : "green"}/>
            <ImageGenerator index={4} color={FlipHorizontal ? "pink" : "green"}/>
            <ImageGenerator index={5} color={FlipHorizontal ? "pink" : "green"}/>
            <ImageGenerator index={6} color={FlipHorizontal ? "pink" : "green"}/>
            <ImageGenerator index={7} color={FlipHorizontal ? "pink" : "green"}/>
            <ImageGenerator index={8} color={FlipHorizontal ? "pink" : "green"}/>
        </ContainerStars>
    )
}
