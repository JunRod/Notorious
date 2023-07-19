"use client"

import button from "@components/button/Button";
import styles from "@styles/NotoriousView.module.css";
import {orbitron} from "@fonts";
import {useDispatch, useSelector} from "react-redux";
import HookTemporization from "@components/HookTemporization";
import {useEffect, useState} from "react";
import {
    setButtonText, setFlagIdea, setFlagWordsSimilar, setIsDisabled,
} from "@store/play/notoriousSlice";
import {toast, Toaster} from "sonner";

function ButtonLimit() {

    //Redux Toolkit
    const dispatch = useDispatch()
    const {
        isDisabled, wordUse, buttonText, wordEnglish, b64_json, word,
    } = useSelector(state => state.notorious)

    //Made
    const {counter, state, start} = HookTemporization(false)
    const [limitNumber, setLimitNumber] = useState(0)

    //Palancas de activacion para ir a los puntos finales
    function fetchAll() {
        if (wordEnglish?.length === 0) return

        if (wordUse?.length === 0) {
            dispatch(setFlagWordsSimilar(true))
        } else {
            dispatch(setFlagIdea(true))
        }
    }

    //Controlamos cuando podemos hacer peticiones y cuando ya no
    useEffect(() => {
        if (limitNumber < 3 && limitNumber > 0) {
            fetchAll()
            if (limitNumber === 2) {
                toast.error("Solo se puede memorizar 1 palabra por minuto")
                start(true)
                dispatch(setIsDisabled(true))
            }
        }
    }, [limitNumber])

    //Controlamos el limite de peticiones
    useEffect(() => {
        if (!state) dispatch(setIsDisabled(false))
        setLimitNumber(0)
    }, [state])

    useEffect(() => {
        setLimitNumber(0)
    }, [word])

    //Controla los estados del boton
    useEffect(() => {
        if (wordUse?.length === 0) {
            dispatch(setButtonText("Generar palabra similar"))
        } else {
            dispatch(setButtonText("Generar Idea a Memorizar"))
        }
        if (wordEnglish?.length === 0) {
            dispatch(setIsDisabled(true))
        } else {
            dispatch(setIsDisabled(false))
        }
        //Si image estan llenos, disabled en el boton
        if (b64_json?.length > 0) {
            dispatch(setIsDisabled(true))
        }
    }, [wordUse, b64_json, wordEnglish])

    return (<>

            <Toaster position="bottom-right"/>
            <button onClick={() => setLimitNumber(prev => prev + 1)}
                    className={`${styles.button} ${isDisabled && styles.disabled} ${orbitron.className}`}
                    disabled={isDisabled}
            >
                {isDisabled ? counter : buttonText}
            </button>
        </>);
}

export default ButtonLimit;