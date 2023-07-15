"use client"

import {Container} from "@styles/CircleStyles"
import {AllStars} from "@components/circle/LightGreen";

const Circle = () =>
    <Container>
        <AllStars/>
        <AllStars FlipHorizontal={true}/>
    </Container>

export default Circle