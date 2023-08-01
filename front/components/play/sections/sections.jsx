"use client"

import {useEffect} from "react";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {
    setB64_json,
    setButtonText,
    setCutWord, setFlagIdea, setFlagImage, setFlagWordsSimilar,
    setIdea,
    setIndexWord, setIsDisabled, setIsLoading, setWord,
    setWordEnglish,
    setWordsSimilar,
    setWordUse
} from "@store/play/notoriousSlice";
import styles from "@styles/NotoriousView.module.css";
import Loader from "@components/Loader";
import words from "@components/words.json";
import {IdeaFormatter, WordsSimilarFormatter} from "@components/play/helpers";
import {useGetIdea, useGetWordsSimilar} from "@api/api";

export function OneSection() {
    const dispatch = useDispatch()
    const {word, wordEnglish} = useSelector(state => state.notorious)

    useEffect(() => {
        if (word.length > 0) {
            dispatch(setWord(word))
                dispatch(setWordEnglish(""))
                dispatch(setWordsSimilar(""))
                dispatch(setCutWord(""))
                dispatch(setIndexWord(0))
                dispatch(setWordUse(""))
                dispatch(setIdea(null))
                dispatch(setIsLoading(null))
                dispatch(setIsDisabled(true))
                dispatch(setButtonText("Generar palabra similar"))
                dispatch(setB64_json(""))
                dispatch(setFlagWordsSimilar(false))
                dispatch(setFlagIdea(false))
                dispatch(setFlagImage(false))
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

    const {cutWord, wordUse, indexWord, wordsSimilar, wordEnglish, flagWordSimilar} = useSelector(state => state.notorious)
    const dispatch = useDispatch()
    const {wordSimilar, isLoadingWordSimilar} = useGetWordsSimilar(wordEnglish, flagWordSimilar)

    //Para avanzar al siguiente indice del array de palabras
    const nextWord = () => {
        if (cutWord?.length === 0) return;
        const index = indexWord === cutWord?.length - 1 ? 0 : indexWord + 1
        dispatch(setIndexWord(index));
    };

    //Mostrar la siguiente palabara del array
    useEffect(() => {
        if (cutWord && cutWord.length > 0 && indexWord >= 0 && indexWord < cutWord.length) {
            dispatch(setWordUse(cutWord[indexWord]));
        }
    }, [cutWord, indexWord]);

    //Formatear las palabras similares y guardarlas en un array
    useEffect(() => {
        const words = WordsSimilarFormatter(wordsSimilar)
        dispatch(setCutWord(words))
    }, [wordsSimilar])

    //Guardar palabras similar y parar el fetch
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
    const {wordUse, idea, word, flagIdea, saveAssociation} = useSelector(state => state.notorious)

    //SWR: Fetching idea
    const {ideaText, isLoadingIdea} = useGetIdea(word, wordUse, flagIdea)

    //Guardar idea y parar el fetch
    useEffect(() => {
        if (ideaText) {
            const idea = IdeaFormatter(ideaText?.content, word, wordUse)
            dispatch(setIdea(idea))
        }
        if (!isLoadingIdea) dispatch(setFlagIdea(false))
    }, [ideaText])

    //Guardar asociacion
    useEffect(() => {
        if(saveAssociation) {

        }

    }, [saveAssociation])


    return isLoadingIdea
        ? (<Loader/>)
        : (<div dangerouslySetInnerHTML={{__html: idea}}></div>)
}
