"use client"

import {useEffect} from "react";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {
    setAssociations,
    setB64_json,
    setButtonText,
    setCutWord, setFlagIdea, setFlagImage, setFlagWordsSimilar,
    setIdea,
    setIndexWord, setIsDisabled, setIsLoading, setSaveAssociation, setWord,
    setWordEnglish,
    setWordsSimilar,
    setWordUse
} from "@store/play/notoriousSlice";
import styles from "@styles/NotoriousView.module.css";
import Loader from "@components/Loader";
import {data} from "@components/words.js";
import {IdeaFormatter, WordsSimilarFormatter} from "@components/play/helpers";
import {useGetIdea, useGetWordsSimilar} from "@api/api";
import {useSession} from "next-auth/react";
import {Toaster, toast} from "sonner";
import {orbitron} from "@fonts";
import style from "@styles/Documentation.module.css";

export function OneSection() {
    const dispatch = useDispatch()
    const {word, wordEnglish} = useSelector(state => state.notorious)

    //Reiniciar todo
    useEffect(() => {
        dispatch(setWordsSimilar(""))
        dispatch(setCutWord([]))
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
        dispatch(setSaveAssociation(false))
    }, [])

    //Cada que word cambie, obtiene su traduccion tambien
    useEffect(() => {
        if (!word?.length > 0) return

        dispatch(setWord(word))

        data.forEach(words => {
            const {wordSpanish, wordEnglish} = words
            if (wordSpanish === word) {
                dispatch(setWordEnglish(wordEnglish))
            }
        })
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

    const {
        cutWord,
        wordUse,
        indexWord,
        wordsSimilar,
        wordEnglish,
        flagWordSimilar
    } = useSelector(state => state.notorious)
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
    const {idea, word, flagIdea, saveAssociation, wordEnglish, wordUse, associations, b64_json} = useSelector(state => state.notorious)
    const {data: session} = useSession()

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

        let isSaveCalled = false;

        async function saveAssociationFunction() {

            if (isSaveCalled) return; //Si ya se llamó no hace nada
            isSaveCalled = true

            if (!session) return
            const {username} = session

            if (!saveAssociation) return

            const data = {
                usernameFK: username,
                wordEnglish,
                wordSimilar: wordUse,
                idea: idea,
                image: b64_json
            }

            const resp = await fetch(`https://notoriousback.ddns.net/addNewAssociation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result = await resp.text()

            delete data.usernameFK

            dispatch(setAssociations([...associations, data]))
            toast(result)
        }

        saveAssociationFunction()

    }, [saveAssociation])

    //Mostrar Associacion
    useEffect(() => {

        //Verificamos si la palabra en ingles se encuentra state associations.
        const result = associations.filter(associationObj => {
            const {wordEnglish: wordEnglishState} = associationObj
            if(wordEnglishState === wordEnglish) return associationObj
        })

        //Si se encuentra quiere decir que podemos mostrar la associacion
        if(result?.length > 0) {
            const object = result[0]
            const {wordSimilar, idea, image} = object

            dispatch(setWordUse(wordSimilar))
            dispatch(setB64_json(image))
            dispatch(setIdea(idea))
        } else {
            //Si no encuentra, reiniciar los valores
            dispatch(setWordUse(""))
            dispatch(setB64_json(""))
            dispatch(setIdea(""))
        }

    }, [wordEnglish])

    return (
        <>
            <Toaster position="bottom-right"/>
            {
                isLoadingIdea
                    ? (<Loader/>)
                    : (<div dangerouslySetInnerHTML={{__html: idea}}></div>)
            }
        </>
    )
}
