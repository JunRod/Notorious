"use client"

import {useEffect} from "react";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {
    setCutWord, setFlagIdea, setFlagWordsSimilar,
    setIdea,
    setIndexWord,  setWord,
    setWordEnglish,
    setWordsSimilar,
    setWordUse
} from "@store/play/notoriousSlice";
import styles from "@styles/NotoriousView.module.css";
import Loader from "@components/Loader";
import words from "@app/play/words.json";
import {IdeaFormatter, WordsSimilarFormatter} from "@components/play/helpers";
import {useGetIdea, useGetWordsSimilar} from "@api/api";

export function OneSection() {
    const dispatch = useDispatch()
    const {word, wordEnglish} = useSelector(state => state.notorious)

    useEffect(() => {
        if (word.length > 0) {
            dispatch(setWord(word))
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

    const {cutWord, wordUse, indexWord, wordsSimilar, isLoading, wordEnglish, flagWordSimilar} = useSelector(state => state.notorious)
    const dispatch = useDispatch()
    const {wordSimilar, isLoadingWordSimilar} = useGetWordsSimilar(wordEnglish, flagWordSimilar)

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

    //Guardar palabra similar y parar el fetch
    useEffect(() => {
        if (wordSimilar) dispatch(setWordsSimilar(wordSimilar?.content))
        if (!isLoadingWordSimilar) dispatch(setFlagWordsSimilar(false))
    }, [wordSimilar])

    return (
        <>
            <div className={styles.similarWordCenter}>
                {
                    isLoadingWordSimilar && wordUse?.length === 0
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
    const dispatch = useDispatch()
    const {wordUse, idea, word, flagIdea} = useSelector(state => state.notorious)

    //SWR: Fetching
    const {ideaText, isLoadingIdea} = useGetIdea(word, wordUse, flagIdea)

    //Guardar idea y parar el fetch
    useEffect(() => {
        if (ideaText) {
            const idea = IdeaFormatter(ideaText?.content, word, wordUse)
            dispatch(setIdea(idea))
        }
        if (!isLoadingIdea) dispatch(setFlagIdea(false))
    }, [ideaText])


    return isLoadingIdea
        ? (<Loader/>)
        : (<div dangerouslySetInnerHTML={{__html: idea}}></div>)
}
