import {ShadesColors} from "@styles/ContainerAvatarStyles";

function ShadersGenerator() {
    return (
        Array(3).fill().map((_, index) => {
            return (
                <ShadesColors index={index}/>
            )
        })
    );
}

export default ShadersGenerator;