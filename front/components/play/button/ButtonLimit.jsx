import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState} from "react";
import HookTemporization from "@components/HookTemporization";
import { toast } from 'sonner'
import button from "@components/button/Button";
import NotoriousViewStyles from "@styles/NotoriousViewStyles.module.css";
import {orbitron} from "@fonts";
import {fetchAll} from "@api/api";
import {setIsDisabled} from "@store/play/notoriousSlice";
function ButtonLimit({children}) {

    const { isDisabled } = useSelector(state => state.notorious)
    const dispatch = useDispatch()
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

        dispatch(setIsDisabled(true))
        start(true)
        callSonner()
    }

    useEffect(() => {
        if(!state) dispatch(setIsDisabled(false))

        setLimitNumber(0)
    }, [state])

    return (
        <button onClick={onClick}
                className={`${NotoriousViewStyles.button} ${isDisabled && NotoriousViewStyles.disabled} ${orbitron.className}`}
                disabled={isDisabled}
        >
            {isDisabled ? counter : children}
        </button>
    );
}

export default ButtonLimit;