"use client"

import Image from 'next/image'
import { Container, Gradient, StarDecoration } from "@styles/CircleStyles"

const Circle = () => {

  return (
    <Container>
      <Image
        src="/images/star.svg"
        width="64"
        height="64"
        immutable="true"
      />
    </Container>
  )
}

export default Circle