import style from "@styles/NotoriousViewStyles.module.css"
import {orbitron} from "@fonts";
import ButtonLimit from "@components/play/button/buttonLimit";
import {OneSection, ThreeSection, TwoSection} from "@components/play/sections/sections";
import Image from "@components/play/image";
import {getWordsSimilar} from "@api/api";

function Page() {
    return (
        <div className={`${style.container} ${orbitron.className}`}>
            <div className={style.WordsESP_ENGContainer}>
                <OneSection/>
            </div>
            <div className={`${style.containerTwo}`}>
                <Image/>
                <div className={`${style.wordEspanish} ${style.similarWord}`}>
                    <TwoSection/>
                </div>
            </div>
            <div className={style.IdeaButton}>
                <div className={`${style.wordEspanish} ${style.stylesIdea}`}>
                    <ThreeSection/>
                </div>
                <ButtonLimit/>
            </div>
        </div>
    );
}

export default Page;