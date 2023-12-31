"use client"

import button from "@components/button/Button";
import styles from "@styles/NotoriousView.module.css";
import {orbitron} from "@fonts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    setButtonText, setFlagIdea, setFlagWordsSimilar, setIsDisabled, setSaveAssociation,
} from "@store/play/notoriousSlice";
import {signIn, useSession} from "next-auth/react";

function ButtonLimit() {

    //Redux Toolkit
    const dispatch = useDispatch()
    const {
        isDisabled, wordUse, buttonText, wordEnglish, b64_json, idea, flagWordSimilar, flagIdea, flagImage,
        saveAssociation
    } = useSelector(state => state.notorious)
    const {data: session} = useSession()

    //Controllers por activar
    function fetchAll() {
        //Verifica que haya un usuario logeado antes de ejecutar los servicios
        if(!session?.username) return signIn()

        //Verifica que haya una palabra en ingles escogida.
        if (wordEnglish?.length === 0) return

        //Si no hay nada en palabra similar, activamos el controlador para obtener la idea similar
        if (wordUse?.length === 0) {
            dispatch(setFlagWordsSimilar(true))
            return
        }
        //Si no hay nada en la idea entonces activamos el controlador de obtener la idea
        if (!idea) {
            dispatch(setFlagIdea(true))
            return
        }
        //Si se rellenó todo, guardamos la asociacion
        if (b64_json?.length > 0) {
            dispatch(setSaveAssociation(true))
        }
    }

    //Controla los estados del boton
    useEffect(() => {
        //Si no tiene una palabra similar
        if (wordUse?.length === 0) {
            dispatch(setButtonText("Generar palabra similar"))
        }
        //Si tiene una palabra similar
        if (wordUse?.length > 0) {
            dispatch(setButtonText("Generar Idea a Memorizar"))
        }
        //Si la imagen esta llena
        if (b64_json?.length > 0) {
            dispatch(setButtonText("Guardar asociación"))
        }
    }, [wordUse, b64_json])

    useEffect(() => {
        //Disable si no escogió ninguna palabra
        if (wordEnglish?.length === 0 || flagWordSimilar || flagIdea || flagImage || saveAssociation) {
            dispatch(setIsDisabled(true))
        } else {
            dispatch(setIsDisabled(false))
        }

    }, [wordEnglish, flagWordSimilar, flagIdea, flagImage, saveAssociation])

    return (<button onClick={fetchAll}
                    className={`${styles.button} ${isDisabled && styles.disabled} ${orbitron.className}`}
                    disabled={isDisabled}
    >
        {buttonText}
    </button>);
}

export default ButtonLimit;