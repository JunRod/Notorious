"use client"

import Image from "next/image"
import {
    BlurEyes,
    ContainerAvatar,
    GradientBlack,
    LightContainer,
    ShaderBlack,
    ShadesColors
} from "@styles/ContainerAvatarStyles";
import Pixels from "@components/Avatar/Pixels";
import ShadersGenerator from "@components/Avatar/ShadersGenerator";

function Avatar() {
    return (
        <>
            <ShaderBlack/>
            <ShadersGenerator/>
            <ContainerAvatar>
                <BlurEyes/>
                <GradientBlack/>
                <Pixels/>
                <LightContainer>
                    <Image
                        src={"/images/Light.svg"}
                        fill
                        alt={"light"}
                    />
                </LightContainer>
                <img src="/images/All.svg" alt="Avatar"/>
            </ContainerAvatar>
        </>
    );
}

export default Avatar;