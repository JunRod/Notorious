"use client"

import {useEffect} from 'react';
import ButtonLimit from "@components/play/button/ButtonLimit";
import {useDispatch, useSelector} from "react-redux";
import {setButtonText} from "@store/play/notoriousSlice";

function Button() {
    const {wordUse, buttonText} = useSelector(state => state.notorious)
    const dispatch = useDispatch()

    useEffect(() => {
        if (wordUse?.length === 0) {
            dispatch(setButtonText("Generar palabra similar"))
        } else {
            dispatch(setButtonText("Generar Idea a Memorizar"))
        }
    }, [wordUse])

    return <ButtonLimit>{buttonText}</ButtonLimit>
}

export default Button;