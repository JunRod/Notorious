"use client"

import {useState} from "react";
import {useDispatch} from "react-redux";
import {orbitron} from "@fonts";
import words from "@app/play/words.json";
import {setWord} from "@store/play/notoriousSlice";
import DocumentationStyle from "@styles/DocumentationStyles.module.css";

function List() {

    const [activeIndex, setActiveIndex] = useState(0);
    const dispatch = useDispatch()

    const handleActive = (index, word) => {
        setActiveIndex(index === activeIndex ? 0 : index);
        dispatch(setWord(word))
    };

    return Object.keys(words).map((key, index) =>
        <div
            className={`${orbitron.className} ${DocumentationStyle.seccion} ${index === activeIndex && DocumentationStyle.onSeccion}`}
            onClick={() => handleActive(index, key)}
        >{key}</div>
    );
}

export default List;