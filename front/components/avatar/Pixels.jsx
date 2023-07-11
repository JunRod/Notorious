import {Pixel} from "@styles/PixelGeneratorStyle";

function Pixels() {
    return (
            Array(11).fill().map((_, index) => {
                return (
                    <Pixel index={index}/>
                )
            })
    );
}

export default Pixels;