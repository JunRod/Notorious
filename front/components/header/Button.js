"use client"

import {useSession, signIn, signOut} from "next-auth/react";

function Button() {
    const {status} = useSession()

    if (status === "loading") return <div>Loading...</div>

    if(status === "authenticated") return <button onClick={signOut}>Salir</button>

    return <button onClick={signIn}>Entrar</button>

}

export default Button;
