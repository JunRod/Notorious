import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {setIndexWord} from "@store/play/notoriousSlice";

function ButtonNextWord() {

    const {cutWord } = useSelector(state => state.notorious)
    const dispatch = useDispatch()

    const nextWord = () => {
        if (cutWord?.length === 0) return;
        dispatch(setIndexWord((prev) => (prev === cutWord?.length - 1 ? 0 : prev + 1)));
    };

    return (
        <Image
            src={"/images/next.svg"}
            height={30}
            width={30}
            alt={"Siguiente palabra"}
            style={{alignSelf: "end", cursor: "pointer"}}
            onClick={nextWord}
        />
    );
}

export default ButtonNextWord;