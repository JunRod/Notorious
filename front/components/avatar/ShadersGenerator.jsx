import {ShadesColors} from "@styles/ContainerAvatarStyles";

const ShadersGenerator = () => Array(3).fill().map((_, index) => <ShadesColors index={index}/>);
export default ShadersGenerator;