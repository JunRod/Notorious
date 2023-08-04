"use client"

import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAssociations, setWord} from "@store/play/notoriousSlice";
import {useSession} from "next-auth/react";
import {data} from "@components/words";
import style from "@styles/Documentation.module.css"
import {orbitron} from "@fonts";

function List() {

    const [activeIndex, setActiveIndex] = useState(null);
    const dispatch = useDispatch()
    const {data: session} = useSession()
    const {associations} = useSelector(state => state.notorious)

    const handleActive = (wordSpanish, index) => {
        setActiveIndex(index);
        dispatch(setWord(wordSpanish))
    };

    useEffect(() => {
        //Ya que esto se ejecuta cada vez que entro a /play, entonces con swr
        //cuando volvamos de iniciar sesion, ya no traera de nuevo todas las associaciones del usuarios,
        //sino del cachè

        if (!session?.username) return
        const {username} = session

        async function getAssociations() {
            const resp = await fetch(`https://notoriousback.ddns.net/getUser?username=${username}`, {
                method: 'GET'
            })
            const {data} = await resp.json()
            dispatch(setAssociations(data))
        }

        getAssociations()
    }, [session])

    return data.map((words, index) => {
            const {wordSpanish, wordEnglish} = words

            const result = associations.filter(words => {
                const {wordEnglish: wordEnglishLocal} = words
                if (wordEnglish === wordEnglishLocal) return wordEnglishLocal
            })

            return (<div
                className={`${orbitron.className} ${style.seccion} ${index === activeIndex && style.onSeccion}`}
                onClick={() => handleActive(wordSpanish, index)}
                key={wordSpanish}
            >{wordSpanish} {result?.length > 0 && "✅"}</div>)
        }
    );
}

export default List;