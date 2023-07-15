import {useEffect, useState} from "react";
function HookTemporization(value) {

    const [counter, setCounter] = useState(0)
    const [state, setState] = useState(value)

    function start () {
        setState(true)
    }

    useEffect(() => {
        if(state) {
            setCounter(60)
        }
    }, [state])

    useEffect(() => {
        if(counter !== 0) {
            setTimeout(() => {
                setCounter(prev => prev - 1)
            },1000)
            return
        }
        setState(false)
    }, [counter])

    return {
        counter,
        state,
        start
    }
}

export default HookTemporization;