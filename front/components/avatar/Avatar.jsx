"use client"

import Image from "next/image"
import Styles from "@styles/Avatar.module.css"
import Pixels from "@components/avatar/Pixels";

/*Estilos del avatar pero ya estan aplicando en .___ img*/
const styles = {
    height: "100%",
    width: "100%",
    objectFit: "cover"
}

function Avatar() {
    return (
        <>
            <div className={Styles.shaderBlack}/>
            <div className={Styles.shaderGreen}/>
            <div className={Styles.shaderGreen}/>
            <div className={Styles.shaderPink}/>
            <div className={Styles.container}>
                <div className={Styles.blurEyes}/>
                <div className={Styles.gradientBlack}/>
                <Pixels/>
                <div className={Styles.lightContainer}>
                    <Image
                        src={"/images/Light.svg"}
                        fill
                        alt={"Image"}
                    />
                </div>
                {/*Este es el avatar, tenemos que hacerle prefetch porque se demora en cargar al incioo*/}
                <img src="/images/All.svg" alt="Avatar"/>
            </div>
        </>
    );
}

export default Avatar;