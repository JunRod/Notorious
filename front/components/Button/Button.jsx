"use client"

import { orbitron } from "@fonts";
import {  ContainerButton, Effect, Text } from "@styles/ButtonStyles";

const Button = () => {
  return (
    <ContainerButton>
        <Effect/>
        <Text className={orbitron.className}>
          Prueba Notorious
        </Text>
    </ContainerButton>
  )
}

export default Button