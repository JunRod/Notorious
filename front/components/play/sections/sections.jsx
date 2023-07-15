"use client"

import {useEffect} from "react";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {
    setB64_json,
    setCutWord,
    setIdea,
    setIndexWord, setWord,
    setWordEnglish,
    setWordsSimilar,
    setWordUse
} from "@store/play/notoriousSlice";
import styles from "@styles/NotoriousViewStyles.module.css";
import Loader from "@components/Loader";
import words from "@app/play/words.json";
import {WordsSimilarFormatter} from "@components/play/helpers";

export function OneSection() {
    const {word, wordEnglish} = useSelector(state => state.notorious)
    const dispatch = useDispatch()

    useEffect(() => {
        if (word) {
            dispatch(setIndexWord(0))
            dispatch(setWordUse(""))
            dispatch(setCutWord(""))
            dispatch(setIdea(null))
            dispatch(setWordsSimilar(""))
            dispatch(setB64_json(""))
            Object.values(words[word]).map(word => dispatch(setWordEnglish(word)));
        }
    }, [word])

    return (
        <>
            <div className={styles.wordEspanish}>
                {word}
            </div>
            <div className={`${styles.wordEspanish}`}>
                {wordEnglish}
            </div>
        </>
    )
}

export function TwoSection() {

    const {cutWord, isLoading, wordUse, indexWord, wordsSimilar} = useSelector(state => state.notorious)
    const dispatch = useDispatch()

    const nextWord = () => {
        if (cutWord?.length === 0) return;

        const index = indexWord === cutWord?.length - 1 ? 0 : indexWord + 1

        dispatch(setIndexWord(index));
    };

    useEffect(() => {
        if (cutWord && cutWord.length > 0 && indexWord >= 0 && indexWord < cutWord.length) {
            dispatch(setWordUse(cutWord[indexWord]));
        }
    }, [cutWord, indexWord]);

    useEffect(() => {
        const words = WordsSimilarFormatter(wordsSimilar)
        dispatch(setCutWord(words))
    }, [wordsSimilar])

    return (
        <>
            <div className={styles.similarWordCenter}>
                {
                    isLoading && wordUse?.length === 0
                        ? (<Loader/>)
                        : (wordUse)
                }
            </div>
            <Image
                src="/images/next.svg"
                height={30}
                width={30}
                alt="Siguiente palabra"
                style={{cursor: "pointer"}}
                onClick={nextWord}
            />
        </>
    );
}

export function ThreeSection() {
    const {isLoading, wordUse, idea} = useSelector(state => state.notorious)

    return isLoading && wordUse?.length > 0
        ? (<Loader/>)
        : (<div dangerouslySetInnerHTML={{__html: idea}}></div>)
}
