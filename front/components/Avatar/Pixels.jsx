import {Pixel} from "@styles/PixelGeneratorStyle";

function Pixels() {
    return (
            Array(10).fill().map((_, index) => {
                return (
                    <Pixel/>
                )
            })
    );
}

export default Pixels;