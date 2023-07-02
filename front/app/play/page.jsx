"use client"

import {useContext} from "react";
import {ContextNotorious} from "@app/ProviderPage"

function Page() {
    const {word} = useContext(ContextNotorious)

    return (
        <div style={{color: "white"}}>
            {word}
        </div>
    );
}

export default Page;