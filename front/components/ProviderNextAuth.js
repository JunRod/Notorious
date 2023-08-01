"use client"

import {SessionProvider} from "next-auth/react";

function ProviderNextAuth({children}) {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
}

export default ProviderNextAuth;