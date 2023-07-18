"use client"

import {useEffect, useState} from "react";
import DocumentationStyle from "@styles/DocumentationStyles.module.css";
import {orbitron} from "@fonts";
import data from "@components/data.json"

function Documentation() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleActive = (index) => {
        setActiveIndex(index === activeIndex ? 0 : index);
    };

    return (
        <div className={DocumentationStyle.container}>
            {Object.keys(data).map((key, index) => {
                return (
                    <div
                        key={key}
                        className={` ${orbitron.className} ${DocumentationStyle.seccion} ${index === activeIndex && DocumentationStyle.onSeccion}`}
                        onClick={() => handleActive(index)}
                    >
                        {key}
                        <div
                            className={`${DocumentationStyle.content} ${
                                index === 0 ? DocumentationStyle.on : index === activeIndex ? DocumentationStyle.on : DocumentationStyle.off }`}
                        >
                            {data[key]}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Documentation;