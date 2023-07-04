"use client"

import {createContext, useEffect, useState} from "react";
export const ContextNotorious = createContext(null)

function ProviderPage({children}) {
    const [word, setWord] = useState("")
    const [disabled ,setDisabled] = useState(false)


    const updateWord = (wordNew) => {
        setWord(wordNew)
    }

    const updateDisabled = (content) => {
        setDisabled(content)
    }

    const contextValues = {
        word,
        updateWord,
        disabled,
        updateDisabled
    }

    return (
        <ContextNotorious.Provider value={contextValues}>
            <div >{children}</div>
        </ContextNotorious.Provider>
    );
}

export default ProviderPage;