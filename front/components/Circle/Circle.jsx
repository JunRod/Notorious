"use client"

import Image from 'next/image'
import { Container, } from "@styles/CircleStyles"
import {AllStars} from "@styles/LightGreen";

const Circle = () => {

  return (
    <Container>
        <AllStars/>
        <AllStars FlipHorizontal={true}/>
    </Container>
  )
}

export default Circle