"use client"
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useGetImage} from "@api/api";
import {setB64_json, setFlagImage} from "@store/play/notoriousSlice";
import Loader from "@components/Loader";

const style = {
    background: "#3e2c1f",
    width: "50%",
    height: "100%"
}

function Image() {

    const dispatch = useDispatch()
    const {b64_json, idea, flagImage} = useSelector(state => state.notorious)

    //SWR: Fetching
    const {isLoadingImage, image} = useGetImage(idea, flagImage)

    //Fetch dependiente de idea: en cuanto idea tenga algo, vamos al punto final de image
    useEffect(() => {
        if (!idea?.length > 0) return
        dispatch(setFlagImage(true))
    }, [idea])

    //Guardar image y parar el fetch
    useEffect(() => {
        if (image) dispatch(setB64_json(image.b64_json))
        if (!isLoadingImage) dispatch(setFlagImage(false))
    }, [image])

    return (
        <div style={style}>
            {
                isLoadingImage
                    ? (<Loader/>)
                    : b64_json
                    && (<img style={style} src={`data:image/png;base64,${b64_json}`} alt="imagen a memorizar"/>)
            }
        </div>)
}

export default Image;
