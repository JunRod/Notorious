"use client"

import {Provider} from "react-redux";
import {store} from "@store/store";

function ProviderPage({children}) {

    return (
        <Provider store={store}>{children}</Provider>
    );
}

export default ProviderPage;