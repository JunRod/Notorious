import {Pixel} from "@styles/PixelGenerator";

function Pixels() {
    return Array(11).fill().map((_, index) => <Pixel index={index}/>)
}

export default Pixels;