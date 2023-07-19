"use client"

import {AllStars} from "@components/circle/LightGreen";
import Styles from "@styles/circle.module.css"

const Circle = () =>
    <div className={Styles.container}>
        <AllStars/>
        <AllStars FlipHorizontal={true}/>
    </div>

export default Circle