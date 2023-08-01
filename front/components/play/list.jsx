"use client"

import {useState} from "react";
import {useDispatch} from "react-redux";
import {orbitron} from "@fonts";
import words from "@components/words.json";
import {setWord} from "@store/play/notoriousSlice";
import DocumentationStyle from "@styles/Documentation.module.css";

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
            key={key}
        >{key}</div>
    );
}

export default List;