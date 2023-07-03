"use client"

import {useContext, useEffect, useState} from "react";
import {ContextNotorious} from "@app/ProviderPage"
import NotoriousViewStyles from "@styles/NotoriousViewStyles.module.css"
import {orbitron} from "@fonts";
import words from "@app/play/words.json";
import Image from "next/image"

const BASE_URL = "http://localhost:8080"

function Page() {

    const {word} = useContext(ContextNotorious)
    const [wordEnglish, setWordEnglish] = useState("");
    const [wordsSimilar, setWordSimilar] = useState("")
    const [cutWord, setCutWord] = useState()
    const [indexWord, setIndexWord] = useState(0)
    const [wordUse, setWordUse] = useState()
    const [idea, setIdea] = useState("")

    const generatorIdea = () => {
        if (word && wordUse) {
            const fetchIdea = () => {
                fetch(`${BASE_URL}/idea?wordOne=${word}&wordTwo=${wordUse}`)
                    .then(response => response.text())
                    .then(data => {
                        setIdea(data);
                    })
            }
            fetchIdea();
        }
    }

    const nextWord = () => {
        if (cutWord?.length === 0) return;
        setIndexWord((prev) => (prev === cutWord?.length - 1 ? 0 : prev + 1));
    };

    const fetchAll=() => {
        if (wordEnglish.length === 0) return
        if (wordUse?.length === 0) fetchWordSimilar()
            generatorIdea()
    }

    const fetchWordSimilar = () => {
        fetch(`${BASE_URL}/words?message=${wordEnglish}`)
            .then(response => response.text())
            .then(data => {
                setWordSimilar(data);
            })
    }

    useEffect(() => {
        const words = wordsSimilar
            .split("\n")
            .map((line) => line.replace(/^\s*\d+\.\s*([^()\[\]\s,.\/\d]+)(?:\([^()]*\)|\[[^\]]*\])?.*/, "$1").trim())
            .filter((word) => word !== "")
            .join(",")
            .split(",")
            .map((word) => word.trim());
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
                <div className={`${NotoriousViewStyles.wordEspanish} ${NotoriousViewStyles.similarWord}`}>
                    <div>
                        {wordUse}
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
                    <div className={`${NotoriousViewStyles.wordEspanish}`}>
                        {idea}
                    </div>
                    <button onClick={fetchAll} className={`${NotoriousViewStyles.button} ${orbitron.className}`}>Memorizar</button>
                </div>

        </div>
    );
}

export default Page;