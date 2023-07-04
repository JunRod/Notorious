"use client"
import NotoriousStyles from "@styles/NotoriousStyles.module.css"
import {useContext, useState} from "react";
import {orbitron} from "@fonts";
import DocumentationStyle from "@styles/DocumentationStyles.module.css";
import words from "./words.json";
import {ContextNotorious} from "@app/ProviderPage";
import Link from "next/link";
import {Toaster} from "sonner";

function Page({children}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const {updateWord} = useContext(ContextNotorious)


    const handleActive = (index, word) => {
        setActiveIndex(index === activeIndex ? 0 : index);
        updateWord(word)
    };

    return (
        <>
            <Toaster/>
            <div className={`${NotoriousStyles.title} ${orbitron.className}`}>
                <Link href={"/"} style={{color: "white"}} prefetch>
                    Notorious
                </Link>
            </div>
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
        </>
    );
}


export default Page;