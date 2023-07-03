"use client"

import { orbitron } from "@fonts";
import {  ContainerButton, Effect, Text } from "@styles/ButtonStyles";

const Button = ({children}) => {
  return (
    <ContainerButton>
        <Effect/>
        <Text
            href={"play"}
            className={orbitron.className}
            style={{fontWeight: 600}}
        >
            {children}
        </Text>
    </ContainerButton>
  )
}

export default Button