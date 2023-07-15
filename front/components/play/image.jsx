"use client"
import {useSelector} from "react-redux";

const style = {
    background: "#3e2c1f",
    width: "50%",
    height: "100%"
}

function Image() {
    const {b64_json} = useSelector(state => state.notorious)
    return b64_json?.length > 0 ? (<img style={style} src={`data:image/png;base64,${b64_json}`} alt="imagen a memorizar"/>) : (<div style={style}></div>)
}

export default Image;
