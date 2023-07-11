import styled, {keyframes, css} from "styled-components"
import ImageGenerator from "@components/circle/ImageGenerator";

const ContainerStars = styled.div`
  ${props => props.FlipHorizontal && css`
    transform: scaleX(-1);
    left: 30px;
    position: relative;
    top: -15px;
  `}; 
`
export const AllStars = ({FlipHorizontal}) => {
    return (
        <ContainerStars FlipHorizontal={FlipHorizontal}>
            {
                    Array(8).fill().map((_, index) => {
                        return (
                            <ImageGenerator key={+index} index={+index} color={FlipHorizontal ? "pink" : "green"}/>
                        )
                    })
            }
        </ContainerStars>
    )
}
