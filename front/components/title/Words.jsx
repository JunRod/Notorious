import { orbitron, PixelPublic } from "@fonts";
import { Ious, Notor } from "@styles/TitleStyles";

const Words = () => {
  return (
    <>
      <Notor className={orbitron.className} style={{fontWeight: 600}}>NOTOR</Notor>
      <Ious className={PixelPublic.className}>IOUS</Ious>
    </>
  )
}

export default Words