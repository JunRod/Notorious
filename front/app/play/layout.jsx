"use client"
import NotoriousStyles from "@styles/NotoriousStyles.module.css"
import {useContext, useState} from "react";
import {orbitron} from "@fonts";
import DocumentationStyle from "@styles/DocumentationStyles.module.css";
import words from "./words.json";
import {ContextNotorious} from "@app/ProviderPage";

function Page({children}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const {updateWord} = useContext(ContextNotorious)

    const fetchWordsInEnglish = () => {
        fetch("http://localhost:8080/words?message=hello&bandera=true")
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    const handleActive = (index, word) => {
        setActiveIndex(index === activeIndex ? 0 : index);
        updateWord(word)
    };

    return (
            <div className={NotoriousStyles.container}>
                <div className={`${DocumentationStyle.container} ${NotoriousStyles.form}`}>
                    {
                        Object.keys(words).map((key, index) => {
                            return (
                                <div
                                    className={`${orbitron.className} ${DocumentationStyle.seccion} ${index === activeIndex && DocumentationStyle.onSeccion}`}

                                    onClick={() => handleActive(index, key)}
                                >
                                    {key}
                                </div>
                            );
                        })
                    }
                </div>
                {children}
            </div>
    );
}


/*<div
    className={`${DocumentationStyle.content} ${
        index === 0 ? DocumentationStyle.on : index === activeIndex ? DocumentationStyle.on : DocumentationStyle.off}`}
>
    {words[key]}
</div>*/

export default Page;