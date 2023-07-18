"use client"

import button from "@components/button/Button";
import styles from "@styles/NotoriousViewStyles.module.css";
import {orbitron} from "@fonts";
import {useDispatch, useSelector} from "react-redux";
import HookTemporization from "@components/HookTemporization";
import {useEffect, useState} from "react";
import {getIdea, getImage, getWordsSimilar, useGetWordsSimilar} from "@api/api";
import {
    setB64_json,
    setButtonText, setFlag,
    setIdea,
    setIsDisabled,
    setIsLoading,
    setWordsSimilar
} from "@store/play/notoriousSlice";
import {IdeaFormatter} from "@components/play/helpers";
import {toast, Toaster} from "sonner";

function ButtonLimit() {

    const dispatch = useDispatch()
    const {isDisabled, wordUse, buttonText, wordEnglish, word, idea, flag} = useSelector(state => state.notorious)
    const {counter, state, start} = HookTemporization(false)
    const [limitNumber, setLimitNumber] = useState(0)
    const {data, isLoading} = useGetWordsSimilar(wordEnglish, flag)

    useEffect(() => {
        if (data) console.log(data)
        if (!isLoading) dispatch(setFlag(false))
    }, [data])

    async function fetchAll() {
        if (wordEnglish?.length === 0) return

        dispatch(setIsLoading(true))

        if (wordUse?.length === 0) {
            dispatch(setFlag(true))
            /*dispatch(setWordsSimilar(data?.content))*/
        } else {
            /*const data = await getIdea(word, wordUse)
            const dataFormatter = IdeaFormatter(data?.content, word, wordUse)
            dispatch(setIdea(dataFormatter))*/

            /*const resp = await getImage(data?.content)
            dispatch(setB64_json(resp.b64_json))*/
        }
        dispatch(setIsLoading(false))
    }

    function onClick() {
        setLimitNumber(prev => prev + 1)

        if (limitNumber < 3) {
            fetchAll()
        }
        if (limitNumber === 2) {
            //TODO: Esto no esta funcionando
            toast.error("Solo se puede memorizar 1 palabra por minuto")
            dispatch(setIsDisabled(true))
            start(true)
        }
    }

    useEffect(() => {
        if (!state) dispatch(setIsDisabled(false))

        setLimitNumber(0)
    }, [state])

    useEffect(() => {
        if (wordUse?.length === 0) {
            dispatch(setButtonText("Generar palabra similar"))
        } else {
            dispatch(setButtonText("Generar Idea a Memorizar"))
        }
    }, [wordUse])

    return (
        <>

            <Toaster position="bottom-right"/>
            <button onClick={onClick}
                    className={`${styles.button} ${isDisabled && styles.disabled} ${orbitron.className}`}
                    disabled={isDisabled}
            >
                {isDisabled ? counter : buttonText}
            </button>
        </>
    );
}

export default ButtonLimit;