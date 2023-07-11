import NotoriousViewStyles from "@styles/NotoriousViewStyles.module.css"
import {orbitron} from "@fonts";
import Button from "@components/play/button/button";
import Containers from "@components/play/containers";

function Page() {

    return (
        <div className={`${NotoriousViewStyles.container} ${orbitron.className}`}>
            <Containers/>
            <div className={NotoriousViewStyles.IdeaButton}>
                <Button/>
            </div>
        </div>
    );
}

export default Page;