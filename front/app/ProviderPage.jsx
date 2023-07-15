"use client"

import {Provider} from "react-redux";
import {store} from "@store/store";

const ProviderPage = ({children}) => <Provider store={store}>{children}</Provider>

export default ProviderPage;