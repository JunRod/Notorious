"use client"

import {useContext, useEffect, useState} from "react";
import {ContextNotorious} from "@app/ProviderPage"
import NotoriousViewStyles from "@styles/NotoriousViewStyles.module.css"
import {orbitron} from "@fonts";
import words from "@app/play/words.json";
import Image from "next/image"
import Loader from "@components/Loader";
import ButtonLimit from "@components/ButtonLimit";

const BASE_URL = "https://c276-190-237-47-121.ngrok-free.app"

function Page() {

    const {word, disabled, updateDisabled} = useContext(ContextNotorious)
    const [wordEnglish, setWordEnglish] = useState("");
    const [wordsSimilar, setWordSimilar] = useState("")
    const [cutWord, setCutWord] = useState()
    const [indexWord, setIndexWord] = useState(0)
    const [wordUse, setWordUse] = useState("")
    const [idea, setIdea] = useState(null)
    const [buttonText, setButtonText] = useState("Generar palabra similar")
    const [isLoading, setIsLoading] = useState(null)

    const generatorIdea = () => {
        if (word && wordUse) {
            const fetchIdea = () => {
                setIsLoading(true)
                fetch(`${BASE_URL}/idea?wordOne=${word}&wordTwo=${wordUse}`, { mode: 'no-cors' })
                    .then(response => response.text())
                    .then(data => {
                        const DataMinusculas = data.toLowerCase()
                        const regex = new RegExp(`\\b${word}\\w*\\b|\\b${wordUse}\\w*\\b`, "gi");
                        const resaltado = DataMinusculas.replace(regex, (match) => {
                            return `<span style="color: red">${match}</span>`;
                        });
                        setIdea(resaltado);
                        setIsLoading(false)
                    })
            }
            fetchIdea();
        }
    }

    const nextWord = () => {
        if (cutWord?.length === 0) return;
        setIndexWord((prev) => (prev === cutWord?.length - 1 ? 0 : prev + 1));
    };

    const fetchAll = () => {
        if (wordEnglish.length === 0 ) return
        if (wordUse?.length === 0) return fetchWordSimilar()
        generatorIdea()
    }

    const fetchWordSimilar = () => {
        setIsLoading(true)
        fetch(`${BASE_URL}/words?message=${wordEnglish}`, { mode: 'no-cors' })
            .then(response => response.text())
            .then(data => {
                setWordSimilar(data);
                setIsLoading(false)
            })
    }

    useEffect(() => {
        if(wordUse?.length === 0) {
            setButtonText("Generar palabra similar")
        } else {
            setButtonText("Generar Idea a Memorizar")
        }
    }, [wordUse])

    useEffect(() => {
        const words = wordsSimilar
            .split("\n")
            .map((line) => line.replace(/^\s*\d+\.\s*([^()\[\]\s,.\/\d]+)(?:\([^()]*\)|\[[^\]]*\])?.*/, "$1").trim())
            .filter((word) => word !== "")
            .join(",")
            .split(",")
            .map((word) => word.trim().replace(/\/.*$/, ""))
            .filter(word => !word.includes(" "));
        setCutWord(words)
    }, [wordsSimilar])

    useEffect(() => {
        if (cutWord && cutWord.length > 0 && indexWord >= 0 && indexWord < cutWord.length) {
            setWordUse(cutWord[indexWord]);
        }
    }, [cutWord, indexWord]);


    //Get word in english
    useEffect(() => {
        if (word && words[word]) {
            setWordUse("")
            setCutWord("")
            setIdea(null)
            setWordSimilar("")
            Object.values(words[word]).map(word => setWordEnglish(word));
        }
    }, [word])

    return (
        <div className={`${NotoriousViewStyles.container} ${orbitron.className}`}>
            <div className={NotoriousViewStyles.WordsESP_ENGContainer}>
                <div className={NotoriousViewStyles.wordEspanish}>
                    {word}
                </div>
                <div className={`${NotoriousViewStyles.wordEspanish}`}>
                    {wordEnglish}
                </div>
            </div>
                <div className={`
                ${NotoriousViewStyles.wordEspanish} 
                ${NotoriousViewStyles.similarWord}
                `}>
                    <div className={NotoriousViewStyles.similarWordCenter}>
                        {
                            isLoading && wordUse?.length === 0
                                ? (<Loader/>)
                                : (wordUse)
                        }
                    </div>
                    <Image
                        src={"/images/next.svg"}
                        height={30}
                        width={30}
                        alt={"Siguiente palabra"}
                        style={{alignSelf: "end", cursor: "pointer"}}
                        onClick={nextWord}
                    />
                </div>
                <div className={NotoriousViewStyles.IdeaButton}>
                    <div
                        className={`${NotoriousViewStyles.wordEspanish} ${NotoriousViewStyles.stylesIdea}`}
                    >
                        {
                            isLoading && wordUse?.length > 0
                                ? (<Loader/>)
                                : (<div dangerouslySetInnerHTML={{ __html: idea }}></div>)
                        }

                    </div>
                    <ButtonLimit fetchAll={fetchAll}>{buttonText}</ButtonLimit>
                </div>
        </div>
    );
}

export default Page;