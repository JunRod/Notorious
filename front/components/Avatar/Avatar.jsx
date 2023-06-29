"use client"

import Image from "next/image"
import {ContainerAvatar,LightContainer} from "@styles/ContainerAvatarStyles";
import Pixels from "@components/Avatar/Pixels";

function Avatar() {
    return (
        <>
            <Pixels/>
            <LightContainer>
                <Image
                    src={"/images/Light.svg"}
                    fill
                    alt={"light"}
                />
            </LightContainer>
            <ContainerAvatar>
                <img src="/images/All.svg" alt="Avatar"/>
            </ContainerAvatar>
        </>
    );
}

export default Avatar;