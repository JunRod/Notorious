"use client"

import {createContext, useEffect, useState} from "react";
export const ContextNotorious = createContext(null)

function ProviderPage({children}) {
    const [word, setWord] = useState("hello")

    const updateWord = (wordNew) => {
        setWord(wordNew)
    }

    const contextValues = {
        word,
        updateWord
    }

    return (
        <ContextNotorious.Provider value={contextValues}>
            <div >{children}</div>
        </ContextNotorious.Provider>
    );
}

export default ProviderPage;