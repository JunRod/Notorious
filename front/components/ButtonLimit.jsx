import button from "@components/Button/Button";
import {useContext, useEffect, useState} from "react";
import NotoriousViewStyles from "@styles/NotoriousViewStyles.module.css";
import {orbitron} from "@fonts";
import {ContextNotorious} from "@app/ProviderPage";
import { toast } from 'sonner'
import HookTemporization from "@components/HookTemporization";

function ButtonLimit({fetchAll, children}) {

    const {disabled, updateDisabled} = useContext(ContextNotorious)
    const {counter, state, start} = HookTemporization(false)
    const [limitNumber, setLimitNumber] = useState(0)

    function callSonner (){
        toast.error("Solo se pueden hacer 3 solicitudes por minuto")
    }

    function onClick () {
        setLimitNumber(prev => prev + 1)

        if(limitNumber < 3) {
            fetchAll()
            return
        }

        updateDisabled(true)
        start(true)
        callSonner()
    }

    useEffect(() => {
        if(!state) updateDisabled(false)

        setLimitNumber(0)
    }, [state])

    return (
        <button onClick={onClick} className={`
        ${NotoriousViewStyles.button}
        ${disabled && NotoriousViewStyles.disabled} 
        ${orbitron.className}`}
                disabled={disabled}
        >
            {
                disabled ? counter : children
            }
        </button>
    );
}

export default ButtonLimit;