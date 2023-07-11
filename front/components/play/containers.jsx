"use client"

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import NotoriousViewStyles from "@styles/NotoriousViewStyles.module.css";
import Loader from "@components/Loader";
import words from "@app/play/words.json";
import ButtonNextWord from "@components/play/button/buttonNextWord";
import {WordsSimilarFormatter} from "@components/play/helpers";
import {setCutWord, setIdea, setWordEnglish, setWordsSimilar, setWordUse} from "@store/play/notoriousSlice";

function Containers() {
    const {
        word,
        wordEnglish,
        wordsSimilar,
        cutWord,
        indexWord,
        wordUse,
        idea,
        isLoading
    } = useSelector((state) => state.notorious)

    const dispatch = useDispatch()

    useEffect(() => {
        const words = WordsSimilarFormatter(wordsSimilar)
        dispatch(setCutWord(words))
    }, [wordsSimilar])

    useEffect(() => {
        if (cutWord && cutWord.length > 0 && indexWord >= 0 && indexWord < cutWord.length) {
            dispatch(setWordUse(cutWord[indexWord]));
        }
    }, [cutWord, indexWord]);

    //Get word in english
    useEffect(() => {
        if (word && words[word]) {
            dispatch(setWordUse(""))
            dispatch(setCutWord(""))
            dispatch(setIdea(null))
            dispatch(setWordsSimilar(""))
            Object.values(words[word]).map(word => dispatch(setWordEnglish(word)));
        }
    }, [word])

    function ContainerIdea() {
        return (
            <div className={`${NotoriousViewStyles.wordEspanish} ${NotoriousViewStyles.stylesIdea}`}>
                {
                    isLoading && wordUse?.length > 0
                        ? (<Loader/>)
                        : (<div dangerouslySetInnerHTML={{__html: idea}}></div>)
                }
            </div>
        )
    }

    return (
        <>
            <div className={NotoriousViewStyles.WordsESP_ENGContainer}>
                <div className={NotoriousViewStyles.wordEspanish}>
                    {word}
                </div>
                <div className={`${NotoriousViewStyles.wordEspanish}`}>
                    {wordEnglish}
                </div>
            </div>
            <div className={`${NotoriousViewStyles.wordEspanish} ${NotoriousViewStyles.similarWord}`}>
                <div className={NotoriousViewStyles.similarWordCenter}>
                    {
                        isLoading && wordUse?.length === 0
                            ? (<Loader/>)
                            : (wordUse)
                    }
                </div>
                <ButtonNextWord/>
            </div>
            <ContainerIdea/>
        </>
    );
}

export default Containers;