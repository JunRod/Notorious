"use client"
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useGetImage} from "@api/api";
import {setB64_json, setFlagImage} from "@store/play/notoriousSlice";
import Loader from "@components/Loader";
import {data} from "@components/words";

const style = {
    background: "#3e2c1f",
    width: "50%",
    height: "100%"
}

function Image() {

    const dispatch = useDispatch()
    const {b64_json, idea, flagImage, associations, wordEnglish} = useSelector(state => state.notorious)

    //SWR: Fetching
    const {isLoadingImage, image} = useGetImage(idea, flagImage)

    //Fetch dependiente de idea: en cuanto idea tenga algo, vamos al punto final de image
    useEffect(() => {
        /*Verificar si existe la palabra en ingles en el state de associations,
        * Si existe quiere decir que tiene una imagen ya generada,
        * Por lo que no generará una nueva en cuanto guarde la idea en el state idea
        * */

        //Verificamos si la palabra en ingles se encuentra state associations.
        const result = associations.filter(associationObj => {
            const {wordEnglish: wordEnglishState} = associationObj
            if(wordEnglishState === wordEnglish) return associationObj
        })

        //Si tiene un resultado entonces tiene una imagen, por lo que no es necesario generar una
        if(result?.length > 0) return

        if (!idea?.length > 0) return
        dispatch(setFlagImage(true))
    }, [idea])

    //Guardar image y parar el fetch
    useEffect(() => {
        if (image) dispatch(setB64_json(image.url))
        if (!isLoadingImage) dispatch(setFlagImage(false))
    }, [image])

    return (
        <div style={style}>
            {
                isLoadingImage
                    ? (<Loader/>)
                    : b64_json
                    && (<img style={style} src={b64_json} alt="imagen a memorizar"/>)
            }
        </div>)
}

export default Image;
